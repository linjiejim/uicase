<template>
  <view>
		<view class="tools">
			<text 
				v-for="(item,index) in examples" :key="index"
				class="tools-label"
				:class="item.show ? 'tools-label-active' : 'tools-label-inactive'"
				@click="handleClick(index)"
			>
				{{item.name}}
			</text>
		</view>
		
		<template v-for="(item, index) in examples">
			<view v-if="item.show">
				<view class="section-title">{{item.name}}</view>
				<view class="section-example">
					<component :is="item.name"></component>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	import Vue from 'vue';
	
  export default {
		data() {
			return {
				only: [],
				examples: []
			}
		},
		methods: {
			handleClick(e) {
				this.examples[e].show = !this.examples[e].show
			},
			registerComponent(compName, compPath) {
				const myComponentName = `my-${compName}`
				Vue.component(myComponentName, () => ComponentContext(compPath));
				this.examples.push({ show: true, name: myComponentName})
			}
		},
		created() {
			// 获取目录下的所有组件
			const ComponentContext = require.context('@/pages/.uicase/cases', true, /case\.vue$/i, 'lazy');
			// 筛选并注册组件
			for(let componentFilePath of ComponentContext.keys()) {
				const componentName = componentFilePath.split('/').pop().split('.')[0];
				if(this.only.length && !this.only.includes(componentName)) {
					return 
				} else {
					const myComponentName = `my-${componentName}`
					Vue.component(myComponentName, () => ComponentContext(componentFilePath));
					this.examples.push({ show: true, name: myComponentName})
				}
			}
		}
  }
</script>

<style lang="scss">
	.tools {
		margin-bottom: 40rpx;
		padding: 20rpx;
		border-bottom: #eee solid 1px;
	}
	.tools-label {
		border-radius: 30rpx;
		padding: 10rpx;
		margin-right: 10rpx;
		margin-bottom: 10rpx;
	}
	.tools-label-active {
		border: #89d73f solid 1px;
		background-color: #89d73f;
		color: #FFFFFF;
	}
	.tools-label-inactive {
		border: #e5e5e5 solid 1px;
		background-color: #e5e5e5;
		color: #878787;
	}
	
	.section-title {
		border-bottom: #eee solid 1px;
		margin-left: 20rpx;
		color: #89d73f;
	}
	.section-example {
		margin: 20rpx 0;
	}
</style>
