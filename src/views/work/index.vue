<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from 'vue';
import noExist from "@/assets/status/404.svg?component";
import buju from "@/components/buju.vue"
defineOptions({
  name: "work"
});

const router = useRouter();
</script>

<template>
  <div >
    <buju />
  </div>
</template> 

