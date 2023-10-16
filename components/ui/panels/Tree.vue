<template>
  <div class="tree bg-dark q-pa-sm">
    <Draggable class="mtl-tree" v-model="treeData" treeLine>
      <template #default="{ node, stat }">
        <div
          class="fit relative-position"
          @mouseenter="hovering = node.text"
          @mouseleave="hovering = ''"
        >
          <OpenIcon
            v-if="stat.children.length"
            :open="stat.open"
            class="mtl-mr text-white"
            style="fill: white"
            @click.native="stat.open = !stat.open"
          />
          <span class="mtl-ml">{{ node.text }}</span>
          <div
            v-if="hovering == node.text"
            style="position: absolute; top: 0; right: 4px; padding: 0"
            class="flex"
          >
            <q-btn
              :icon="mdiLockOpenVariantOutline"
              flat
              size="xs"
              padding="xs"
            />
            <q-btn :icon="mdiEyeOutline" flat size="xs" padding="xs" />
          </div>
        </div>
      </template>
    </Draggable>
    <!-- <pre>{{ treeData }}</pre> -->
  </div>
</template>

<script setup>
import { BaseTree, Draggable, OpenIcon, dragContext } from "@he-tree/vue";
import "@he-tree/vue/style/default.css";
import "@he-tree/vue/style/material-design.css";
import {
  mdiEyeOutline,
  mdiLockOpenVariantOutline,
} from "@quasar/extras/mdi-v7";
const hovering = ref("");
const selected = ref();

const treeData = ref([
  {
    text: "Projects",
    children: [
      {
        text: "Frontend",
        children: [
          {
            text: "Vue",
            children: [
              {
                text: "Nuxt",
              },
            ],
          },
          {
            text: "React",
            children: [
              {
                text: "Next",
              },
            ],
          },
          {
            text: "Angular",
          },
        ],
      },
      {
        text: "Backend",
      },
    ],
  },
  { text: "Photos" },
  { text: "Videos" },
]);
</script>

<style scoped>
.tree {
  width: 300px;
  height: 100%;
}
</style>
<style>
.tree-node:hover {
  background-color: var(--q-primary) !important;
}
.drag-placeholder-wrapper {
  display: block !important;
}
</style>
