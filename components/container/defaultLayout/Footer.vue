<script setup>
const menuList = [
	{
		title: "mypage",
		to: "/mypage",
	},
	{
		title: "MicroCMS",
		to: "/microcms",
	},
	{
		title: "home",
		to: "/",
	},
	{
		title: "usestate",
		to: "/usestate",
	},
	{
		title: "compositionapi",
		to: "/compositionapi",
	},
];
</script>
<template>
	<v-bottom-navigation>
		<v-btn v-for="item in menuList" :key="item.to" :to="item.to">{{
			item.title
		}}</v-btn>
	</v-bottom-navigation>
</template>
