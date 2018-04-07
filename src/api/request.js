import {
  API_URL,
  API_KEY,
  DEFAULT_ERROR_MESSAGE as ERROR_MESSAGE,
} from '../config'

const serviceError:(error:string)=>any = error => Promise.reject({
  message: ERROR_MESSAGE + (!error || ": ") + error
})

var requestNum = 0

const checkResponse = response => {
  // HTTP 2xx ok
  if (!response.ok) throw new Error(response.statusText);
  // content-type
  const contentType = response.headers.get("content-type");
  if (contentType.indexOf("application/json") === -1) { // !contentType
    throw new Error(ERROR_MESSAGE);
  }
  return response
}

const parseJSON = response => response.json()

const debug = response => {
  console.debug(["<-", response.id, response.error?"error":"ok"].join(" "), response)
  return response
}

const loadJSON = ({
  url,
  body
}:{
  url: string,
  body?: string,
}) => {
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: body ? "POST" : "GET",
    body: body,
  }
  return fetch(url, options).then(checkResponse).then(parseJSON).then(debug).catch(serviceError)
}

const parseJSONRPC = (response) => {
  if (response.error) return serviceError(response.error.message)
  return response.result
}

export const performRequest = ({
  method,
  params
}:{
  method: string,
  params: Object,
}):Object => {
  requestNum++
  if (!params) params = {}
  if (!params.user_hash) params.user_hash = API_KEY

  const url:string = API_URL

  const rpcId = "remaccess_" + requestNum

  console.debug(["->", rpcId, method].join(" "), params)

  return loadJSON({
    url,
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: rpcId,
      method,
      params,
    }),
    method: "POST",
  }).then(parseJSONRPC);
}

export const loadContent = (url) => {
  return loadJSON({
    url,
  })
}
