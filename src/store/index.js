import Vue from 'vue'
import Vuex from 'vuex'

import app from './appStore'
import account from './accountStore'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		app,
		account
	}
})

export default store