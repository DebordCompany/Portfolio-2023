<script>
export default {
  props: ["title", "first", "second", "third"],
};
</script>
<template>
  <div class="home_description">
    <div class="home_description_h2">{{ title }}</div>
    <div class="home_description_p">
      <p>{{ first }}</p>
      <p>{{ second }}</p>
      <p>{{ third }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home_description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
}
.home_description_h2 {
  font-size: 2.5em;
  font-weight: 800;
}
.home_description_p {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  @include tablet() {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
