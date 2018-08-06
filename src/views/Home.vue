<template>
  <!--<img src="../assets/logo.jpg">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App" so="so far"/>-->
  <section>
    <div class="columns is-desktop">
      <div class="column" v-for="item in items" :key="item.id">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img v-bind:src="item.img" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="../assets/logo.jpg" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{item.title}}</p>
                <p class="subtitle is-6">{{item.subtitle}}</p>
              </div>
            </div>

            <div class="content">{{item.content}}</div>
          </div>
        </div>
      </div>

      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/card2.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="../assets/logo.jpg" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">開課資訊</p>
                <p class="subtitle is-6">#開課資訊</p>
              </div>
            </div>

            <div class="content">
              <a href="javascript:test();">aaa</a>
              大家久等了 ! !
              【藝富空間】設備都已經準備妥當，
              7/21號開幕後，即將要開始開課了！😁
              這次為你邀請到Breaking舞齡十年以上，
              YOUTUBE上的街舞頻道(小冰街舞教學)
              有數十萬網友觀看，
              還曾受邀到澳門教學兩位小朋友的排舞，
              【小冰老師】 街頭藝人-小冰/ Street artist- Shaobin，以及
              【滷蛋老師】 吃一顆小滷蛋的滷蛋 Lawrence ，讓你兩個禮拜練好練滿！
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/card3.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="../assets/logo.jpg" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">與天創娛樂攜手合作</p>
                <p class="subtitle is-6">#與天創娛樂攜手合作</p>
              </div>
            </div>

            <div class="content">
              藝富男孩出動了，
              這次再與天創娛樂攜手合作，
              以動態的舞蹈表演結合了靜態的繪畫塗鴉，
              動態與靜態的視覺衝擊，
              舞蹈與塗鴉合併出豐富內容的感官體驗！！

              暑假活動季節的到來！
              若有相關需求，敬請把握😆
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/card4.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="../assets/logo.jpg" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">藝富女孩</p>
                <p class="subtitle is-6">#藝富女孩</p>
              </div>
            </div>

            <div class="content">
              大家應該已經準備睡覺了吧！
              在工作室裡，我們的女孩還在辛苦的排練中
              大家平常都很忙，只能利用半夜辛苦的練習

              希望明天表演可以順順利利，辛苦了！藝富女孩～
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'app1',
    data: function() {
      return {
        items: [
          {title: '開幕式活動', subtitle: '#開幕式活動', img: '/yifu/img/card1.681ff81f.jpg', content: '感謝昨天各位嘉賓蒞臨我們「YIFU 藝富演藝有限公司」開幕式活動🎡 感謝所有藝富的工作人員幫忙 一起完成小而精美出色的開幕會 準備了各種豪華食物 飲料酒水 還有抽獎 小編也看了很羨慕 不只活動玩的很開心 與各方老闆交流收獲也很豐富 就來補一下昨天的活動照片給大家欣賞啦~'}
        ]
      }
    }
  }
</script>