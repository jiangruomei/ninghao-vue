<template>
  <div class="page">
    <div class="card">
      <div class="card_header">
        <h3 class="card-title">{{ name }}</h3>
        <div class="card-subtitle">Transition & animation</div>
      </div>
      <div class="card_content">
        <div :class="['emoji', { hidden: !isActive }]">🌲</div>
      </div>
      <div class="card_action">
        <button @click="isActive = !isActive">请按这里</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'MEIMEI',
      isActive: true,
    };
  },
};
</script>
<style>
@import './styles/app.css';
@import './styles/card.css';
</style>
