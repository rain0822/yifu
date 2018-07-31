<template>
  <div class="space">
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
          {title: '出租空間，方便'},
          {title: '背包客住宿'},
          {title: '教室空間出租'},
          {title: '電腦軟硬體維修'},
          {title: '視覺傳達設計'},
          {title: '辦活動'},
          {title: '攝影空間'},
          {title: '教學課程'},
          {title: '餐會'},
          {title: '講座'},
          {title: '團康娛樂'},
          {title: '跳舞'}
        ]
      }
    }
  }
</script>
