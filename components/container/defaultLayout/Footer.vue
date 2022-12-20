<script setup>
const menuList = [
	{
		title: "mypage",
		to: "/mypage",
	},
	{
		title: "home",
		to: "/",
	},
		{
		title: "composable",
		to: "/composable",
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
