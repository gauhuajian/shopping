<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>

<style scoped>
#tabbar {
	display: flex;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #f6f6f6;
	box-shadow: 0 -3px 1px rgb(100, 100, 100, 0);
	height: 49px;
}
</style>
