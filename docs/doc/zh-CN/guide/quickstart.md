# 快速开始
## 用法

### 全局导入
`main.ts`
```typescript
import { createApp } from 'vue'
import AwwUI from 'aww-ui'
import 'aww-ui/styles/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(AwwUI)
app.mount('#app')
```

### 按需引入

aww-ui 支持树摇，使用按需引入可以减少项目的打包体积。

`App.vue`

```vue
<script setup>
  import { AButton } from 'aww-ui'
  import 'aww-ui/styles/button.css'
</script>
<template>
  <a-button></a-button>
</template>
```

### 全自动按需引入
> 开发中

