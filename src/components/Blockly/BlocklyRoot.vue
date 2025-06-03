<script setup lang="ts">
import { onMounted } from 'vue'
import * as Blockly from 'blockly'
import * as zhHans from 'blockly/msg/zh-hans'
import { pythonGenerator } from 'blockly/python'

Blockly.setLocale(zhHans)
let workspace: Blockly.Workspace

onMounted(() => {
  workspace = Blockly.inject('blocklyDiv', {
    toolbox: {
      kind: 'flyoutToolbox',
      contents: [
        {
          kind: 'block',
          type: 'controls_repeat_ext',
          inputs: {
            TIMES: {
              shadow: {
                type: 'math_number',
                fields: {
                  NUM: 5,
                },
              },
            },
          },
        },
      ],
    },
  })
})

function getJavascriptCode() {
  const code = pythonGenerator.workspaceToCode(workspace)
  console.log('--------python code-------')
  console.log(code)
}
</script>

<template>
  <div class="flex flex-col flex-1">
    <button @click="getJavascriptCode">python code</button>
    <div id="blocklyDiv" class="w-full h-full"></div>
  </div>
</template>
