import { post } from 'axios'

const clientId = 'c99df66f9a3e4ef1912cdf39367ea621'
const clientSecret = 'a1xsIWJcm86C38kwQWZB9tAZx6DuLtYY'

const region = 'eu'

const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()

  body.append('grant_type', 'client_credentials')

  const config = {
    headers: { Content_Type: 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}
