<template>
  <!--<img src="../assets/logo.jpg">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App" so="so far"/>-->
  <div class="container">
    <section class="hero">
        <div class="columns" v-if="!items.length">
          <div class="column is-8">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img style="background-color: #eee;">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="../assets/logo.jpg" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-left">
                    <a href="https://www.facebook.com/913634415380449"></a>
                  </div>
                  <div class="media-content">
                    <p class="title is-4"></p>
                    <p class="subtitle is-6"></p>
                  </div>
                </div>

                <div class="content"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="columns" v-for="item in items" :key="item.id">
          <div class="column is-8">
            <div class="card">
              <div class="card-image" v-if="item.img">
                <figure class="image is-4by3">
                  <img v-bind:src="item.img" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-image" v-if="item.imgs" >
                <carousel-3d>
                  <slide v-for="(img, index) in item.imgs" :key="img.id" :index="index">
                    <template>
                      <img :src="img.img">
                    </template>
                  </slide>
                </carousel-3d>
              </div>
              <div class="card-image" v-if="item.video">
                <div class="facebook-responsive">
                  <iframe :src="'https://www.facebook.com/plugins/video.php?href=' + item.video" style="border:none;overflow:hidden" data-width="100%" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
                </div>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="../assets/logo.jpg" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-left">
                    <a :href="item.from.link"><strong>{{item.from.name}}</strong></a>
                    <div v-if="item.place">
                      在 <a :href="item.place.link">{{item.place.name}}</a>
                    </div>
                    <div>
                      <span>{{ item.createdTime | moment("MM/DD hh:mm:ss") }}</span>
                    </div>
                  </div>

                  <div class="media-content">
                    <p class="title is-4">{{item.title}}</p>
                    <p class="subtitle is-6">{{item.subtitle}}</p>
                  </div>
                </div>

              <div class="content" style="word-wrap:break-word">{{item.content}}</div>
            </div>
          </div>
        </div>

          <!--<div class="column is-4">
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
          <div class="column is-4">
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
          <div class="column is-4">
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
          </div>-->
        </div>

        <div><a href="https://www.facebook.com/YIFU2017" target="_blank">More...</a></div>
    </section>
  </div>
</template>

<style>
  .facebook-responsive {
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
  }

  .facebook-responsive iframe {
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }
</style>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import VueLogger from 'vuejs-logger';
  const isProduction = process.env.NODE_ENV === 'production';

  const options = {
    isEnabled: true,
    logLevel : isProduction ? 'error' : 'debug',
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : true,
    separator: '|',
    showConsoleColors: true
  };

  Vue.use(VueLogger, options);
  Vue.use(VueAxios, axios);

  export default {
    name: 'app1',
    data: function() {
      let items = [
        //{title: '開幕式活動', subtitle: '#開幕式活動', img: '/yifu/img/card1.681ff81f.jpg', content: '感謝昨天各位嘉賓蒞臨我們「YIFU 藝富演藝有限公司」開幕式活動🎡 感謝所有藝富的工作人員幫忙 一起完成小而精美出色的開幕會 準備了各種豪華食物 飲料酒水 還有抽獎 小編也看了很羨慕 不只活動玩的很開心 與各方老闆交流收獲也很豐富 就來補一下昨天的活動照片給大家欣賞啦~'}
      ];
      axios.get('https://graph.facebook.com/v3.1/913634415380449/feed?fields=from,attachments,message,created_time,place&access_token=EAAC1ZBttoruEBAMGeZB59joIJTegFd8LoAsTBy4KA7c0EHsoWwwP9SbLhgETKizIGfuxdZBMZCCpKr14dFjvg9ZCJvXkZAxt9rNZCzVmxFgkUBRiIhQ8S7PZCUT4VMvBQWmSQrgVlMnoZBwXKjENbQUvAk0TrrpsOphM4uCeAMlpkPgZDZD').then((response) => {
        let self = this;
        response.data.data.forEach(function(element) {
          self.$log.info(element);

          let data = {
            from: {
              link: `https://www.facebook.com/${element.from.id}`,
              name: element.from.name
            },
            content: element.message,
            createdTime: element.created_time
          };
          if(element.attachments) {
            let aa = element.attachments.data[0];
            if(aa.subattachments) {
              //data.img = aa.subattachments.data[0].media.image.src
              data.imgs = [];
              aa.subattachments.data.forEach(function (datum) {
                data.imgs.push({
                  id: datum.target.id,
                  img: datum.media.image.src
                });
              });
            } else if (element.attachments.data[0].type === 'video_autoplay') {
              data.video = element.attachments.data[0].url
            } else {
              data.img = element.attachments.data[0].media.image.src;
            }

          }
          if(element.place) {
            data.place = {
              name: element.place.name,
              link: `https://www.facebook.com/${element.place.id}`
            }
          }
          items.push(data);
        });
      });
      return {
        items: items,
        isLoading: true
      }
    }
  }
</script>