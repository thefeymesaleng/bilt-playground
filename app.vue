<template>
  <NuxtPage class="fit" />
</template>

<script setup>
import { useQuasar } from "quasar";
const $q = useQuasar();
$q.dark.set(true); // or false or "auto"
</script>
<style>
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
