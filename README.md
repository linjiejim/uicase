# uicase
A toolkit for testing uni-app UI components by cases.

# Install package
```bash
npm install uicase
```

# How to use
1. Create a folder in `/pages/.uicase`
```bash
pages/
	.uicase/
		cases/
			xxx.case.vue
			yyy.case.vue
		index.vue
```
2. Create a page `/pages/.uicase/index.vue` and register the page in `/pages.json`
```html
<!-- /pages/.uicase/index.vue -->
<template>
  <ucase-home></ucase-home>
</template>
```
3. Import and register uicase components globally
```js
// /main.js
// ...
import uicase from "uicase"
Vue.use(uicase)
```
4. Place your entry point wherevery you like. For example, inside `pages/index/index.vue`
```html
<!-- ... -->
<ucase-entry></ucase-entry>
```
5. Create your own test case inside folder `pages/.uicase/cases/` with format `CASE_NAME.case.vue`
```html
<!-- For example, create a test case for custom buttons -->
<template>
	<view class="text-center">
		<view class="padding-bottom">
			<button class="btn primary lg">Primary Button lg</button>
		</view>
		<view class="padding-bottom">
			<button class="btn primary">Primary Button</button>
		</view>
		<view class="padding-bottom">
			<button class="btn lg">Secondary Button lg</button>
		</view>
		<view class="padding-bottom">
			<button class="btn">Secondary Button</button>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
```
