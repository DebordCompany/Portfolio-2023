<script>
export default {
  props: ["text"],
};
</script>
<template>
  <div class="home_title">
    <h1 class="home_title_h1">{{ text }}</h1>
  </div>
</template>
<style lang="scss" scoped>
.home_title_h1 {
  color: var(--color-text);
  font-size: 2.5em;
  font-weight: 900;
  line-height: 1.3em;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @include tablet() {
    background: #6130ca;
    background: linear-gradient(to bottom right, #6130ca 0%, #303030 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    width: 100%;
    font-size: 2em;
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
