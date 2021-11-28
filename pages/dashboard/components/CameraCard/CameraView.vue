<template>
	<a-row>
		<a-row class="CameraView1"></a-row>
		<a-row class="CameraView2 hidden"></a-row>
	</a-row>
</template>

<script>
	export default {

	}
</script>

<style>
	.CameraView1 {
		position: relative;
		width: 626rpx;
		height: 352rpx;
		border-radius: 24rpx;
		background-color: blue;
	}

	.CameraView1::before {
		content: "";

		position: absolute;
		top: 11rpx;
		left: 24rpx;
		width: 626rpx;
		height: 330rpx;
		border-radius: 24rpx;
		background-color: #000000;
		opacity: 0.1;
	}

	.CameraView2 {
		position: absolute;
		top: 11rpx;
		left: 24rpx;
		width: 626rpx;
		height: 330rpx;
		border-radius: 24rpx;
		/* background-color: blue; */
	}

	.CameraView2::before {
		content: "";

		position: absolute;
		top: 11rpx;
		left: 24rpx;
		width: 626rpx;
		height: 308rpx;
		border-radius: 24rpx;
		background-color: #000000;
		opacity: 1;
	}

	.hidden {
		opacity: 0.1;
	}
</style>
