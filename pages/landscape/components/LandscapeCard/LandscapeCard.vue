<template>
	<a-row align="middle" type="flex" class='cardList'>
		<a-col v-for="(item,index) in Data" :key='item.id' @click='itemchanges(item)' class='cardItem'>
			<a-row justify="center" align="middle" type="flex" class='image'>
				<img :src="itemsrc(item)" :class='item.class'></img>
			</a-row>
			<a-row justify="center" align="middle" type="flex" :class="{'bold':item.active}">
				{{item.text}}
			</a-row>

		</a-col>
	</a-row>
</template>

<script>
	import Data from './landscapeCard.js'
	export default {
		props: {

		},
		data() {
			return {
				Data
			}
		},
		methods: {
			itemsrc: (item) => {
				return item.active ? item.activesrc : item.defaultsrc
			},
			itemchanges: (item) => {
				item.active = !item.active
			}
		}
	}
</script>

<style lang="scss">
	.cardItem {
		height: 128rpx;
		width: 333rpx;
		padding: 0 24rpx;

		// margin: 20px;
		.image {
			min-width: 90rpx;
			padding-right: 20rpx;
		}
	}
</style>
