<template>
  <div class="show">

    <section>
      <div class="hero-body">
        <div class="container">
          <b-tabs>
            <b-tab-item label="簡介">
              <div>前身為『一生一次表演活動團隊』</div>
              <div>經過一些人生的體悟,</div>
              <div>發覺一寸光陰一寸金的道理,</div>
              <div>思考用最快樂健康的</div>
              <div>方式過度這一生,</div>
              <div>我們要用表演來與世界接軌 ,</div>
              <div>用我們的專業來傳遞我的們理念,</div>
              <div>實現我們的宗旨要讓『藝』</div>
              <div>術發光發熱,傳承各領域文化思想元素,</div>
              <div>將我們的藝術與生活作結合,</div>
              <div>享受豐『富』人生所有點點滴滴的體驗,</div>
              <div>以最創新的思想態度來做我們最熱愛的事情!!</div>
              <br/>
              <div>於是2018年『藝富演藝事業』發展公司就誕生了，</div>
              <div>傳承前身的信念，</div>
              <div>想解決現今社會高度發展，</div>
              <div>醫療發達，都市社會壓力幸福指數下降，</div>
              <div>以及老年人口比例大幅增加，高齡化社會已成為重大議題，由創辦人領軍(李庭富)，整合所有資源，用本身的技術與青春活力，開創藝文演出的相關平台，讓銀髮族的生活中享受許多種娛樂，</div>
              <div>社會人士在努力打拼的過程中也可以找到失去的快樂，</div>
              <div>有才華的人士可以透過平台來</div>
              <div>展現自我，增加國際社會競爭力，</div>
              <div>物聯網帶來了藝術娛樂產業日益蓬勃的發展，</div>
              <div>未來的10年內娛樂產業絕</div>
              <div>對是個不可或缺的一環。</div>
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
              <div>在藝富演藝/About （近兩年，帶領團隊演出500人以上大型活動商演經歷</div>

              <div>2016.01.09  RC 語音年度盛典表演表演</div>
              <div>2016.01.14 三創日本太平洋聯盟職棒記者會開場演出-揮霍劇團&天創娛樂</div>
              <div>2016.01.15  DEX 德士凸輪尾牙晚會-揮霍劇團</div>
              <div>2016.01.29 桃園達方電子尾牙-揮霍劇團</div>
              <div>2016.01.14 大陸貴陽百貨公司開幕-玩魔音樂節-揮霍劇團</div>
              <div>2016.02.22 台中清水港區藝術中心花燈秀開場-揮霍劇團</div>
              <div>2016 02 26 台灣發生文創揮霍表演藝術演出</div>
              <div>2016 03 03 三商美邦人壽榮譽頒獎開場-揮霍劇團</div>
              <div>2016.04.15 雲林(馬光)彰化鹿港 –陣頭繞境-揮霍表演藝術 8 人</div>
              <div>2016.05.01 桃園國際機場 A380 新航線台北直飛杜拜開幕儀式表演 韓國塗 鴉秀-與天創娛樂合作</div>
              <div>2016.05.03 春暖花開 嗜色性也 髮型發表塗鴉秀 -與天創娛樂合作</div>
              <div>2016.05.07 IFG 遠雄廣場建築節-噴漆秀-與天創娛樂合作</div>
              <div>2016.05.12 國泰人壽(雪梨高峰會)-一生一次操偶團隊-與美人魚老師合作</div>
              <div>2016.05.14 嘉義東石(范歲千府) -揮霍劇團</div>
              <div>2016.05.20 總統就職典禮-九天民俗技藝團八家將</div>
              <div>2016.06.13 飛利浦刮鬍刀發表會-速度跑酷 2 人(一生一次)</div>
              <div>2017.09.29 王朝大酒店(2017)台北電視內容交易創投媒合會-揮霍藝術</div>
              <div>2017.11.22 交通部觀光局 VR 體驗發表記者會開場表演(藝富演藝 3 人)</div>
              <div>2017.11.25 Newpayfun 台北藝市集開場表演(街頭藝人小冰) 2018.01.20 新光三越展期(德祿品牌合作)藝富操偶-與夢想盒子合作</div>
              <div>2018.01.27 M&Y 一郎會館千人尾牙表演(藝富演藝 LED 日字表演)</div>
              <div>2018.02.08 識毒春暉反毒記者會-(藝富演藝 LED 日字表演)</div>
              <div>2018.02.09 鈺緯科技尾牙開場秀(藝富演藝 YIFU BABY)</div>
              <div>2018.03.17第二屆亞太金指獎頒獎典禮暨公益慈善餐宴</div>
              <div>2018.06.07 創意玩具展-開場表演</div>
              <br/>
              <div>國外演出經歷</div>
              <div>2015.08 新加坡酒吧駐點表演 22 天</div>
              <div>2016.07.07 大陸廈門火鍋店駐點表演 5 天 4 夜 2016.07.22 日本九州操偶表演(喔熊與日本熊本熊相見歡)4 天 3 夜</div>
              <div>2017.09.30 大陸平潭(大聖藍眼淚國際音樂節)參訪 4 天 3 夜</div>
              <div>2017.10.06 印度拍片 7 天 6 夜</div>
              <div>2017.11.30 日本大阪奈良京都旅</div>
            </b-tab-item>
            <b-tab-item label="服務過的單位">
              <img src="../assets/customer_list.png"/>
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
