<template>
  <div class="show">
    <section class="hero" v-for="item in items" :key="item.id" v-bind:class="'is-light'">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-one-third">
              <img src="../assets/card1.jpg" alt="Placeholder image">
            </div>
            <div class="column">
              <h1 class="title">{{item.title}}</h1>
              <h2 class="subtitle">...</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data: function() {
      return {
        items: [
          {title: '賣藝、專業'},
          {title: '外面教課'},
          {title: '主持'},
          {title: '葉配'},
          {title: '代言'},
          {title: '街頭藝人'},
          {title: '組織化'},
          {title: '藝富寶貝'},
          {title: '藝富男孩'},
          {title: 'LED特技團'},
          {title: 'BBOY團'},
          {title: '表演人才派遣'},
          {title: '外包資源'}
        ]
      }
    }
  }
</script>