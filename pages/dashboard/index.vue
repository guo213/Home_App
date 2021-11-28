<template>
	<div>
		<a-row class="topTip">
			<a-row justify="space-between" align="middle" type="flex" class="weatherTop">
				<a-row align="middle" type="flex" :gutter="6">
					<a-col><img src="@/static/img/Dashboard/Weather/Rain.png" class="icon-m"></a-col>
					<a-col>阴雨22摄氏度 9月7日 星期日</a-col>
				</a-row>
				<a-row align="middle" type="flex" :gutter="3">
					<a-col><img src="@/static/img/Dashboard/Notifications.png" class="icon-s"></a-col>
					<a-col><img src="@/static/img/Dashboard/Setting.png" class="icon-s"></a-col>
				</a-row>
			</a-row>
			<a-row class="wherecomeTop" justify="space-between" align="middle" type="flex">
				<a-row class="wherecome">
					早晨好，Lixiao
				</a-row>
				<a-row justify="end" align="middle" type="flex" :gutter="6">
					<a-col v-for="item in olineUsers" :key="item.id">
						<Avterdevice :avter="item.avter" :device="item.device" />
					</a-col>
				</a-row>
			</a-row>
		</a-row>
		<ProposeCard></ProposeCard>
		<CameraCard></CameraCard>
		<PlayerBar></PlayerBar>
		<FooterBar></FooterBar>
	</div>
</template>

<script>
	import CameraCard from "./components/CameraCard/CameraCard.vue"
	import PlayerBar from "./components/PlayerBar/PlayerBar.vue"
	import ProposeCard from "./components/ProposeCard/ProposeCard.vue"
	export default {
		components:{
			ProposeCard,
			CameraCard,
			PlayerBar
		},
		onLoad() {
			uni.hideTabBar()
		},
		created() {
			// this.$GET({
			// 	uri: 'users'
			// }).then(
			// 	result => {
			// 		this.$LOG(result)
			// 	}
			// )
		},
		data: () => {
			return {
				olineUsers: [{
						id: '1',
						avter: require('@/static/img/Dashboard/avter1.png'),
						device: require('@/static/img/Dashboard/device1.png')
					},
					{
						id: '2',
						avter: require('@/static/img/Dashboard/avter2.png'),
						device: require('@/static/img/Dashboard/device2.png')
					}

				]
			}
		}
	}
</script>
<style>
	.topTip {
		font-size: .75rem;
		padding: 0 .875rem;
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
	}

	.weatherTop {
		height: 2.75rem;
	}

	.wherecomeTop {
		padding: 1.5rem 0 .75rem 0;
		font-size: 1.25rem;
		font-weight: bold;
	}
</style>
