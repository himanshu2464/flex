import React from 'react'
import { Label } from 'Components'
import ReactTooltip from 'react-tooltip'
import { useTranslation } from 'react-i18next'
import applicationStyle from './styles/applicationstyle'

function GluuLabel({ label, required, size, doc_category, doc_entry, style }) {
  const { t } = useTranslation()
  function getSize() {
    if (size != null) {
      return size
    }
    return 3
  }
  return (
    <Label for={label} sm={getSize()} data-tip data-for={label} style={style}>
      <h5>
        {t(label)}
        {required && <span style={applicationStyle.fieldRequired}> *</span>}
        :
      </h5>
      {doc_category && (
        <ReactTooltip
          html={true}
          type="success"
          id={doc_entry}
          data-testid={doc_entry}
        >
          {t('documentation.' + doc_category + '.' + doc_entry)}
        </ReactTooltip>
      )}
    </Label>
  )
}

export default GluuLabel
