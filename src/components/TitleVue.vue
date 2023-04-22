<script>
export default {
    props:["text"]
}
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
  padding-top: 2em;
  padding-bottom: 2em;
}
</style>