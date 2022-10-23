import DefaultTheme from 'vitepress/theme'
import TestT from '../components/TestT.vue'
import Content1 from '../components/Content.vue'
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
    app.component('TestT', TestT)
    app.component('Content1', Content1)
    app.component('Archives', Archives)
    app.component('Tags', Tags)
    app.component('About', About)
  }
}