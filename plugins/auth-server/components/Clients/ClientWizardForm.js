import React, { useState } from 'react'
import {
  Container,
  Wizard,
  Card,
  CardFooter,
  CardBody,
  Form,
  Button,
} from '../../../../app/components'
import ClientBasic from './ClientBasicPanel'
import ClientAdvanced from './ClientAdvancedPanel'
import ClientEncryption from './ClientEncryptionPanel'
import ClientAttributes from './ClientAttributesPanel'
import ClientScript from './ClientScriptPanel'
import GluuCommitDialog from '../../../../app/routes/Apps/Gluu/GluuCommitDialog'
import { Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import { hasPermission, CLIENT_WRITE } from '../../../../app/utils/PermChecker'
const sequence = [
  'Basic',
  'Advanced',
  'EncryptionSigning',
  'ClientAttributes',
  'CustomScripts',
]
const ATTRIBUTE = 'attributes'
const DESCRIPTION = 'description'
let commitMessage = ''
function ClientWizardForm({
  client_data,
  view_only,
  scopes,
  scripts,
  permissions,
  customOnSubmit,
}) {
  const { t } = useTranslation()
  const [modal, setModal] = useState(false)
  const [client, setClient] = useState(client_data)
  const [currentStep, setCurrentStep] = useState(sequence[0])
  const postScripts = scripts
    .filter((item) => item.scriptType == 'POST_AUTHN')
    .filter((item) => item.enabled)
    .map((item) => ({ dn: item.dn, name: item.name }))

  const spontaneousScripts = scripts
    .filter((item) => item.scriptType == 'SPONTANEOUS_SCOPE')
    .filter((item) => item.enabled)
    .map((item) => ({ dn: item.dn, name: item.name }))

  const consentScripts = scripts
    .filter((item) => item.scriptType == 'CONSENT_GATHERING')
    .filter((item) => item.enabled)
    .map((item) => ({ dn: item.dn, name: item.name }))

  const instrospectionScripts = scripts
    .filter((item) => item.scriptType == 'INTROSPECTION')
    .filter((item) => item.enabled)
    .map((item) => ({ dn: item.dn, name: item.name }))

  const rptScripts = scripts
    .filter((item) => item.scriptType == 'UMA_RPT_CLAIMS')
    .filter((item) => item.enabled)
    .map((item) => ({ dn: item.dn, name: item.name }))

  function changeStep(stepId) {
    setCurrentStep(stepId)
  }
  function toggle() {
    setModal(!modal)
  }
  function setId(index) {
    return sequence[index]
  }
  function prevStep() {
    setCurrentStep(sequence[sequence.indexOf(currentStep) - 1])
  }
  function nextStep() {
    setCurrentStep(sequence[sequence.indexOf(currentStep) + 1])
  }
  function isComplete(stepId) {
    return sequence.indexOf(stepId) < sequence.indexOf(currentStep)
  }
  function buildDescription(description) {
    return {
      name: DESCRIPTION,
      multiValued: false,
      values: [description],
    }
  }
  function removeDecription(customAttributes) {
    return customAttributes.filter((item) => item.name !== DESCRIPTION)
  }
  function submitForm(message) {
    commitMessage = message
    toggle()
    document.querySelector('button[type="submit"]').click()
  }

  function extractDescription(customAttributes) {
    var result = customAttributes.filter((item) => item.name === DESCRIPTION)
    if (result && result.length >= 1) {
      return result[0].values
    }
    return ''
  }

  function getMapping(partial, total) {
    if (!partial) {
      partial = []
    }
    return total.filter((item) => partial.includes(item.dn)) || []
  }

  const initialValues = {
    inum: client.inum,
    dn: client.dn,
    clientSecret: client.secret,
    displayName: client.displayName,
    clientName: client.clientName,
    description: extractDescription(client.customAttributes || []),
    applicationType: client.applicationType,
    subjectType: client.subjectType,
    registrationAccessToken: client.registrationAccessToken,
    clientIdIssuedAt: client.clientIdIssuedAt,
    idTokenSignedResponseAlg: client.idTokenSignedResponseAlg,
    tokenEndpointAuthMethod: client.tokenEndpointAuthMethod,
    accessTokenSigningAlg: client.accessTokenSigningAlg,
    authenticationMethod: client.authenticationMethod,
    backchannelUserCodeParameter: client.backchannelUserCodeParameter,
    policyUri: client.policyUri,
    logoURI: client.logoURI,
    sectorIdentifierUri: client.sectorIdentifierUri,
    redirectUris: client.redirectUris,
    claimRedirectUris: client.claimRedirectUris || [],
    responseTypes: client.responseTypes,
    grantTypes: client.grantTypes,
    contacts: client.contacts,
    defaultAcrValues: client.defaultAcrValues,
    postLogoutRedirectUris: client.postLogoutRedirectUris,
    scopes: client.scopes,
    oxAuthClaims: client.oxAuthClaims,
    customAttributes: client.customAttributes,

    attributes: client.attributes,
    tlsClientAuthSubjectDn: client.attributes.tlsClientAuthSubjectDn,
    runIntrospectionScriptBeforeAccessTokenAsJwtCreationAndIncludeClaims:
      client.attributes
        .runIntrospectionScriptBeforeAccessTokenAsJwtCreationAndIncludeClaims ||
      false,
    backchannelLogoutSessionRequired:
      client.attributes.backchannelLogoutSessionRequired || false,
    keepClientAuthorizationAfterExpiration:
      client.attributes.keepClientAuthorizationAfterExpiration || false,
    allowSpontaneousScopes: client.attributes.allowSpontaneousScopes || false,
    tlsClientAuthSubjectDn: client.attributes.tlsClientAuthSubjectDn,
    spontaneousScopes:
      getMapping(client.attributes.spontaneousScopes, scopes) || [],
    introspectionScripts:
      getMapping(
        client.attributes.introspectionScripts,
        instrospectionScripts,
      ) || [],
    spontaneousScopeScriptDns:
      getMapping(
        client.attributes.spontaneousScopeScriptDns,
        spontaneousScripts,
      ) || [],
    consentGatheringScripts:
      getMapping(client.attributes.consentGatheringScripts, consentScripts) ||
      [],
    postAuthnScripts:
      getMapping(client.attributes.postAuthnScripts, postScripts) || [],
    rptClaimsScripts:
      getMapping(client.attributes.rptClaimsScripts, rptScripts) || [],
    backchannelLogoutUri: client.attributes.backchannelLogoutUri,

    additionalAudience: client.attributes.additionalAudience || [],
    customObjectClasses: client.customObjectClasses,
    deletable: client.deletable,
    frontChannelLogoutSessionRequired: client.frontChannelLogoutSessionRequired,
    requireAuthTime: client.requireAuthTime,
    trustedClient: client.trustedClient,
    persistClientAuthorizations: client.persistClientAuthorizations,
    includeClaimsInIdToken: client.includeClaimsInIdToken,
    rptAsJwt: client.rptAsJwt,
    accessTokenAsJwt: client.accessTokenAsJwt,
    disabled: client.disabled,
    tokenBindingSupported: client.tokenBindingSupported,
    runIntrospectionScriptBeforeAccessTokenAsJwtCreationAndIncludeClaims:
      client.runIntrospectionScriptBeforeAccessTokenAsJwtCreationAndIncludeClaims,
    keepClientAuthorizationAfterExpiration:
      client.keepClientAuthorizationAfterExpiration,
    allowSpontaneousScopes: client.allowSpontaneousScopes,
    backchannelLogoutSessionRequired: client.backchannelLogoutSessionRequired,
  }
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          values['action_message'] = commitMessage
          values[
            ATTRIBUTE
          ].runIntrospectionScriptBeforeAccessTokenAsJwtCreationAndIncludeClaims =
            values.runIntrospectionScriptBeforeAccessTokenAsJwtCreationAndIncludeClaims
          values[ATTRIBUTE].keepClientAuthorizationAfterExpiration =
            values.keepClientAuthorizationAfterExpiration
          values[ATTRIBUTE].allowSpontaneousScopes =
            values.allowSpontaneousScopes
          values[ATTRIBUTE].backchannelLogoutSessionRequired =
            values.backchannelLogoutSessionRequired
          values[ATTRIBUTE].tlsClientAuthSubjectDn =
            values.tlsClientAuthSubjectDn
          values[ATTRIBUTE].spontaneousScopes = values.spontaneousScopes
          values[ATTRIBUTE].introspectionScripts = values.introspectionScripts
          values[ATTRIBUTE].spontaneousScopeScriptDns =
            values.spontaneousScopeScriptDns
          values[ATTRIBUTE].consentGatheringScripts =
            values.consentGatheringScripts
          values[ATTRIBUTE].rptClaimsScripts = values.rptClaimsScripts
          values[ATTRIBUTE].backchannelLogoutUri = values.backchannelLogoutUri
          values[ATTRIBUTE].postAuthnScripts = values.postAuthnScripts
          values[ATTRIBUTE].additionalAudience = values.additionalAudience
          if (!values['customAttributes']) {
            values['customAttributes'] = []
          }
          if (values[DESCRIPTION]) {
            values['customAttributes'] = removeDecription(
              values['customAttributes'],
            )
          }
          values['customAttributes'].push(buildDescription(values[DESCRIPTION]))
          values['displayName'] = values['clientName']
          customOnSubmit(JSON.parse(JSON.stringify(values)))
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Card>
              <CardBody className="d-flex justify-content-center pt-5">
                <Wizard activeStep={currentStep} onStepChanged={changeStep}>
                  <Wizard.Step
                    id={setId(0)}
                    icon={<i className="fa fa-shopping-basket fa-fw"></i>}
                    complete={isComplete(sequence[0])}
                  >
                    {t('titles.client_basic')}
                  </Wizard.Step>
                  <Wizard.Step
                    id={setId(1)}
                    icon={<i className="fa fa-cube fa-fw"></i>}
                    complete={isComplete(sequence[1])}
                  >
                    {t('titles.client_advanced')}
                  </Wizard.Step>
                  <Wizard.Step
                    id={setId(2)}
                    icon={<i className="fa fa-credit-card fa-fw"></i>}
                    complete={isComplete(sequence[2])}
                  >
                    {t('titles.client_encryption_signing')}
                  </Wizard.Step>
                  <Wizard.Step
                    id={setId(3)}
                    icon={<i className="fa fa-credit-card fa-fw"></i>}
                    complete={isComplete(sequence[3])}
                  >
                    {t('titles.client_attributes')}
                  </Wizard.Step>
                  <Wizard.Step
                    id={setId(4)}
                    icon={<i className="fa fa-credit-card fa-fw"></i>}
                    complete={isComplete(sequence[4])}
                  >
                    {t('titles.client_scripts')}
                  </Wizard.Step>
                </Wizard>
              </CardBody>
              <CardBody className="p-5">
                {(() => {
                  setClient(formik.values)
                  switch (currentStep) {
                    case sequence[0]:
                      return (
                        <div
                          style={
                            view_only
                              ? { pointerEvents: 'none', opacity: '0.99' }
                              : {}
                          }
                        >
                          <ClientBasic
                            client={client}
                            scopes={scopes}
                            formik={formik}
                          />
                        </div>
                      )
                    case sequence[1]:
                      return (
                        <div
                          style={
                            view_only
                              ? { pointerEvents: 'none', opacity: '0.99' }
                              : {}
                          }
                        >
                          <ClientAdvanced
                            client={client}
                            scripts={scripts}
                            formik={formik}
                          />
                        </div>
                      )
                    case sequence[2]:
                      return (
                        <div
                          style={
                            view_only
                              ? { pointerEvents: 'none', opacity: '0.99' }
                              : {}
                          }
                        >
                          <ClientEncryption client={client} formik={formik} />
                        </div>
                      )
                    case sequence[3]:
                      return (
                        <div
                          style={
                            view_only
                              ? { pointerEvents: 'none', opacity: '0.99' }
                              : {}
                          }
                        >
                          <ClientAttributes client={client} formik={formik} />
                        </div>
                      )
                    case sequence[4]:
                      return (
                        <div
                          style={
                            view_only
                              ? { pointerEvents: 'none', opacity: '0.99' }
                              : {}
                          }
                        >
                          <ClientScript
                            client={client}
                            formik={formik}
                            scripts={scripts}
                            scopes={scopes}
                          />
                        </div>
                      )
                  }
                })()}
              </CardBody>
              <CardFooter className="p-4 bt-0">
                <div className="d-flex">
                  {currentStep !== sequence[0] && (
                    <Button
                      type="button"
                      onClick={prevStep}
                      color="link"
                      className="mr-3"
                    >
                      <i className="fa fa-angle-left mr-2"></i>
                      {t('actions.previous')}
                    </Button>
                  )}
                  {currentStep !== sequence[sequence.length - 1] && (
                    <Button
                      type="button"
                      color="primary"
                      onClick={nextStep}
                      className="ml-auto px-4"
                    >
                      {t('actions.next')}
                      <i className="fa fa-angle-right ml-2"></i>
                    </Button>
                  )}
                  {currentStep === sequence[sequence.length - 1] &&
                    !view_only &&
                    hasPermission(permissions, CLIENT_WRITE) && (
                      <Button
                        type="button"
                        color="primary"
                        className="ml-auto px-4"
                        onClick={toggle}
                      >
                        {t('actions.apply')}
                      </Button>
                    )}
                </div>
              </CardFooter>
              <Button
                type="submit"
                color="primary"
                style={{ visibility: 'hidden' }}
              >
                {t('actions.submit')}
              </Button>
            </Card>
          </Form>
        )}
      </Formik>
      <GluuCommitDialog handler={toggle} modal={modal} onAccept={submitForm} />
    </Container>
  )
}

export default ClientWizardForm
