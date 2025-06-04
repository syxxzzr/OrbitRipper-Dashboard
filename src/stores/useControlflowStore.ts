import { defineStore } from 'pinia'
import type { Node, Edge } from '@vue-flow/core'
import type { Ref } from 'vue'
import { ref } from 'vue'

export const useControlStore = defineStore('ControlFlow', () => {
  const nodes: Ref<Node[]> = ref([
    {
      id: 'root',
      type: 'root',
      position: { x: 0, y: 0 },
      data: {
        format: 'YUV420P8',
        bitrate: 30,
        frames: 100000,
      },
    },
  ])
  const edges: Ref<Edge[]> = ref([])

  return { nodes, edges }
})
