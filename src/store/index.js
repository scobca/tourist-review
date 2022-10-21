import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      token: localStorage.getItem('token'),
      menu: false,
      poi: {},
      route: {
        distanceInMeters: 100,
        timeInMinutes: 60
      }
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
    }
  },
  actions: {
  },
  modules: {
  }
})
