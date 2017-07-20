<template>
    <div class="foo">
        <message :msg="msg"></message>
        <button id="toggle-message" @click="toggleMessage">
            Change message
        </button>
    </div>
</template>

<script>
    import Message from './Message'

    export default {
      name: 'button',
      data: () => ({
        msg: null
      }),
      methods: {
        toggleMessage () {
          this.msg = this.msg === 'new message' ? 'toggled message' : 'new message'
        }
      },
      components: {
        Message
      }
    }
</script>