<script setup lang="ts">
import { computed } from 'vue'
import type { Props } from './type'

defineOptions({
  name: 'AButton',
})

const props = withDefaults(defineProps<Props>(), {
  round: false,
  disabled: false,
})

const emits = defineEmits(['click'])

const classList = computed(() => {
  const { type, round, disabled, size } = props
  return [
    {
      [`a-button--${type}`]: type,
      [`a-button--${size}`]: size,
      'is-disabled': disabled,
      'is-round': round
    }
  ]
})

function handleClick(event: MouseEvent) {
  emits('click', event)
}
</script>

<template>
  <button :class="classList" class="a-button" @click="handleClick">
    <span>
      <slot>button</slot>
    </span>
  </button>
</template>
