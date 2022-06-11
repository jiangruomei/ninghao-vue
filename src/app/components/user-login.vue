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

  components: {
    AppInput,
  },
};
</script>
