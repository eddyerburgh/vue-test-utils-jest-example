<template>
    <div class="foo">
        <h1>{{ msg }}</h1>
        <button id="change-message" @click="changeMessage">Change message</button>
    </div>
</template>

<script>
    export default {
      name: 'button',
      data: () => ({
        msg: 'Welcome to Your Vue.js App'
      }),
      methods: {
        changeMessage () {
          this.msg = 'new message'
        }
      }
    }
</script>