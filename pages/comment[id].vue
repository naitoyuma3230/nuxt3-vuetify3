<template>
	<v-row class="pa-5">
		<v-col cols="2" class="mx-0 px-0 d-flex align-center">
			<v-btn variant="text" size="large">
				<v-icon color="blue" size="large" icon="mdi-thumb-up"></v-icon>
			</v-btn>
		</v-col>
		<template v-for="report in reportList">
			<v-col cols="2" class="mx-1 px-0">
				<v-img :src="report.staffImg"></v-img>
			</v-col>
		</template>
	</v-row>
	<div v-for="report in reportList">
		<div
			v-for="comment in report.commentList"
			class="card-bottom"
			v-if="report.reportId === reportId"
		>
			<ArticleCardReaction :commentItem="comment" />
		</div>
		<ModalFooter />
	</div>
</template>
<script setup>
import ModalFooter from '~/components/container/defaultLayout/ModalFooter.vue'
import ArticleCardReaction from '~~/components/container/mypage/post/ArticleCardReaction.vue';
definePageMeta({
	layout: false,
});
// reactiveな変数
const route = useRoute();
const reportId = route.params.id;
const { data: reportList } = await useFetch(`http://localhost:8000/reportList`);

// fetchしてきたデータにfilterが使用できない
// const filterReport = computed(() => {
// 	const filterReport = reportList.value.filter((report) => {
// 		report.reportId === reportId;
// 	});
// 	return filterReport;
// });
</script>
<style lang="stylus" scoped>
.card-bottom{
	border-bottom: 1px dotted #ccc
}
</style>
