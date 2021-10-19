<template>
	<a-row justify="space-around" align="middle" type="flex" class="FooterBara-row">
		<a-col v-for="item in footbarData" :key="item.id" flex="1" @click="changeFootBar(item.id)">
			<a-row justify="center" align="middle" type="flex" class="FooterBara-col">
				<img :src="ActiveUrl(item)" class="icon-m">
			</a-row>
		</a-col>
	</a-row>
</template>

<script>
	export default {
		name: 'FooterBar',
		data() {
			return {
				footbarData: [{
						id: 1,
						name: 'home',
						router: '/pages/dashboard/index',
						iconUrl: 'static/img/FooterBar/home.jpg',
						activeUrl: 'static/img/FooterBar/home_active.jpg',
						isActive: true
					},
					{
						id: 2,
						name: 'landscape',
						router: '/pages/landscape/index',
						iconUrl: 'static/img/FooterBar/landscape.png',
						activeUrl: 'static/img/FooterBar/landscape_active.png',
						isActive: false
					},
					{
						id: 3,
						name: 'warehouse',
						router: '/pages/warehouse/index',
						iconUrl: 'static/img/FooterBar/warehouse.png',
						activeUrl:'static/img/FooterBar/warehouse_active.png',
						isActive: false
					}
				]
			}
		},
		methods: {
			ActiveUrl(item){
				if(item.isActive){
					return item.activeUrl
				} else{
					return item.iconUrl
				}
			},
			changeFootBar(id) {
				this.footbarData.map((item) => {
					item.isActive = item.id === id
					return item
				})
				this.footbarData.forEach((item) => {
					if (item.id === id) {
						console.log('跳转前')
						uni.redirectTo({url:item.router})
						console.log('跳转后')
					}
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
