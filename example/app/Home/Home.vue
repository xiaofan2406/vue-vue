<template>
  <div>
    <p>Example for using <code>VueVue</code></p>
    <div>{{count}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
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

</style>
