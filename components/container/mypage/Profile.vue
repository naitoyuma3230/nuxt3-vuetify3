<template>
	<v-card class="mx-auto">
		<v-card-actions>
			<div class="w-100 d-flex">
				<div class="align-self-center">
					<v-avatar size="4rem" :image="loginUser.userImg">
					</v-avatar>
				</div>
				<div class="align-self-start mx-3">
					<v-list-item-title class="my-1">
						{{ loginUser.userName }}
					</v-list-item-title>
					<v-list-item-subtitle>{{ loginUser.userId }}</v-list-item-subtitle>
					<v-list-item-subtitle>User Category</v-list-item-subtitle>
				</div>
				<v-spacer></v-spacer>
				<div class="justify-self-end align-self-center">
					<v-icon class="mr-1" icon="mdi-heart"></v-icon>
					<span class="subheading mr-2">256</span>
					<span class="mr-1"></span>
					<v-icon class="mr-1" icon="mdi-share-variant"></v-icon>
					<span class="subheading">45</span>
				</div>
			</div>
		</v-card-actions>
		<v-card-text class="subheading"> {{ loginUser.userDesc }} </v-card-text>
	</v-card>
</template>
<script setup lang="ts">
// dataはrefによりリアクティブに使用できる変数で変数名を指定したい場合{data:変数名}とする
// useFetchの呼び出しはsetup内のみ
// const { data: loginUser } = await useFetch("http://localhost:8000/loginUser")
const loginUser = {
	"userId": "001",
	"userName": "石川直太朗",
	"userImg": "https://i03piccdn.sogoucdn.com/ca265c3c83135a59",
	"userDesc": "石川直太朗 さんのお部屋の介護についての情報共有を行う部屋です。【状態と注意事項】 活動範囲：ベッド上で動ける.意思の疎通：理解力に乏しい、痴呆 血圧が１６０を越えたらドクターコール。【ケアの方針】 本人としてはできるだけ在宅で生活を続けたい。"
}
</script>

