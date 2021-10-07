<template>
  <div ref="copy" class="copy pa-2">
    <v-btn outlined rounded color="white">
      <IconClipboardCheck v-if="state === 'copied'"/>
      <IconClipboardCopy v-else/>
    </v-btn>
  </div>

</template>

<script>
import Clipboard from 'clipboard'
import IconClipboardCheck from '../icons/IconClipboardCheck.vue'
import IconClipboardCopy from '../icons/IconClipboardCopy.vue'
export default {
  data () {
    return {
      state: 'init'
    }
  },
  components: {
    IconClipboardCheck,
    IconClipboardCopy
  },
  mounted () {
    const copyCode = new Clipboard(this.$refs.copy, {
      target (trigger) {
        return trigger.previousElementSibling
      }
    })
    copyCode.on('success', (event) => {
      event.clearSelection()
      this.state = 'copied'
      window.setTimeout(() => {
        this.state = 'init'
      }, 2000)
    })
  }
}
</script>