<template>
  <div>
    <!-- <ui-panels-tree /> -->

    <f-v-scroll
      :list="arr"
      v-slot="{ item, index, topIndex }"
      style="height: 450px; width: 100px"
    >
      <div class="flex" style="width: 150px">{{ item.name }} {{ index }}</div>
    </f-v-scroll>
    <!-- <f-v-scroll /> -->
  </div>
</template>

<script setup>
import { useVirtualList } from "@vueuse/core";
const arr = Array.from(Array(100559).keys(), (x) => {
  return { name: x + 1 };
});
const arr2 = ref(
  Array.from(Array(100559).keys(), (x) => {
    return { name: x + 1 };
  })
);
const search = ref("");
const allItems = Array.from(Array(99999).keys()).map((i) => ({
  height: i % 2 === 0 ? 42 : 84,
  size: i % 2 === 0 ? "small" : "large",
}));

const filteredItems = computed(() => {
  return allItems.filter((i) => i.size.startsWith(search.value.toLowerCase()));
});
const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(arr2, {
  itemHeight: 32,
  overscan: 40,
});
</script>

<style scoped></style>
