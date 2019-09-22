<template>
  <div class="ismain">
    <view class="title">
      快递单号
      <input
        class="uni-input"
        style="margin: 0.6rem;"
        @input="onKeyInput"
        placeholder="输入快递单号"
        :value="queryId"
      />
      <button type="default" @click="queryExpress()" style="width:100%">查询快递信息</button>
    </view>
    <view>
      <div class="listmain" v-show="isshow">
        <div class="main" v-for="(data) in res" :key="data">
          <div class="list">
            {{data.time.substring(5,10)}}
            <br />
            {{data.time.substring(11,16)}}
          </div>
          <i class="icon"></i>
          <div class="info">{{data.context}}</div>
        </div>
      </div>
    </view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      isshow: false,
      res: [],
      queryId: "YT4089928762666"
    };
  },
  mounted() {},
  methods: {
    async queryExpress() {
      console.log(this.queryId);
      let res = await uni.request({
        method: "GET",
        url: "http://47.107.231.9:7002/express",
        data: { queryId: this.queryId }
      });
      this.res = JSON.parse(JSON.stringify(res[1].data.data));
      console.log(this.res);
      this.isshow = true;
    },
    onKeyInput: function(event) {
      this.queryId = event.target.value;
    },
    test() {}
  }
};
</script>

<style lang="scss" scoped>
.ismain {
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 90%;
    margin-top: 1rem;
    margin: 0 auto;
  }
}
$borderColor: red;
.listmain {
  margin-top: 1rem;
  width: 100%;
  .main {
    width: 90%;
    height: 4.4rem;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    .list {
      text-align: center;
      width: 4rem;
      max-width: 4rem;
      min-width: 4rem;
    }
    .icon {
      width: 6px;
      max-width: 6px;
      min-width: 6px;
      height: 6px;
      max-height: 6px;
      min-height: 6px;
      border-radius: 50%;
      position: relative;
      left: 4px;
      top: 4px;
      background-color: $borderColor;
    }
    .info {
      padding-left: 0.3rem;
      border-left: solid $borderColor 2px;
    }
  }
}
</style>