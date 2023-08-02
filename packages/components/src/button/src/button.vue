<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Props } from './type'

defineOptions({
  name: 'AButton',
})

const props = withDefaults(defineProps<Props>(), {
  round: false,
  disabled: false,
})

const emits = defineEmits(['click'])
const pulsing = ref(false)

const classList = computed(() => {
  const { type, round, disabled, size } = props
  return [
    {
      [`a-button--${type}`]: type,
      [`a-button--${size}`]: size,
      'a-button--pulsing': pulsing.value,
      'is-disabled': disabled,
      'is-round': round
    }
  ]
})

function handleClick(event: MouseEvent) {
  pulsing.value = false
  requestAnimationFrame(() => {
    pulsing.value = true
  })
  emits('click', event)
}

function handleAnimationEnd() {
  pulsing.value = false
}
</script>

<template>
  <button :class="classList" class="a-button" @click="handleClick" @animationend="handleAnimationEnd">
    <span>
      <slot>button</slot>
    </span>
  </button>
</template>
