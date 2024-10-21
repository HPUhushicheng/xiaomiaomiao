<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from 'vue';
import noExist from "@/assets/status/404.svg?component";
import buju from "@/components/buju.vue"
import Schedule from "@/components/Schedule.vue"
defineOptions({
  name: "work"
});

const router = useRouter();
</script>

<template>
  <div >
    <buju />
    <Schedule />
  </div>
</template> 

