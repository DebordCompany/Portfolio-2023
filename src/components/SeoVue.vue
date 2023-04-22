<script>
export default {
    props: ["title", "content"]
}
</script>
<template>
    <div class="home_description">
        <div class="home_description_h2">Texto para SEO</div>
        <div class="home_description_p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem veniam natus quae, iusto distinctio reprehenderit sint et facere, dolore accusantium porro doloremque perspiciatis! Minus exercitationem consectetur commodi, recusandae labore nobis, dolorem quis vitae pariatur deserunt debitis dolores est voluptas asperiores tenetur illo? Quo ipsum error, quibusdam ad molestiae ut omnis.
        </div>
      </div>
</template>
<style lang="scss" scoped>
.home_description{
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
}
.home_description_h2{
  font-size: 2.5em;
  font-weight: 800;
}
</style>