<!--
 * #Description :墨抒颖
 * #Author :墨抒颖
 * #Date :2019-09-24 20:47:59
 * #LastEditTime :2019-10-03 09:12:04
 * #LastEditors :墨抒颖
 * #Github :https://github.com/moshuying
 * #Gitee :https://gitee.com/moshuying
 * #Blogs :https://blog.csdn.net/qq_34846662
 -->
<template>
  <view>
    <camera device-position="front" flash="auto" @error="error" 
		:style="'width: 100%; height:'+height+'px;'" 
		class="camercss">
		<cover-view class="scantext">{{tips}}</cover-view>
      <cover-image :style="'width: 100%; height:'+height+'px;'" 
										:src="mainUrl+'/wechat/miniTest/scan-img.png'"
										class="scan-img">
			</cover-image>
    </camera>
    <!-- <button type="primary" @click="takePhoto">拍照</button>
    <button type="primary" @click="uploade(base64is)">选择照片</button> -->
    <!-- <image mode="widthFix" class="photos-box" :src="src"></image> -->
  </view>
</template>

<script>
import config from '@/common/config.js'
export default {
  data() {
    return {
			height:0,
      mainUrl:config.baseurl,
      tips:'必须要把正脸放在白框里哦'
    }
  },
  mounted() {
		const that = this
    this.changeHeight()
    // src 图片路径,base64is,base64的图片
    // this.src='data:image/jpeg;base64,' +this.base64is
		let scanphoto=setInterval(()=>{
			that.takePhoto()
		},1000)
  },
  methods: {
    // 拍照按钮点击事件
    async takePhoto() {
      const that = this;
      uni.createCameraContext().takePhoto({
        quality: 'high',
        success:(res)=>{
          uni.getFileSystemManager().readFile({filePath:res.tempImagePath,encoding:'base64',
          success:(base64image)=>{
            that.uploade(base64image.data)
            this.src='data:image/jpeg;base64,' +base64image.data
          }})
        }
      });
    },
    // 上传base64image到api 返回是否成功
    async uploade(base64image,group_id,user_id,user_info){
      let res = await uni.request({
        method:'POST',
        header:{
        'Content-Type':'application/json'
        },
        url:config.faceIdUrl
        +config.faceIdToken,
        data:{
          'image':base64image,
          'image_type':'BASE64',
          'group_id':group_id=group_id||'001',
          'user_id':user_id=user_id||'000',
          'user_info':user_info=user_info||''
        }
      })
      this.checkResInfo(res[1].data['error_code'])
      console.log(res)
      // return true && (res[1].data['error_code'] === 0 || res[1].data['error_code'] === 223105 ) //&& res[1].data['error_msg'] === "SUCCESS" 
      return res
    },
    // 友善提示
		checkResInfo(code){
      switch (code) {
        case 0:this.tips='yeah!注册成功啦';break;
        case 222013:this.tips='图片格式错啦,小笨蛋,换一张吧';break;
        case 222202:this.tips='请将你笨笨的小脑袋放在圆圈里';break;
        case 223105:this.tips='与之前的照片相似度过高,重新咔擦一张~';break;
        default:this.tips='注册失败喽,再试一次吧';break;
      }
    },
    error(e) {
      console.log(e.detail);
    },
		changeHeight(){
			uni.getSystemInfo({
			    success: (res)=> {
						this.height=res.screenHeight;
			        console.log(res.screenHeight);
			    }
			});
		}
  }
}
</script>

<style lang="scss" scoped>
.scan-img{
  /* opacity: 0.4; */
  width: 100%;
}
.scantext{
  font-size: 20px;
  text-align: center;
  line-height: 60upx;
	position: absolute;
	top: 50%;
	width: 100%;
	z-index: 99999999;
}
.camercss{
	z-index: -1;
}
</style>
