<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Props } from './type'

defineOptions({
  name: 'AButton',
})

const props = withDefaults(defineProps<Props>(), {
  round: false,
  disabled: false,
  ripple: true
})

const emits = defineEmits(['click'])
const ripple = ref(false)

const classList = computed(() => {
  const { type, round, disabled, size } = props
  return [
    {
      [`a-button--${type}`]: type,
      [`a-button--${size}`]: size,
      'a-button--ripple': ripple.value,
      'a-button--simple': props.simple,
      'is-disabled': disabled,
      'is-round': round
    }
  ]
})

function handleClick(event: MouseEvent) {
  if (props.ripple) {
    ripple.value = false
    requestAnimationFrame(() => {
      ripple.value = true
    })
  }
  emits('click', event)
}

function handleAnimationEnd() {
  ripple.value = false
}
</script>

<template>
  <button :class="classList" class="a-button" @click="handleClick" @animationend="handleAnimationEnd">
    <span>
      <slot>button</slot>
    </span>
  </button>
</template>
