<template>
  <span></span>
</template>

<script>
import * as BalComponentScripts from '../generated/components'
import {
  balSnackbarController,
  balToastController,
  BalTableButtonRenderer,
  BalTableTagRenderer,
  BalTableTextRenderer,
} from '../lib/dist'

export default {
  name: 'docs-component-script',
  props: {
    tag: String,
  },
  mounted() {
    this.onReady()
  },
  methods: {
    async onReady() {
      let timeout = 0
      let elements = []

      const demos = document.querySelectorAll('.demo')
      for (let index = 0; index < demos.length; index++) {
        const element = demos[index]
        elements = [...elements, ...element.getElementsByTagName('*')]
      }

      elements = elements.filter(el => el.tagName.startsWith('BAL-'))
      if (elements.length === 0) {
        timeout = 500
      }

      const queue = []
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index]
        if (element && typeof element.componentOnReady === 'function') {
          queue.push(element.componentOnReady())
        }
      }
      await Promise.all(queue)
      const fn = BalComponentScripts[this.$props.tag]
      if (fn && typeof fn == 'function') {
        setTimeout(
          () =>
            fn(
              balSnackbarController,
              balToastController,
              BalTableButtonRenderer,
              BalTableTagRenderer,
              BalTableTextRenderer,
            ),
          timeout,
        )
      }
    },
  },
}
</script>
