<template>
    <div>
      <div>
        <b-button-group size="sm">
          <b-button>Button1</b-button>
          <b-button>Button2</b-button>
          <b-button>Button3</b-button>
        </b-button-group>
      </div>
      <div class="mt-2">
        <b-button-group size="lg">
          <b-button variant="success">Button2</b-button>
          <b-button variant="outline-success">Button1</b-button>
          <b-button variant="danger">Button3</b-button>
        </b-button-group>
      </div>
      <div class="mt-2">
        <b-button-group size="lg" vertical>
          <b-button variant="success">Button2</b-button>
          <b-button variant="outline-success">Button1</b-button>
          <b-button variant="danger">Button3</b-button>
        </b-button-group>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ButtonGroupDemo"
    }
</script>

<style scoped>

</style>
