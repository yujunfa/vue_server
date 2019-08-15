<template>
  <div class="tmp">
      <p v-bind:style="'color: ' + my_color1">Vue.js 学起来好{{msg}}！</p>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                my_color: 'blue',
                my_color1: 'red',
                msg: 'happy',
            }
        },
    }
</script>