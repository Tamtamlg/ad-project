export default {
  state: {
    ads: [
      {title: 'First ad', description: 'first description', promo: false, imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', id: '123'},
      {title: 'Secont ad', description: 'first description', promo: true, imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', id: '1234'},
      {title: 'Third ad', description: 'first description', promo: true, imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', id: '12345'}
    ]
  },
  mutations: {
    creareAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    creareAd ({commit}, payload) {
      payload.id = 'testid'
      commit('creareAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo === true
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return (adId) => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
