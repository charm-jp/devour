import {isEmpty, assign} from 'lodash-es'

export default {
  name: 'HEADER',
  req: (payload) => {
    if (!isEmpty(payload.jsonApi.headers)) {
      payload.req.headers = assign({}, payload.req.headers, payload.jsonApi.headers)
    }
    return payload
  }
}
