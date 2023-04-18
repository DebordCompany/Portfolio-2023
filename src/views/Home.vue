<script setup>
import HeaderVue from "../components/HeaderVue.vue";
</script>

<template>
  <div class="main">
    <div class="home_content">
      <HeaderVue class="headerVue" />
      <div class="home_title">
        <h1 class="home_title_h1">Graphic designer and front-end developer</h1>
      </div>
    </div>
    <div class="home_front">
      <div class="home_front_container">
        <img src="/img/buho_left.png" alt="" class="home_front_img" />
        <div class="home_front_square"></div>
      </div>
    </div>
    <div class="home_content">
      <div class="home_distribuidor">
        <div class="home_distribuidor_item">
        <h2 class="home_distribuidor_item_h2">Skills</h2>
        <div class="home_distribuidor_item_arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      </div>
      <div class="home_distribuidor_item">
        <h2 class="home_distribuidor_item_h2">Proyectos</h2>
        <div class="home_distribuidor_item_arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      </div>
      <div class="home_distribuidor_item">
        <h2 class="home_distribuidor_item_h2">Curriculum</h2>
        <div class="home_distribuidor_item_arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      </div>
      </div>
      <div class="home_description">
        <div class="home_description_h2">Texto para SEO</div>
        <div class="home_description_p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem veniam natus quae, iusto distinctio reprehenderit sint et facere, dolore accusantium porro doloremque perspiciatis! Minus exercitationem consectetur commodi, recusandae labore nobis, dolorem quis vitae pariatur deserunt debitis dolores est voluptas asperiores tenetur illo? Quo ipsum error, quibusdam ad molestiae ut omnis.
        </div>
      </div>
      
      
    </div>
    <div class="home_front">
      <div class="home_front_container">
        <img src="/img/buho_right.png" alt="" class="home_front_img" />
        <div class="home_front_square"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main{
  background: var(--color-background);
}
.home_content {
  background: var(--color-background);
  color: var(--color-text);
  padding: 2em;
  width: 100%;
}
.headerVue {
  width: 100%;
}
.home_title_h1 {
  color: var(--color-text);
  font-size: 2.5em;
  font-weight: 900;
  line-height: 1.3em;
  padding: 1em 0;
}

.home_front_container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
.home_front_img {
  width: 80%;
}
.home_front_square {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 90%;
  height: 100px;
  background: var(--color-primary);
  mix-blend-mode: multiply;
}
.home_distribuidor_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home_distribuidor_item_h2{
  font-size: 2.5em;
  font-weight: 800;
  text-decoration: underline;
}
.home_description{
  padding: 3em 0;
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
