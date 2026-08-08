// https://vitepress.dev/guide/custom-theme
import { h, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import ImageViewerP from '@miletorix/vitepress-image-viewer'
import '@miletorix/vitepress-image-viewer/style.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { setupColorPreview } from 'vitepress-plugin-color-preview/client'
import 'vitepress-plugin-color-preview/style.css'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  enhanceApp(ctx) {
    ImageViewerP(ctx.app)
    DefaultTheme.enhanceApp(ctx)
  },
  extends: DefaultTheme,
  setup() {
    onMounted(() => setupColorPreview())
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
}
