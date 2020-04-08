<template>
	<div class="tabbar-item" @click="jump">
		<slot v-if="isActive" name="item-img"></slot>
		<slot v-else name="item-img-active"></slot>
		<div :class="{ active: !isActive }">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		path: String,
	},
	methods: {
		jump() {
			this.$router.replace(this.path);
		},
	},
	computed: {
		isActive() {
			return this.path.indexOf(this.$route.path) == -1;
		},
	},
};
</script>
<style scoped>
.tabbar-item {
	flex: 1;
	text-align: center;
	font-size: 12px;
}
.tabbar-item img {
	width: 22px;
}
.active {
	color: #ff69b4;
}
</style>
