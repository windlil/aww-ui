import { createApp } from 'vue'
import AwwUI from 'aww-ui'
import 'aww-ui/styles/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(AwwUI)
app.mount('#app')
