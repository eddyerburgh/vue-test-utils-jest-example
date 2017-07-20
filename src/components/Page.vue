<template>
    <div class="foo">
        <message :msg="msg"></message>
        <button id="change-message" @click="changeMessage">Change message</button>
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
        changeMessage () {
          this.msg = 'new message'
        }
      },
      components: {
        Message
      }
    }
</script>