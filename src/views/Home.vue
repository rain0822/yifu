<template>
  <div class="home">
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
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div>(創辦人)</div>

          <div>藝富演藝有限公司，由創辦人也是專業資歷逾十年的商演達人李庭富(藝名:李庭冰)所成立的專業演出團隊與資源空間，並持續在國內相關大中小學與培訓機構講授表演藝術專業課程。</div>

          <div>團隊內的表演者、編排師，視覺設計師，都是經由公司整合系統資源的專家。</div>

          <div>一生一次，創造非凡是我們的宗旨， 目前與數間攝影公司、行銷公司、廣告製作公司簽約為戰略合作夥伴，以商業演出提升品牌曝光行銷為主要服務宗旨。</div>
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
          img: '/img/show1.10fdf615.jpg'
        },{
          title: '藝富寶貝',
          description: '專業的女舞團',
          img: '/img/show2.4b146219.jpg'
        },{
          title: '藝富男孩',
          description: '地板動作&特技 帥氣又厲害的男團',
          img: '/img/show3.b15a6c8c.jpg'
        },{
          title: '專業操偶師',
          description: '擅長偶裝操作的團隊，曾到日本參訪熊本熊行銷',
          img: '/img/show4.ed19c340.jpg'
        },{
          title: '迷幻特技LED',
          description: '一群練雜技，特技，街舞所組成的團隊，表演時可置入LED演出',
          img: '/img/show5.c5560354.jpg'
        }]
      }
    }
  }
</script>
