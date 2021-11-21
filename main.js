import App from './App.vue'

import Vue from 'vue'

import store from './store'
// //把vuex定义成全局组件
Vue.prototype.$store = store

import {
	Button,
	Row,
	Col,
	message
} from 'ant-design-vue';
Vue.prototype.$message = message
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)

import rest from 'utils/rest/index.js'
Vue.prototype.$GET = rest.GET
Vue.prototype.$POST = rest.POST

Vue.prototype.$LOG = console.log


App.mpType = 'app'
Vue.config.productionTip = false
const app = new Vue({
	...App,
	//挂载
	store
})
app.$mount()

