import {isEmpty} from 'lodash-es'

export default {
  name: 'HTTP_BASIC_AUTH',
  req: (payload) => {
    if (!isEmpty(payload.jsonApi.auth)) {
      payload.req.auth = payload.jsonApi.auth
    }
    return payload
  }
}
