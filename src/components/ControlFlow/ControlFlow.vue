<script setup lang="ts">
import { ref } from 'vue'
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'
import RootNode from '@/components/ControlFlow/nodes/RootNode.vue'

const nodes = ref([
  { id: '1', type: 'root', label: 'Node 1', position: { x: 250, y: 5 }, data: { hello: 'hello' } },
  { id: '2', label: 'Node 1', position: { x: 100, y: 100 } },
  { id: '3', label: 'Node 3', position: { x: 400, y: 100 } },
  { id: '4', label: 'Node 4', position: { x: 400, y: 200 } },
])

const edges = ref([
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
])
</script>

<template>
  <VueFlow class="bg-primary-foreground" v-model:nodes="nodes" v-model:edges="edges">
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
