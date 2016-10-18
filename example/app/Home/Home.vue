<template>
  <div>
    <div class="count">{{count}}</div>
    <div class="controls">
      <span @click="increment"><i class="fa fa-plus" aria-hidden="true"></i></span>
      <span @click="decrement"><i class="fa fa-minus" aria-hidden="true"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.counterStore.count;
    }
  },
  methods: {
    increment() {
      this.$store.counterStore.increment();
    },
    decrement() {
      this.$store.counterStore.decrement();
    }
  }
};
</script>

<style scoped>
.count {
  background-color: #ddd;
  font-size: 90px;
  padding: 0.5em;
  width: 2em;
  height: 2em;
  text-align: center;
}
.controls {
  display: flex;
  justify-content: space-around;

  &>span {
    width: 2em;
    height: 2em;
    padding: 0.5em;
    font-size: 22px;
    text-align: center;
    cursor: pointer;
    background-color: #f7f7f7;
  }
}
</style>
