import * as oauth from '@/api/oauth'

export default {
  namespaced: true,
  state: {
    accessToken: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accesToken = payload
    }
  },
  actions: {
    getToken ({ commit }) {
      oauth.getToken()
        .then(({ data }) => {
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        .finally(() => {
          console.log('Done!')
        })
    }
  }
}
