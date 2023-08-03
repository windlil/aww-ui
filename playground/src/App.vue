<script setup lang="ts">
import { AButton } from 'aww-ui'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div class="btn-group">
    <a-button type="primary"></a-button>
    <a-button type="warning"></a-button>
    <a-button type="default"></a-button>
    <a-button type="success"></a-button>
    <a-button type="danger"></a-button>
  </div>
</template>

<style scoped>
.btn-group {
  display: flex;
  justify-content: space-between;
  width: 400px;
}
</style>
