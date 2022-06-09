<template>
  <h3>{{ name }}</h3>
  <UserProfile></UserProfile>
</template>

<script>
import UserProfile from './components/user.profile.vue';
// import AppDemoButton from './components/app-demo-button.vue';
export default {
  data() {
    return {
      name: 'MEIMEI',
    };
  },
  components: {
    UserProfile,
  },
  methods: {
    onTapAppButton(text) {
      console.log('on tap app button', text);
    },
    onInitAppButton() {
      console.log('on init app button');
    },
  },
};
</script>
<style>
@import './styles/app.css';
</style>
