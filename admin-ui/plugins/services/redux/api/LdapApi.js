import { handleResponse } from 'Utils/ApiUtils'

export default class LdapApi {
  constructor(api) {
    this.api = api
  }

  // Get Ldap Config
  getLdapConfig = () => {
    return new Promise((resolve, reject) => {
      this.api.getConfigDatabaseLdap((error, data) => {
        handleResponse(error, reject, resolve, data)
      })
    })
  }

  // update Ldap Config
  updateLdapConfig = (input) => {
    return new Promise((resolve, reject) => {
      this.api.putConfigDatabaseLdap(input, (error, data) => {
        handleResponse(error, reject, resolve, data)
      })
    })
  }

  // Add Ldap Config
  addLdapConfig = (input) => {
    return new Promise((resolve, reject) => {
      this.api.postConfigDatabaseLdap(input.ldap, (error, data) => {
        handleResponse(error, reject, resolve, data)
      })
    })
  }

  // delete Ldap Config
  deleteLdapConfig = (input) => {
    return new Promise((resolve, reject) => {
      this.api.deleteConfigDatabaseLdapByName(input, (error, data) => {
        handleResponse(error, reject, resolve, data)
      })
    })
  }

  // test LDAP Config
  testLdapConfig = (input) => {
    return new Promise((resolve, reject) => {
      this.api.postConfigDatabaseLdapTest(input, (error, data, response) => {
        handleResponse(error, reject, resolve, data)
      })
    })
  }
}
