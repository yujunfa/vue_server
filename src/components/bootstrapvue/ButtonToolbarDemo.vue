<template>
    <div>
      <b-button-toolbar key-nav aria-label="Toolbar with button groups">
        <b-button-group class="mx-1">
          <b-button>&laquo;</b-button>
          <b-button>&lsaquo;</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-button>Edit</b-button>
          <b-button>Undo</b-button>
          <b-button>Redo</b-button>
        </b-button-group>
        <b-button-group class="mx-1">
          <b-button>&rsaquo;</b-button>
          <b-button>&raquo;</b-button>
        </b-button-group>
      </b-button-toolbar>
      <hr/>
      <b-button-toolbar>
        <b-button-group size="sm" class="mx-1">
          <b-button>保存</b-button>
          <b-button>关闭</b-button>
        </b-button-group>
        <b-input-group size="sm" prefix="$" append=".00">
          <b-form-input value="100" class="text-right"></b-form-input>
          <b-input value="100" class="text-left"></b-input>
        </b-input-group>
      </b-button-toolbar>
    </div>
</template>

<script>
    export default {
        name: "ButtonToolbarDemo"
    }
</script>

<style scoped>

</style>
