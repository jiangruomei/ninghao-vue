<template>
  <div>用户登录 ➡️{{ username }}</div>
  <AppInput v-model="username" />
  <!-- <AppInput :model-value="username" @update:model-value="username = $event" /> -->
</template>

<script>
import AppInput from './app-input.vue';
export default {
  data() {
    return {
      username: '',
    };
  },
  //创建前
  beforeCreate() {
    console.log('beforeCreate');
  },
  //创建后
  created() {
    console.log('user login created');
  },
  //挂载之前
  beforeMount() {
    console.log('beforeMount');
  },
  //挂载后
  mounted() {
    console.log('mounted');
  },
  //更新之前
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  //更新后
  updated() {
    console.log('updated');
  },
  //被卸载后
  unmounted() {
    console.log('unmounted');
  },
  components: {
    AppInput,
  },
};
</script>
