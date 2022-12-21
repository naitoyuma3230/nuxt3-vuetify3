<script setup lang="ts">
	const itemList = [
		{
			name: "POST",
			icon: "mdi-tag",
			to: "post",
		},
		{
			name: "Table",
			icon: "mdi-tag",
			to: "table",
		},
		{
			name: "Chart",
			icon: "mdi-tag",
			to: "chart",
		},
		{
			name: "Info",
			icon: "mdi-tag",
			to: "infomation",
		},
	];
</script>
<template>
	<div class="d-flex space-btween">
		<v-btn
			:to="'/mypage/' + item.to"
			v-for="item in itemList"
			variant="outlined"
		>
			<v-icon left>{{ item.icon }}</v-icon>
			{{ item.name }}</v-btn
		>
	</div>
</template>

