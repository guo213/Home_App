<template>
	<a-row justify="space-around" align="middle" type="flex" class="FooterBara-row">
		<a-col v-for="(item,index) in footbarData" :key="item.id" flex="1" @click="changeFootBar(index)">
			<a-row justify="center" align="middle" type="flex" class="FooterBara-col">
				<img :src="getActiveIndex==index?item.activeUrl:item.iconUrl" class="icon-m">
			</a-row>
		</a-col>
	</a-row>
</template>

<script>
	import {
		mapActions,
		mapGetters
	} from 'vuex'
	export default {
		name: 'FooterBar',
		data() {
			return {
				footbarData: [{
						id: 1,
						name: 'dashboard',
						router: '/pages/dashboard/index',
						iconUrl: 'static/img/FooterBar/home.jpg',
						activeUrl: 'static/img/FooterBar/home_active.jpg'
					},
					{
						id: 2,
						name: 'landscape',
						router: '/pages/landscape/index',
						iconUrl: 'static/img/FooterBar/landscape.png',
						activeUrl: 'static/img/FooterBar/landscape_active.png'
					},
					{
						id: 3,
						name: 'warehouse',
						router: '/pages/warehouse/index',
						iconUrl: 'static/img/FooterBar/warehouse.png',
						activeUrl: 'static/img/FooterBar/warehouse_active.png'
					}
				]
			}
		},
		mounted(){
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
			let curRoute = routes[routes.length - 1].route // 获取当前页面路由，也就是最后一个打开的页面路由
			// console.log(curRoute.split('/')[1])
			this.footbarData.forEach((item, i) => {
				curRoute.split('/')[1] == item.name && this.changeActive(i)
			})
		},
		computed: {
			...mapGetters(['getActiveIndex'])
		},
		methods: {

			...mapActions(['changeActive']),
			changeFootBar(index) {
				this.changeActive(index)
				this.footbarData.forEach((item, i) => {
					index === i && uni.redirectTo({
						url: item.router
					})
				})
			}
		}
	}
</script>

<style scoped>
	.FooterBara-row {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		flex: 1;
		height: 3.125rem;
		box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.1);
	}

	.FooterBara-col {
		min-height: 3.125rem;
		justify-content: center;
		align-items: center;
	}
</style>
