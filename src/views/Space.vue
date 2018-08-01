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

              <b-tabs v-model="activeTab">
                <b-tab-item v-for="tab in item.tabs" :key="tab.id" :label="tab.title">
                  {{tab.content}}
                </b-tab-item>
              </b-tabs>
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
