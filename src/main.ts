import { WINDOW, usePortalService } from '@meetportal/portal-js'

import { PATIENT_TYPE } from '@meetportal/healthcare-js'

const portal = usePortalService()

portal.subscribe(WINDOW.ON_URL_CHANGE, '*', (url: string) => {
  if (!url) return
  const regex = new RegExp('/\\d+$')
  const match = url.match(regex)
  const patientId = (match?.length ? match[0] : '').substring(1)
  if (patientId) {
    portal.setResource({
      id: patientId,
      type: PATIENT_TYPE,
    })
  } else {
    portal.clearResource(PATIENT_TYPE)
  }
})
