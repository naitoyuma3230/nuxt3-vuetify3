<template>
	<v-app-bar density="compact" elevation="1">
		<v-btn icon>
			<v-icon @click="back">mdi-menu</v-icon>
		</v-btn>

		<v-spacer></v-spacer>

		<v-btn>
			<v-icon>mdi-login-variant</v-icon>
			LOGIN
		</v-btn>

		<v-btn v-if="false">
			<v-icon>mdi-logout-variant</v-icon>
			LOGOUT
		</v-btn>
	</v-app-bar>
</template>

<script setup>
const router = useRouter();
const back = () => {
	router.back();
};
</script>