<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
    export default {
        name: "BreadcrumbDemo",
        data() {
          return {
            items:[
                {
                    text: 'Admin',
                    href: 'http://www.baidu.com',
                    target: '_blank',
                },
                {
                    text: 'Manage',
                    to: '/Badge'
                },
                {
                    text: 'Library',
                    active:true
                }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
