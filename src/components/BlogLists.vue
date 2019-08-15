<template>
  <div class="tmp">
      <table align="center" style="font-size: 30px; color:blue">
          <thead>
              <td>序号</td>
              <td>姓名</td>
              <td>年龄</td>
          </thead>
          <tr v-for="(blog, index) in blogs">
              <td>{{ index + 1 }}</td>
              <td>{{ blog.name }}</td>
              <td>{{ blog.age }}</td>
          </tr>
      </table>
      <hr/>
      <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return {
        title: '博客列表页',
        blogs: [

        ],
        msg: ''
    }
  },
  mounted() {
      this.$http.get('/api/json/demo').then((response) => {
        console.info(response.body);
        this.blogs=response.body.data;
        this.msg = response.body.message;
      },(response) => {
        console.error(response);
      });
  },
}
</script>