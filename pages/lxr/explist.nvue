<template>
  <div class="main">
    <div class="list">
      {{time.substring(5,10)}}
      <br />
      {{time.substring(11,16)}}
    </div>
    <i class="icon"></i>
    <div class="info">{{context}}</div>
  </div>
</template>

<script>
export default {
  props: {
    time: { type: String },
    context: { type: String }
  },
  mounted() {
    // console.log(time);
    // console.log(context);
  }
};
</script>

<style lang="scss" scoped>
$borderColor: red;
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
</style>