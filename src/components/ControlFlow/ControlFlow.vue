<script setup lang="ts">
import { VueFlow } from '@vue-flow/core'
import { useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import RootNode from '@/components/ControlFlow/nodes/RootNode.vue'
import { useControlStore } from '@/stores/useControlflowStore.ts'

const controlflowStore = useControlStore()

const { onConnect, addEdges } = useVueFlow()
onConnect((params) => addEdges([params]))
</script>

<template>
  <VueFlow
    class="bg-primary-foreground"
    v-model:nodes="controlflowStore.nodes"
    v-model:edges="controlflowStore.edges"
    fit-view-on-init
  >
    <Background />
    <MiniMap />
    <Controls position="top-left" class="text-foreground bg-primary-foreground" />

    <template #node-root="props">
      <RootNode :id="props.id" :data="props.data" />
    </template>
  </VueFlow>
</template>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';
@import '@vue-flow/controls/dist/style.css';
</style>
