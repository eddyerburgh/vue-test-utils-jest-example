<template>
    <div>
        <message-toggle />
        <list :items="['list item 1', 'listen item 2']" />
    </div>
</template>

<script>
    import MessageToggle from './MessageToggle'
    import List from './List'

    export default {
      name: 'page',
      components: {
        MessageToggle,
        List
      }
    }
</script>