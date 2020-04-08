<template>
	<tab-Bar>
		<tab-bar-item path="/home">
			<img slot="item-img" src="../../../assets/img/tabbar/index.svg" alt="" />
			<img slot="item-img-active" src="../../../assets/img/tabbar/indexactive.svg" alt="" />
			<div slot="item-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/category">
			<img slot="item-img" src="../../../assets/img/tabbar/category.svg" alt="" />
			<img slot="item-img-active" src="../../../assets/img/tabbar/categoryactive.svg" alt="" />
			<div slot="item-text">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/shoppingcart">
			<img slot="item-img" src="../../../assets/img/tabbar/shop.svg" alt="" />
			<img slot="item-img-active" src="../../../assets/img/tabbar/shopactive.svg" alt="" />
			<div slot="item-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/profile">
			<img slot="item-img" src="../../../assets/img/tabbar/me.svg" alt="" />
			<img slot="item-img-active" src="../../../assets/img/tabbar/meactive.svg" alt="" />
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-Bar>
</template>
<script>
import tabBar from '../../common/tabbar/tabBar';
import tabBarItem from '../../common/tabbar/tabBarItem';

export default {
	components: {
		tabBar,
		tabBarItem,
	},
};
</script>
