<template>
	<a-row align="middle" type="flex" class="cardcontent">
		<a-col v-for="(item,index) in Data" :key='item.id' @click='itemchanges(item)'>
			<a-row v-if='(index%2==0&&view=="odd")||(index%2==1&&view=="even")'>
				<a-row align="middle" type="flex" class='itemclass'>
					<a-row justify="center" align="middle"  type="flex" class='itemimage'>
						<img :src="itemsrc(item)" :class='item.class'></img>
					</a-row>
					<a-row :class="{'bold':item.active}">
						{{item.text}}
					</a-row>
				</a-row>
			</a-row>
		</a-col>
	</a-row>
</template>

<script>
	export default {
		props: {
			Data: {
				type: Array,
				default: () => []
			},
			view: {
				type: String,
				default: () => ''
			}
		},
		data() {
			return {

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
	.cardcontent {
		padding: 0 42rpx;
		flex-wrap: nowrap;
		display: -webkit-box;
		.itemclass {
			height: 128rpx;
			width: 333rpx;
			padding: 0 24rpx;
			// margin: 20px;
			.itemimage {
				min-width: 90rpx;
				padding-right: 20rpx;
			}
		}
	}
</style>
