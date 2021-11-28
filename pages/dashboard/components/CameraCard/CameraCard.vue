<template>
	<a-row class="cameraCard">
		<a-row justify="space-between" align="middle" type="flex">
			<a-col class="bold">相机</a-col>
			<a-col class="numberDevice fs-m bold">3台设备</a-col>
		</a-row>
		<a-row class="cameraView">

			<CameraView></CameraView>
		</a-row>
	</a-row>
</template>

<script>
	import CameraView from './CameraView.vue'
	export default {
		components: {
			CameraView
		}
	}
</script>

<style lang="scss">
	.cameraCard {
		padding: 0 40rpx;

		.numberDevice {
			border-radius: 28rpx;
			background: rgba($color: #00BEA9FF, $alpha: 0.1);
			padding: 10rpx 40rpx;
			color: #2FBEA9;
		}
	}

	.cameraView {
		margin-top: 24rpx;
		position: relative;
		
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
