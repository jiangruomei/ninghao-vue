<template>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
  <small @click="onClickHintText">{{ hintText }}</small>
</template>

<script>
import UserRegister from './user-register.vue';
import UserLogin from './user-login.vue';
export default {
  data() {
    return {
      currentComponent: 'UserLogin',
      hintText: '还没有帐户，请点击注册',
    };
  },
  methods: {
    onClickHintText() {
      switch (this.currentComponent) {
        case 'UserRegister':
          this.currentComponent = 'UserLogin';
          this.hintText = '还没帐户，点击注册';
          break;
        case 'UserLogin':
          this.currentComponent = 'UserRegister';
          this.hintText = '已有帐户，点击登陆';
          break;
      }
    },
  },
  components: {
    UserRegister,
    UserLogin,
  },
};
</script>
