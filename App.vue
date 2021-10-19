<script>
	export default {
		onLaunch: function() {
			uni.hideTabBar()
			// console.log('App Launch');

			// setTimeout(() => {
			// 	uni.setTabBarBadge({
			// 		index: 1,
			// 		text: '31'
			// 	});
			// 	uni.showTabBarRedDot({
			// 		index: 3
			// 	});
			// }, 1000);
		},
		onShow: function() {
			// console.log('App Show');
		},
		onHide: function() {
			// console.log('App Hide');
		}
	};
</script>

<style>
	@import url("./static/css/icon.css");
	@import url("./static/css/index.css");
	@import url('ant-design-vue/dist/antd.css');
	/*每个页面公共css */
</style>
