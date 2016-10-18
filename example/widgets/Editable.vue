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
    :autofocus="true"
  >
  </input>
  <Tag v-else @dblclick.native="changeRenderInput" :tag="displayTag" :class="sharedClass">{{value}}</Tag>
</template>

<script>
import Tag from 'widgets/Tag';


export default {
  components: {
    Tag
  },
  props: {
    editable: {
      type: Boolean,
      default: true
    },
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
    changeRenderInput() {
      if (this.editable) {
        this.renderEdit = true;
      }
    }
  }
};
</script>

<style>

</style>
