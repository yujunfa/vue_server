<template>
  <div class="tmp">
      <h1>{{msg}}</h1>
  </div>
</template>

<script>
    export default {
        name: 'Hello',
        data() {
            return {
                msg: '你好Vue，本消息来自于变量msg！',
            }
        },
    }
</script>