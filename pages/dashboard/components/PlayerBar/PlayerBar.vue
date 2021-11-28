<template>
	<a-row class="playerBar">
		<a-row class="playerTop" justify="center" type="flex"></a-row>
		<a-row justify="space-between" align="middle" type="flex">
			<a-col>
				<a-row justify="start" align="middle" type="flex">
					<a-col class="icon">icon</a-col>
					<a-col>
						<a-row class="status fs-s bold">正在播放</a-row>
						<a-row class="name fs-m bold">歌名</a-row>
						<a-row class="auther fs-s">作者 </a-row>
					</a-col>
				</a-row>
			</a-col>
			<a-col class="player">
				》
			</a-col>
		</a-row>
	</a-row>
</template>

<script>
	export default {}
</script>

<style lang="scss">
	.playerBar {
		box-shadow: 0 -2px 2px rgba($color: #000000, $alpha: 0.1);
		position: fixed;
		
		bottom: 3.125rem;
		left: 0;
		width: 100%;
		padding: 10rpx 44rpx 20rpx 44rpx;

		.playerTop {
			&::after {
				content: "";
				width: 50rpx;
				height: 6rpx;
				border-radius: 6rpx;
				margin:0 0 15rpx 0;
				background-color: rgba($color: #000000, $alpha: 0.6);

			}
		}

		.icon {
			width: 106rpx;
			height: 106rpx;
			border-radius: 12rpx;
			background-color: #000000;
			margin-right: 20rpx;

		}

		.status {
			color: #2fbea9;
		}

		.name {}

		.auther {
			color: rgba($color: #000000, $alpha: 0.3);
		}

		.player {}
	}
</style>
