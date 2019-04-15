<template>
  <div class="container">
    <section>
      <div class="hero-body">
        <b-field horizontal label="姓名">
          <b-field>
            <b-select placeholder="Title">
              <option>先生</option>
              <option>女士</option>
            </b-select>
            <b-input expanded></b-input>
          </b-field>
        </b-field>

        <b-field horizontal label="聯絡方式">
          <b-input name="name" placeholder="電話" expanded></b-input>
          <b-input name="email" type="email" placeholder="電箱信箱" expanded></b-input>
        </b-field>

        <b-field horizontal label="訊息">
          <b-input type="textarea"></b-input>
        </b-field>

        <b-field horizontal><!-- Label left empty for spacing -->
          <p class="control">
            <button class="button is-primary">
              送出
            </button>
          </p>
        </b-field>
      </div>
    </section>
  </div>
</template>

<script>
</script>
