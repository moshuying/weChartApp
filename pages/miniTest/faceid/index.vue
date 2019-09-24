<template>
	<view>
		<camera device-position="front" flash="auto" @error="error" style="width: 100%; height: 500upx;">
			<cover-image src="../../../static/scan-frame/scan-img.png" class="scan-img"></cover-image>
		</camera>
		<view class="scan-text">请将XXX放置白色框内</view>
		<button type="primary" @click="takePhoto">拍照</button>
		<image mode="widthFix" class="photos-box" :src="src">{{res}}</image>
    <view></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        src: "",
        base64is:'',
        res:'测试文本'
			}
		},
		methods: {
			takePhoto() {
        const that = this
				const ctx = uni.createCameraContext();
				ctx.takePhoto({
					quality: 'high',
					success: (res) => {
            // this.src = res.tempImagePath
            uni.getFileSystemManager().readFile({
              filePath:res.tempImagePath,
              encoding:'base64',
              success:(res)=>{
              this.src = 'data:image/jpeg;base64,'+res.data
              this.base64is = res.data
              console.log(this.base64is)
              uni.request({
                method:'POST',
                header:{
                'Content-Type':'application/json'
                },
                url:'https://aip.baidubce.com/rest/2.0/face/v3/faceset/user/add?access_token='+'24.f1fc6f1ba955d20800bc3c9b3fba3d0b.2592000.1571900694.282335-17329266',
                data:{
                  'image':this.base64is,
                  'image_type':'BASE64',
                  'group_id':'001',
                  'user_id':'000',
                  'user_info':'测试者'
                },
                success:(res)=>{
                  this.res= JSON.stringify(res)
                  console.log(res)
                }
              })

              // console.log(this.src)
              }
            })
						/* 返回调用页面并把图片URL传递过去 */
						/* let pages = getCurrentPages();
						let prevPage = pages[pages.length - 2]; 
						prevPage.setData({
							"image": res.tempImagePath,
						})
						uni.navigateBack(); */
						
						/* 调用页面获取图片URL方法 */
						/* let pages = getCurrentPages();
						let currPage = pages[pages.length-1];
						if(typeof(currPage.data.image) != undefined && currPage.data.image != null){
							console.log('获取图片：', currPage.data.image)
						} */
					}
        });
			},
			error(e) {
				console.log(e.detail);
      }
      
		}
	}
</script>

<style>
	.scan-img{
		opacity: 0.4;
		width: 100%;
		height:500upx;
	}
	.scan-text{
		font-size: 20px;
		text-align: center;
		line-height: 60upx;
	}
</style>
