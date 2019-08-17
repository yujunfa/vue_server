<template>
  <div>
    <div>
      <h2>Example heading <b-badge>New</b-badge></h2>
      <h3>Example heading <b-badge>New</b-badge></h3>
      <h4>Example heading <b-badge>New</b-badge></h4>
      <h5>Example heading <b-badge>New</b-badge></h5>
      <h6>Example heading <b-badge>New</b-badge></h6>
      <hr/>
      <b-button variant="primary">Notes <b-badge variant="light">4</b-badge></b-button>
    </div>
    <div>
      <b-badge pill variant="primary">Primary</b-badge>
      <b-badge href="#" variant="secondary">Secondary</b-badge>
      <b-badge variant="success">Success</b-badge>
      <b-badge variant="danger">Danger</b-badge>
      <b-badge variant="warning">Warning</b-badge>
      <b-badge variant="info">Info</b-badge>
      <b-badge variant="light">Light</b-badge>
      <b-badge variant="dark">Dark</b-badge>
    </div>
  </div>
</template>

<script>
    export default {
        name: "badge"
    }
</script>

<style scoped>

</style>
