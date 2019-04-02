import fetch from "node-fetch"

export interface IAzureAdTokens {
  idToken: string,
  accessToken: string,
  refreshToken: string
}
function api <T>(url: string, params: URLSearchParams): Promise<T> {
  return fetch(url, {method: "POST", body: params})
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const responseJson = response.json<T>()
      console.log("Response from ", url, ", is: ", responseJson)
      return responseJson
    })
}
/*
function fetchTokens(url: string, params: URLSearchParams): IAzureAdTokens {
  const adTokens = fetch(url, {method: "POST", body: params})
    .then(async response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const responseJson = await response.json()
      console.log("Response from ", url, ", is: ", responseJson)
      const tokens = {
        idToken: responseJson.id_token,
        accessToken: responseJson.access_token,
        refreshToken: responseJson.refresh_token
      }
      return tokens
    })
  return adTokens
}


export default {api, fetchTokens}
*/
export default api
