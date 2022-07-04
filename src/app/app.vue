<template>
  <h3 @click="onClickName">
    {{ name }}
    <span v-if="loading">加载中...</span>
  </h3>
  {{ currentUser }}
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      name: 'name',
      currentUser: 'user/currentUser',
    }),
    ...mapState(['loading', 'user']),
  },

  created() {
    this.getName();
    this.getCurrentUser();
  },

  methods: {
    ...mapActions({
      getName: 'getName',
      getCurrentUser: 'user/getCurrentUser',
    }),
    ...mapMutations(['setName']),
  },
};
</script>
<style>
@import './styles/app.css';
</style>
