<script setup lang="ts"></script>

<template>
  <div className="profile">
    <div class="name">
      <img alt="logo" src="@/assets/logo.png" />
      <h1>Efim Krakhalev (EK)</h1>
      <h1>Site Reliability Engineer</h1>
      <h3>Ex-front-end Developer</h3>
      <h3>Location: Toronto, ON</h3>
    </div>
    <div class="silhouette" />
  </div>
</template>

<style scoped>
.profile {
  display: grid;
  grid-template-columns: 65% 35%;
}

.name {
  margin: calc(50vh - 2rem - 6.8vw) auto 0;
  display: grid;
  grid-template-columns: 12vw 1fr;
  img {
    grid-row-start: 1;
    grid-row-end: 5;
    width: calc(100% - 2rem);
    max-width: 120px;
    padding: 1rem;
    margin: auto;
    filter: drop-shadow(-1px 1px 2px #757575) drop-shadow(2px -2px 3px #757575);
  }
  h2,
  h3,
  p {
    line-height: 7vw;
    font-size: 5vw;
    margin: 0;
  }
}

.silhouette {
  max-height: calc(100vh - 2vw - 2rem);
  background: no-repeat center/90% url('@/assets/silhouette_bright.png');
  filter: drop-shadow(2px 1px 2px #bdbdbd) drop-shadow(0px 0px 1px #bdbdbd);
  height: calc(100vh - 1.5vw - 2rem);
  grid-column-start: 2;
  grid-row: 1 / 3;
}

@media (max-width: 639px) {
  .profile {
    grid-template-columns: 1fr;
  }

  .silhouette {
    display: none;
  }

  .name {
    grid-template-columns: 1fr;
    margin: calc(50vh - 3rem - 45px - 19vw) 0 calc(50vh - 45px - 1rem - 7vw);
    text-align: center;
    img {
      grid-row-end: 2;
      width: 90px;
      margin: 0 auto;
    }
  }
}

@media (min-width: 640px) and (max-width: 1199px) {
  .name {
    h2,
    h3,
    p {
      line-height: 5vw;
      font-size: 3vw;
    }
  }
}

@media (min-width: 1200px) {
  .name {
    h2,
    h3,
    p {
      line-height: 3vw;
      font-size: 1.8vw;
    }
  }
}

@media (min-width: 1401px) {
  .silhouette {
    margin-right: calc(50vw - 700px);
  }
}

@media (min-width: 1601px) {
  .name {
    margin-left: calc(50vw - 700px);
  }
}
</style>
