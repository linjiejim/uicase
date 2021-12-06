<template>
	<view class="float-entry" @click="navigateTo">
		UI case
	</view>
</template>

<script>
	export default {
		props: {
			entryUrl:{
				type: String, 
				default: "/pages/.uicase/index"
			}
		},
		methods: {
			navigateTo() {
				uni.navigateTo({
					url: this.entryUrl,
				})
			}
		}
	}
</script>

<style>
	.float-entry {
		background-color: #ddd;
		padding: 20rpx;
		border-radius: 50rpx 0 0 50rpx;
		position: fixed;
		bottom: 50rpx;
		right: 0rpx;
	}
</style>
