<template>
  <div class="tmp">
      <p>你好，{{name}} !</p>
      <input v-model="name" type="text" />
  </div>
</template>

<script>
    export default {
        data() {
            return {
                // name: 'Vue.js(默认)',
                name: '',
            }
        },
    }
</script>