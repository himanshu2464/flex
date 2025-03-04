import React from 'react'
import { FormGroup, Col } from 'Components'
import { Typeahead } from 'react-bootstrap-typeahead'
import GluuLabel from '../Gluu/GluuLabel'
import GluuTooltip from './GluuTooltip'
import Typography from '@material-ui/core/Typography'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
  },
})

function GluuTypeAhead({
  label,
  name,
  value,
  options,
  formik = null,
  required,
  doc_category,
  doc_entry,
  forwardRef = null,
  onChange = null,
  lsize = 4,
  rsize = 8,
  disabled,
}) {
  const { t } = useTranslation()
  return (
    <GluuTooltip doc_category={doc_category} doc_entry={doc_entry || name}>
      <FormGroup row>
        {required ? (
          <GluuLabel label={label} size={lsize} required />
        ) : (
          <GluuLabel label={label} size={lsize} />
        )}
        <Col sm={rsize}>
          <Typeahead
            allowNew
            disabled={disabled}
            ref={forwardRef}
            emptyLabel=""
            labelKey={name}
            onChange={(selected) => {
              if (formik) {
                formik.setFieldValue(name, selected)
              } else if (onChange) {
                onChange(selected)
              }
            }}
            id={name}
            data-testid={name}
            name={name}
            multiple={true}
            defaultSelected={value}
            options={options}
          />
          <ThemeProvider theme={theme}>
            <Typography variant="subtitle1">
              {t('placeholders.typeahead_holder_message')}
            </Typography>
          </ThemeProvider>
        </Col>
      </FormGroup>
    </GluuTooltip>
  )
}

GluuTypeAhead.defaultProps = {
  lsize: 4,
  rsize: 8,
  required: false,
  disabled: false,
}

export default GluuTypeAhead
