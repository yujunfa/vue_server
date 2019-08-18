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
      <hr/>
      <div>
        <b-button-group>
          <b-dropdown right text="Menu">
            <b-dropdown-item>Item 1</b-dropdown-item>
            <b-dropdown-item>Item 2</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Item 3</b-dropdown-item>
          </b-dropdown>
          <b-dropdown right split text="Split Menu">
            <b-dropdown-item>Item 1</b-dropdown-item>
            <b-dropdown-item>Item 2</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Item 3</b-dropdown-item>
          </b-dropdown>
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
