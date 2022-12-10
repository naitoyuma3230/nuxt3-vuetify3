<script setup>
import Header from "../components/container/defaultLayout/Header.vue"
import Footer from "../components/container/defaultLayout/Footer.vue"
</script>

<template>
    <v-app>
      <Header />
    <v-main>
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
    <Footer></Footer>

  </v-app>
</template>

