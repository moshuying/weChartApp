<template>
  <div class="mainbox">
    <image class="listimg" :mode="mode" :src="imgsrc"></image>
    <div class="info">
      <span>{{text}}</span>
      <span>{{time}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    text:{
      type:String,
      default:'未接受到传值'
    },
    imgsrc:{
      type:String,
      default:'./weatherTemp.png'
    },
    mode:{
      type:String,
      default:'top'
    },
    time:{
      type:String,
      default:'----年-月-日-:-:-'
    }
  },
  mounted() {
    // console.log(this.imgsrc)
  }
}
</script>

<style lang="scss" scoped>
$listboxradius:5px;
.mainbox{ 
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 15px #999;  
  margin-top:1rem;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  border-radius: $listboxradius;
  .listimg{
    // filter: blur(0.8px);
    width: 100%;
    height: 12rem;
    border-top-left-radius: $listboxradius;
    border-top-right-radius: $listboxradius;
  }
}
.info{
  width: 100%;
	text-indent: 1rem;
  height: 3em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
	// box-shadow: 0px -5px 15px black inset
}
</style>