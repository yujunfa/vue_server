<template>
  <div class="tmp">
    <input type="button" @click="show_my_value('Jerry')" value="Keys"/>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                my_value: '默认值',
            }
        },
        methods: {
            show_my_value: function(name) {
                alert('my_value: ' + name);
            }
        }
    }
</script>