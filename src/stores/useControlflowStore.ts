import { defineStore } from 'pinia'
import type { Node, Edge } from '@vue-flow/core'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const useControlStore = defineStore('ControlFlow', () => {
  const nodes: Ref<Node[]> = ref([
    {
      id: '1',
      type: 'root',
      position: { x: 250, y: 5 },
    },
  ])
  const edges: Ref<Edge[]> = ref([])

  return { nodes, edges }
})
