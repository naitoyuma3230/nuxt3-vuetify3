<template>
	<div>
		<search-panel />
		<ArticleCard :post="item" />
	</div>
</template>
<script setup>
import SearchPane from "~~/components/container/mypage/post/SearchPanel";
import ArticleCard from "~/components/container/mypage/post/ArticleCard";
const { data: reportList } = await useFetch("http://localhost:8000/reportList");
</script>

