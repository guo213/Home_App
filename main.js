import App from './App.vue'

import {
	Button,
	Row,
	Col
} from 'ant-design-vue';

// #ifndef VUE3
import Vue from 'vue'
import store from './store'
// //把vuex定义成全局组件
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
const app = new Vue({
	...App,
	//挂载
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
