<template>
  <div class="show">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="content">
            <h1>藝富演藝</h1>
            <p>提供專業的演藝娛樂的大板塊，由整體藝術所延伸舞蹈，特技，雜技，魔術，傳統民俗，戲劇等...</p>
            <p>整合所有資源，不管是演藝經紀或者是藝富旗下藝人，都可在表演穿插客製化設計演出內容主題 性感、互動性、親和力、熱情、活力、頑皮等特色安排，，這個網路世代，藉由客製化的演出內容結合行銷(公司、產品、活動、核心價值等服務內容)，我們團隊是您最適合合作的對象</p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero" v-for="item in items" :key="item.id">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-one-third">
              <span style="display: none;">
                <img src="../assets/show1.jpg">
                <img src="../assets/show2.jpg">
                <img src="../assets/show3.jpg">
                <img src="../assets/show4.jpg">
                <img src="../assets/show5.jpg">
              </span>
              <img :src="item.img" alt="Placeholder image">
            </div>
            <div class="column">
              <div class="content">
                <h3>{{item.title}}</h3>
                <p>{{item.description}}</p>
              </div>
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
        items: [{
          title: '藝富街頭藝人',
          description: '由一群北區街頭藝人所組成',
          img: '/yifu/img/show1.10fdf615.jpg'
        },{
          title: '藝富寶貝',
          description: '專業的女舞團',
          img: '/yifu/img/show2.4b146219.jpg'
        },{
          title: '藝富男孩',
          description: '地板動作&特技 帥氣又厲害的男團',
          img: '/yifu/img/show3.b15a6c8c.jpg'
        },{
          title: '專業操偶師',
          description: '擅長偶裝操作的團隊，曾到日本參訪熊本熊行銷',
          img: '/yifu/img/show4.ed19c340.jpg'
        },{
          title: '迷幻特技LED',
          description: '一群練雜技，特技，街舞所組成的團隊，表演時可置入LED演出',
          img: '/yifu/img/show5.c5560354.jpg'
        }]
      }
    }
  }
</script>