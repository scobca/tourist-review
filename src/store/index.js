import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      token: localStorage.getItem('token'),
      menu: false,
      poi: {},
      route: {},
      city: 'kzn', // msk, spb, kzn
      dataLoading: false,
      openPlace: null
    }
  },
  getters: {
  },
  mutations: {
    toggleMenu() {
      this.state.menu = !this.state.menu
    },
    closeMenu() {
      this.state.menu = false
    },
    updateToken(state, token) {
      state.token = token;
    },
    setPoi(state, area) {
      state.poi = area
    },
    updateRoute(state, route) {
      state.route = route;
    },
    setLoadingStatus(state, status) {
      state.dataLoading = status
    },
    setCity(state, city) {
      state.city = city;
    },
    setOpenPlace(state, place) {
      state.openPlace = place
    }
  },
  actions: {
  },
  modules: {
  }
})
