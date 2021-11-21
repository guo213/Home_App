<template>
	<a-row>
		<a-row class="proposeTitle bold">建议</a-row>
		<a-row class="fs-m">
			<a-row align="middle" type="flex" :gutter="3">
				<a-col>
					<CardItem :Data='Data' view='odd'></CardItem>
				</a-col>
			</a-row>
			<a-row align="middle" type="flex" :gutter="3">
				<a-col>
					<CardItem :Data='Data' view='even'></CardItem>
				</a-col>
			</a-row>
		</a-row>

	</a-row>
</template>

<script>
	import Data from './ProposeCard.js'
	import CardItem from './CardItem.vue'
	export default {
		props: {

		},
		components: {
			CardItem
		},
		data() {
			return {
				Data
			}
		},
		methods:{}
	}
</script>

<style lang="scss">
	.proposeTitle{
		padding:40rpx 40rpx 0 40rpx;
	}
</style>
