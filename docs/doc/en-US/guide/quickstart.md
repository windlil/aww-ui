# Quick Start
## Usage

### Full import
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

### On-demand Import

aww-ui support tree shaking, use on-demadn import can Reduce pack size.

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

### Auto Import
> coming soon

