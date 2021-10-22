const footbar = {
	changeActive: 'changeActiveMutation'
}
import storage from '@/utils/storage/localStorage.js'
const store = {
	state: {
		activeIndex: storage.get('footerbarActiveIndex')  || 0
	},
	getters: {
		getActiveIndex: state => state.activeIndex
	},
	mutations: {
		[footbar.changeActive]: (state, index) => {
			state.activeIndex = index
		}
	},
	actions: {
		changeActive:({ commit }, index) => {
            commit(footbar.changeActive, index)
			storage.set('footerbarActiveIndex',index)
        }

	}
}
export default store
