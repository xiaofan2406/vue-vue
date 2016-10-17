<template>
  <input
    v-if="renderEdit"
    type="text"
    ref="input"
    :value="value"
    :class="[sharedClass, inputClass]"
    @keyup.enter="confirm"
    @keyup.esc="cancel"
    @blur="cancel"  
    autofocus
  >
  </input>
  <Tag v-else @dblclick.native="changeRender" :tag="displayTag" :class="sharedClass">{{value}}</Tag>
</template>

<script>
import Tag from 'widgets/Tag';


export default {
  components: {
    Tag
  },
  props: {
    editable: Boolean,
    value: String,
    inputClass: String,
    sharedClass: String,
    onConfirm: Function,
    displayTag: {
      type: String,
      default: 'span'
    }
  },
  data() {
    return {
      renderEdit: false
    };
  },
  methods: {
    confirm(e) {
      this.onConfirm(e.target.value);
      this.renderEdit = false;
    },
    cancel() {
      this.renderEdit = false;
    },
    changeRender() {
      if (this.editable) {
        this.renderEdit = true;
        this.$refs.input.focus();
      }
    }
  }
};
</script>

<style>

</style>
