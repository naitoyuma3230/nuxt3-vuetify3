<template>
	<div class="d-flex">
		<v-select
			variant="plain"
			:items="items"
			:model="selectOption.selected"
			item-title="word"
			item-value="searchWords"
			label="Search"
			density="compact"
		></v-select>
		<v-btn class="mx-1" variant="outlined" color="blue"> Search</v-btn>
		<v-btn class="mx-1" variant="outlined" color="green">
			<v-icon left>mdi-plus</v-icon>
			Post</v-btn
		>
	</div>
</template>
<script setup lang="ts">
	const	items =  [
			{ searchWords: "staff-side", word: "スタッフ" },
			{ searchWords: "patient-side", word: "患者さん" },
			{ searchWords: "other-side", word: "その他" },
		]
	const selectOption = reactive({
		selected:"HELLO"
	})

</script>
