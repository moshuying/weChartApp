<!--
 * #Description :墨抒颖
 * #Author :墨抒颖
 * #Date :2019-09-22 23:20:46
 * #LastEditTime :2019-10-09 09:27:00
 * #LastEditors :墨抒颖
 * #Github :https://github.com/moshuying
 * #Gitee :https://gitee.com/moshuying
 * #Blogs :https://blog.csdn.net/qq_34846662
 -->
<template>
  <div>
    <div @click="navgo()">
      <testImgBox :imgsrc="imgsrcList[0]" :text="textList[0]" :time="timeList[0]"/>
    </div>
   <div @click="navgo2()">
      <testImgBox :imgsrc="imgsrcList[1]" :text="textList[1]" :time="timeList[1]"/>
    </div>
		<div @click="navgo3()">
		  <testImgBox :imgsrc="imgsrcList[2]" :text="textList[2]" :time="timeList[2]"/>
		</div>
  </div>
</template>

<script>
import config from '@/common/config.js'
import testImgBox from './list.vue';
export default {
  components:{
    testImgBox
  },
  data() {
    return{
      textList:['天气查询 使用百度地图api',
								'自定义爬虫实现快递单号查询',
								'人脸识别'],
      imgsrcList:[config.baseurl+'/wechat/miniTest/test/weatherTemp.png',
									config.baseurl+'/wechat/miniTest/test/express.png',
									config.baseurl+'/wechat/miniTest/test/express.png'],
      timeList:['2019年9月11日10:52:37',
								'2019年9月18日20:30:39',
								'2019年9月23日10:45:34']
    }
  },
  mounted() {
    
  },
  methods: {
    navgo(){
      uni.navigateTo({
        url: '/pages/miniTest/weather/index'
      });
    },
    navgo2(){
      uni.navigateTo({
        url: '/pages/miniTest/express/index'
      });
    },
		navgo3(){
		  uni.navigateTo({
		    url: '/pages/miniTest/faceid/index'
		  });
		}
  }
};
</script>

<style lang="scss" scoped>
</style>