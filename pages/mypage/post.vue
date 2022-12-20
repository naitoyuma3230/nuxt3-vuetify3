<template>
	<div>
		<SearchPanel />
		<ArticleCard :post="reportList" />
	</div>
</template>
<script setup>

import SearchPanel from "~/components/container/mypage/post/SearchPanel.vue";
import ArticleCard from "~/components/container/mypage/post/ArticleCard.vue";
const { data: reportList } = await useFetch("http://localhost:8000/reportList");
</script>
