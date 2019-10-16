<template>
  <div class="show">

    <section>
      <div class="hero-body">
        <div class="container">
          <b-tabs>
            <b-tab-item label="簡介">
              <div>民生主義中, 提到人民有六大需要是指：（一）食、衣、住、行：為物質生活所必需。（二）育、樂：為精神生活所必需。(國父 孫中山先生原著)</div>
              <br/>
              <div>所以說表演對人們的精神需求是相當重要的，這時候有一家公司誕生了，秉持著位客戶為觀眾服務的精神。</div>
              <br/>
              <div>YIFU，的理念是</div>
              <div>用『 藝術 』，『 富裕 』你我人生</div>
              <div>所謂的富不一定代表錢</div>
              <div>或許是特別的歷練與經驗</div>
              <div>但卻可以代表一種身心靈、快樂、</div>
              <div>滿足的無匱乏感。</div>
              <br/>
              <div>LOGO設計整體概念</div>
              <div>星星是Superstar/象徵頂尖</div>
              <div>草地雲雀黃，象徵閃爍著歡樂</div>
              <div>照亮你我周圍</div>
              <div>我們以三叉代表著權威的象徵</div>
              <div>U型光環 代表著 萬丈繽紛光芒</div>
              <br/>
              <img src="../assets/intro.jpg">
            </b-tab-item>
            <b-tab-item label="服務">
              藝富演藝有限公司►<br/>
              旗下服務分為兩塊...<br/>
              【藝富演藝】 & 【藝富空間】<br/>
              【藝富演藝】提供專業的演藝娛樂的大板塊，整合了八大藝術節目類別，舞蹈秀、光影LED秀、特技雜技秀、街頭藝人秀、音樂表演秀、魔術戲劇秀、吉祥物操偶師、活動主持人 等...
              不管您是在找舞者、魔術師、特技人員、布偶操偶師、主持人等等，直接由本團隊親自為您服務，可省下不少比價的時間，
              我們還能在您的活動中客製化設計演出 內容主題 青春活力、互動熱鬧、科技時尚、親子溫馨、藝術文雅 等風格特色安排，這個網路世代，藉由客製化的演出內容結合行銷(公司、產品、活動、核心價值等服務內容)，我們團隊是您最適合選擇的對象                            【藝富空間】提供私人的活動排練空間場所（提供桌椅、鏡子、音響設備、麥克風、投影幕、投影機等），不管是要(  會議   /   派對   /   課程講座   /   靜態展覽   /   烹飪   /    拍攝攝影   /   音樂表演   /   劇場表演   /   聚會餐敘   /   教育訓練 )在這個五臟俱全的空間與絕佳的地理環境，是您最佳合適的選擇
            </b-tab-item>
            <b-tab-item :visible="showBooks" label="經歷">

              <div>藝富演藝團隊 在商業表演中 走過11年的經歷，其實服務過非常多的知名客戶，像是曼都的新品走秀、A380的首航開幕、甚至替30間以上的7-11舉行過開幕表演，家樂福也是代表的客戶，藝富（街頭藝人團隊）同時也是興仁夜市集團和兒童樂園的合作表演廠商，提供精采的活動規劃表演。</div>
              <br/>
              <div>「表演找藝富，活動更豐富」</div>
              <div>為何要找藝富？</div>
              <div>以下三點</div>

              <div>。️快速為活動達到吸睛的效果</div>
              <div>。在一個活動當中破冰活絡現場氣氛</div>
              <div>。️依照客戶需求客製化安排內容</div>
              <br/>
              <div>《 藝富活動 豐富創價 》</div>
              <div>【藝富演藝】是專業的活動顧問，簡單整合了八大類 演藝娛樂的節目，還以活動主題劃分 青春活力、互動熱鬧、科技時尚、親子溫馨、藝術文雅 等風格特色安排，這個網路世代，藉由客製化的演出內容結合行銷(公司、產品、活動、核心價值等服務內容)，我們團隊是您最適合選擇的對象！</div>
              <br/>
              <img src="../assets/exper.jpg">
            </b-tab-item>
            <b-tab-item label="服務過的客戶">
              <div class="columns">
                <div class="column"><img src="../assets/customer1.jpg"/></div>
                <div class="column"><img src="../assets/customer2.jpg"/></div>
              </div>
            </b-tab-item>
          </b-tabs>
        </div>
      </div>
    </section>

    <!--<section class="hero">
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
    </section>-->
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
