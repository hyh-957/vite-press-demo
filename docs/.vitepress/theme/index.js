import DefaultTheme from 'vitepress/theme'
import MyContent from '../components/MyContent.vue'
import Archives from '../components/Archives.vue'
import Tags from '../components/Tags.vue'
import About from '../components/About.vue'
import './custom.css'
import MyLayout from './MyLayout.vue'
export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    // register global components
    app.component('MyContent', MyContent)
    app.component('Archives', Archives)
    app.component('Tags', Tags)
    app.component('About', About)
  }
}