import axios from 'axios'

export default {
  state: {
    data: []
  },
  mutations: {
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    getDataAkreditasi(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            'https://607644230baf7c0017fa7b3e.mockapi.io/app/yesy/akreditasi_prodi'
          )
          .then((response) => {
            context.commit('setData', response.data)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getAkreditasi(state) {
      return state.data
    }
  }
}
