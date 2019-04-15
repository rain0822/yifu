<template>
  <div class="space">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="content">
            <h1>藝富空間</h1>
            <p>提供現場”電腦軟硬體維修”與”活動包場”（提供桌椅、鏡子、音響設備、麥克風、等），不管是要辦(講座、餐會、團康、課程)在這個五臟俱全的空間與絕佳的地理環境，是您最佳合適的選擇。</p>
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
          {title: '場地出租',
            tabs: [{
              title: '舞蹈空間',
              content: '舞蹈空間'
            },{
              title: '攝影空間',
              content: '攝影空間'
            },{
              title: '團康娛樂',
              content: '團康娛樂'
            },{
              title: '講座會議',
              content: '講座會議'
            }]
          },
          {title: '背包客住宿'},
          {title: '視覺傳達設計'},
          {title: '電腦軟硬體維修'}
        ]
      }
    }
  }
</script>

<style>
  .tabs li.is-active a {
    border-bottom-color: #7957d5 !important;
    color: #7957d5 !important;
  }

  .tabs a {
    -ms-flex-align: center;
    align-items: center;
    border-bottom-color: #dbdbdb;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    color: #4a4a4a;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: -1px;
    padding: .5em 1em;
    vertical-align: top;
  }

  .tabs ul {
    -ms-flex-align: center;
    align-items: center;
    border-bottom-color: #dbdbdb !important;
    border-bottom-style: solid !important;
    border-bottom-width: 1px !important;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
</style>
