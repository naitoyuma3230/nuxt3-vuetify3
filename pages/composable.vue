<template>
  <div>
    Globalカウンター: {{ counter }}
    <v-btn density="compact" rounded elevation="1"  @click="inc"> + </v-btn>
    <v-btn density="compact" rounded elevation="1"  @click="dec"> - </v-btn>
  </div>
    <div>
    Localカウンター: {{ unSharCounter }}
    <v-btn density="compact" rounded elevation="1"  @click="unSharInc"> + </v-btn>
    <v-btn density="compact" rounded elevation="1"  @click="unSharDec"> - </v-btn>
  </div>
</template>
<script setup lang="ts">
import {useSharedCounter} from "~/composeables/counter" 
import { useNotSharedCounter } from '../composeables/counter';
const { counter, inc, dec } = useSharedCounter()
const { unSharCounter, unSharInc, unSharDec} = useNotSharedCounter()
</script>
