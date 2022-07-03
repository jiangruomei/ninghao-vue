<template>
  <h3 @click="onClickName">
    {{ name }}
    <span v-if="loading">加载中...</span>
  </h3>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(['name']),
    ...mapState(['loading']),
  },

  created() {
    this.getName();
  },

  methods: {
    ...mapActions(['getName']),
    ...mapMutations(['setName']),
  },
};
</script>
<style>
@import './styles/app.css';
</style>
