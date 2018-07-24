<template>
    <!--<img src="./assets/logo.jpg">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App" so="so far"/>-->
  <section>
    <nav id="navbar" class="navbar has-shadow is-spaced">
      <div class="container">
        <div class="navbar-brand">
          <a href="https://rain0822.github.io/yifu">
            <img src="./assets/logo.jpg" width="70" height="70">
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://www.instagram.com/tingbingli" target="_blank">
          <span class="icon" style="color: #f26733;">
            <svg aria-hidden="true" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
          </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://www.facebook.com/YIFU2017" target="_blank">
          <span class="icon" style="color: #3a549e;">
            <svg aria-hidden="true" data-prefix="fab" data-icon="facebook-square" class="svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg>
          </span>
          </a>
          <a class="navbar-item is-hidden-desktop" href="https://www.youtube.com/channel/UC9XgCV0rNkoqFD5ll510TAQ" target="_blank">
          <span class="icon" style="color: #ff0002;">
            <svg aria-hidden="true" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
          </span>
          </a>
          <div id="navbarBurger" class="navbar-burger burger" data-target="navMenuDocumentation" style="height: auto;">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenuDocumentation" class="navbar-menu">
          <div class="navbar-start">

            <a class="navbar-item bd-navbar-item-videos" href="/">
              <span>藝富演藝</span>
            </a>

            <a class="navbar-item bd-navbar-item-blog " href="/">
              <span>藝富空間</span>
            </a>


            <div class="navbar-item has-dropdown is-hoverable">

              <a class="navbar-link" href="https://bulma.io/more">
                更多
              </a>

              <div id="moreDropdown" class="navbar-dropdown">


                <a class="navbar-item " href="/">
                <span>
                  <strong>更多選項1</strong>
                  <br>
                  更多選項說明1
                </span>
                </a>

                <hr class="navbar-divider">

                <a class="navbar-item " href="/">
                <span>
                  <strong>更多選項2</strong>
                  <br>
                  更多選項說明2
                </span>
                </a>

                <hr class="navbar-divider">

                <a class="navbar-item " href="/">
                <span>
                  <strong>更多選項3</strong>
                  <br>
                  更多選項說明3
                </span>
                </a>

                <hr class="navbar-divider">

                <a class="navbar-item " href="/">
                <span>
                  <strong>更多選項4</strong>
                  <br>
                  更多選項說明4
                </span>
                </a>

                <hr class="navbar-divider">

                <a class="navbar-item " href="/">
                <span>
                  <strong>更多選項5</strong>
                  <br>
                  更多選項說明5
                </span>
                </a>

              </div>
            </div>
          </div>

          <div class="navbar-end">
            <a class="navbar-item is-hidden-touch" href="https://www.instagram.com/tingbingli" target="_blank">
              <span class="icon" style="color: #f26733;">
                <svg aria-hidden="true" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </span>
            </a>
            <a class="navbar-item is-hidden-touch" href="https://www.facebook.com/YIFU2017" target="_blank">
              <span class="icon" style="color: #3a549e;">
                <svg aria-hidden="true" data-prefix="fab" data-icon="facebook-square" class="svg-inline--fa fa-facebook-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg>
              </span>
            </a>
            <a class="navbar-item is-hidden-touch" href="https://www.youtube.com/channel/UC9XgCV0rNkoqFD5ll510TAQ" target="_blank">
              <span class="icon" style="color: #ff0002;">
                <svg aria-hidden="true" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <div class="columns is-desktop">
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="./assets/card1.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="./assets/logo.jpg" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">開幕式活動</p>
                <p class="subtitle is-6">#開幕式活動</p>
              </div>
            </div>

            <div class="content">
              感謝昨天各位嘉賓蒞臨我們
              「YIFU 藝富演藝有限公司」
              開幕式活動🎡
              感謝所有藝富的工作人員幫忙
              一起完成小而精美出色的開幕會
              準備了各種豪華食物 飲料酒水 還有抽獎
              小編也看了很羨慕
              不只活動玩的很開心 與各方老闆交流收獲也很豐富
              就來補一下昨天的活動照片給大家欣賞啦~
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="./assets/card2.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="./assets/logo.jpg" alt="Placeholder image">
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
      <div class="column">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="./assets/card3.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="./assets/logo.jpg" alt="Placeholder image">
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
              <img src="./assets/card4.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="./assets/logo.jpg" alt="Placeholder image">
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

    <footer class="footer">
      <div class="content has-text-centered">
        <p>版權所有 © 藝富演事業有限公司</p>
        <p>地址：三重區文化北路15號4F</p>
      </div>
    </footer>
  </section>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
