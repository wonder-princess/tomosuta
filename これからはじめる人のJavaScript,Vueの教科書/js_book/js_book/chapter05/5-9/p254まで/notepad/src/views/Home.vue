<template>
  <div class="home">
    <ul>
      <li v-for="memo in newest" :key="memo.id">
      {{ memo.body }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    newest: function() {
      return this.$store.state.memos;
    }
  }
};
</script>