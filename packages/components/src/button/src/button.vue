<script setup lang="ts">
import { computed } from 'vue'
import type { Props } from './type'

defineOptions({
  name: 'AButton',
})

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  round: false,
  disabled: false,
  size: 'default'
})

const emits = defineEmits(['click'])

const classList = computed(() => {
  const { type, round, disabled, size } = props
  return [
    {
      [`a-button-${type}`]: type,
      [`a-button-${round}`]: round,
      [`a-button-${size}`]: size,
      'is-disabled': disabled
    }
  ]
})

function handleClick(event: MouseEvent) {
  emits('click', event)
}
</script>

<template>
  <button class="a-button" :class="classList" @click="handleClick">
    <slot>button</slot>
  </button>
</template>
