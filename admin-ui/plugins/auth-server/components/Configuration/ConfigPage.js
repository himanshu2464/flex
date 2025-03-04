import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FormGroup, Card, CardBody } from 'Components'
import GluuLoader from 'Routes/Apps/Gluu/GluuLoader'
import GluuCommitFooter from 'Routes/Apps/Gluu/GluuCommitFooter'
import GluuCommitDialog from 'Routes/Apps/Gluu/GluuCommitDialog'
import useExitPrompt from 'Routes/Apps/Gluu/useExitPrompt'
import PropertyBuilder from './JsonPropertyBuilder'
import { connect } from 'react-redux'
import {
  buildPayload,
  hasPermission,
  PROPERTIES_WRITE,
} from 'Utils/PermChecker'
import {
  getJsonConfig,
  patchJsonConfig,
} from 'Plugins/auth-server/redux/actions/JsonConfigActions'
import { FETCHING_JSON_PROPERTIES } from 'Plugins/auth-server/common/Constants'
import SetTitle from 'Utils/SetTitle'
import applicationStyle from 'Routes/Apps/Gluu/styles/applicationstyle'
import DefaultAcrInput from './DefaultAcrInput'
import { SIMPLE_PASSWORD_AUTH, FETCHING_SCRIPTS } from 'Plugins/auth-server/common/Constants'
import { getAcrsConfig, editAcrs } from 'Plugins/auth-server/redux/actions/AcrsActions'
import { getScripts } from 'Redux/actions/InitActions'

function ConfigPage({ acrs, scripts, configuration, dispatch, permissions }) {
  const { t } = useTranslation()
  const lSize = 6
  const userAction = {}
  const [modal, setModal] = useState(false)
  const [patches, setPatches] = useState([])
  const [operations, setOperations] = useState([])
  const [showExitPrompt, setShowExitPrompt] = useExitPrompt(true)

  SetTitle(t('titles.jans_json_property'))

  const [put, setPut] = useState([])
  const authScripts = scripts
    .filter((item) => item.scriptType == 'PERSON_AUTHENTICATION')
    .filter((item) => item.enabled)
    .map((item) => item.name)

  authScripts.push(SIMPLE_PASSWORD_AUTH)

  useEffect(() => {
    buildPayload(userAction, FETCHING_JSON_PROPERTIES, {})
    dispatch(getJsonConfig(userAction))
    dispatch(getAcrsConfig())
    dispatch(getScripts(userAction))
  }, [])
  useEffect(() => {
    return () => {
      setShowExitPrompt(false)
    }
  }, [])
  const patchHandler = (patch) => {
    setPatches((existingPatches) => [...existingPatches, patch])
    const newPatches = patches
    newPatches.push(patch)
    setPatches(newPatches)
    setOperations(newPatches.concat(put))
  }
  const putHandler = (put) => {
    setPut(put)
    setOperations(patches.concat(put))
  }
  function submitForm(message) {
    toggle()
    handleSubmit(message)
  }
  const handleSubmit = (message) => {
    if (patches.length >= 0) {
      const postBody = {}
      postBody['patchRequest'] = patches
      buildPayload(userAction, message, postBody)
      if (!!put) {
        const opts = {}
        opts['authenticationMethod'] = { 'defaultAcr': put.value }
        dispatch(editAcrs(opts))
      }
      dispatch(patchJsonConfig(userAction))
    }
  }
  function toggle() {
    setModal(!modal)
  }
  return (
    <GluuLoader blocking={!(!!configuration && Object.keys(configuration).length > 0)}>
      <Card style={applicationStyle.mainCard}>
        <CardBody style={{ minHeight: 500 }}>
          {Object.keys(configuration).map((propKey, idx) => (
            <PropertyBuilder
              key={idx}
              propKey={propKey}
              propValue={configuration[propKey]}
              lSize={lSize}
              handler={patchHandler}
            />
          ))}
          {!!configuration && Object.keys(configuration).length > 0 &&
            (<DefaultAcrInput
              id="defaultAcr"
              name="defaultAcr"
              lsize={lSize}
              rsize={lSize}
              type="select"
              label={t('fields.default_acr')}
              handler={putHandler}
              value={acrs.defaultAcr}
              options={authScripts}
              path={'/ACR'}
            />)}

          <FormGroup row></FormGroup>
          {hasPermission(permissions, PROPERTIES_WRITE) && (
            <GluuCommitFooter saveHandler={toggle} />
          )}
          <FormGroup row></FormGroup>
          <FormGroup row></FormGroup>
          <FormGroup row></FormGroup>
          {hasPermission(permissions, PROPERTIES_WRITE) && (
            <GluuCommitDialog
              handler={toggle}
              modal={modal}
              operations={operations}
              onAccept={submitForm}
            />
          )}
        </CardBody>
      </Card>
    </GluuLoader>
  )
}

const mapStateToProps = (state) => {
  return {
    configuration: state.jsonConfigReducer.configuration,
    permissions: state.authReducer.permissions,
    loading: state.jsonConfigReducer.loading,
    acrs: state.acrReducer.acrs,
    scripts: state.initReducer.scripts,
  }
}

export default connect(mapStateToProps)(ConfigPage)