<template>
  <div style="height:100%">
    <view
      @click="toDo()"
      v-if="weather==1"
      class="bg weather rain viewBg rainBG"
    >
      <view class="wt_date" >
        <view class="text" :style="'padding-top:'+6+'rem;'">{{City}} {{date}} {{Desc}}</view>
      </view>
      <navigator url="/pages/miniTest/main" open-type="switchTab" hover-class="other-navigator-hover">
        <button type="default">
          <view class="pm" :style="'padding-top:'+0.1+'rem;'">&lt; PM2.5：{{pm25}}</view>
        </button>
      </navigator>
      <view class="tips">{{tips}}</view>
      <image
        data-weather="2"
        class="rainImgText"
        mode="widthFix"
        :src="mainUrl+'/wechat/miniTest/rain_text.png'"
      />
      <image class="rainImgWindows" mode="widthFix" :src="mainUrl+'/wechat/miniTest/rain_windows.png'" />
    </view>
    <!-- 下雪天 -->
    <view
      @click="toDo()"
      v-if="weather==2"
      class="bg weather snow viewBg snowBG"
    >
      <view class="wt_date" >
        <view class="text" :style="'padding-top:'+6+'rem;'">{{City}} {{date}} {{Desc}}</view>
      </view>
      <navigator url="/pages/miniTest/main" open-type="switchTab" hover-class="other-navigator-hover">
        <button type="default">
          <view class="pm" :style="'padding-top:'+0.1+'rem;'">&lt; PM2.5：{{pm25}}</view>
        </button>
      </navigator>
      <view class="tips">{{tips}}</view>
      <image
        data-weather="1"
        class="rainImgText"
        mode="widthFix"
        :src="mainUrl+'/wechat/miniTest/snow_text.png'"
      />
      <image class="rainImgWindows" mode="widthFix" :src="mainUrl+'/wechat/miniTest/snow_decorate.png'" />
    </view>
  </div>
</template>

<script>
import config from '@/common/config.js'
export default {
  data() {
    return {
      mainUrl:config.baseurl,
      weather: 1, //1为下雨 2为下雪
      City: "", //城市
      pm25: 0, //PM2.5
      Desc: "", //天气
      wind: 0, //分级
      temperature: 0, //温度
      date: "", //日期
      tips: "" //穿衣提醒
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var that = this;
      uni.getLocation({
        //获取位置经纬度
        type: "wgs84",
        success: function(res) {
          var apiData = {
            location: res.longitude + "," + res.latitude,
            output: "json",
            ak: "zsi4wd2qXIx5ZqODu27XwEfiBFBeCI6o"
          };
          // 获取天气信息
          uni.request({
            url: "https://api.map.baidu.com/telematics/v3/weather?",
            data: apiData,
            method: "GET",
            success: function(res) {
              console.log(res.data);
              if (res.data.error == 0) {
                let baiduAPIdata = res.data.results[0];
                let weather_data = baiduAPIdata.weather_data[0];
                that.City = baiduAPIdata.currentCity; //城市
                that.pm25 = baiduAPIdata.pm25; //PM2.5
                that.Desc = weather_data.weather; //天气
                that.wind = weather_data.wind; //分级
                that.temperature = weather_data.temperature; //温度
                that.date = weather_data.date; //日期
                that.tips = baiduAPIdata.index[0].des; //穿衣提醒
                console.log(that.tips);
              }
            }
          });
        },
        cancel: function(res) {
          console.log("wgs84cacel", res);
        },
        fail: function(res) {
          //返回fail:invalid data
          console.log("wgs84fail", res);
        }
      });
    },
    toDo() {
      this.weather===1?this.weather=2:this.weather=1
    }
  }
};
</script>

<style lang="scss">
@import '../../common/config.scss';
.snowBG{
  background-image: url(''+$weatherMainUrl+'/wechat/miniTest/snow_background.jpg');
}
.rainBG{
  background-image: url(''+$weatherMainUrl+'/wechat/miniTest/rain_background.jpg');
}
.viewBg {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
/* 
 *这个是直接从网上扒下来的，稍微做了点精简.
 *动画分为两层,一层为较慢,一层为较快的,这样更逼真一些!
 */
.weather {
  position: relative;
  overflow: hidden;
}

.weather:before,
.weather:after {
  content: "";
  position: absolute;
  left: -50%;
  top: -50%;
  right: -50%;
  bottom: -50%;
  z-index: 1;
  pointer-events: none;
  background: transparent repeat;
  opacity: 0.5;
  transform: rotate(0deg); /*下雨(下雪)的反向*/
  animation-name: w;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.weather:after {
  opacity: 0.6;
  background-position: 64rpx 64rpx;
  animation-name: x;
}

/* 下雨 */
.weather.rain:before,
.weather.rain:after {
  background-image: url($weatherMainUrl+"/wechat/miniTest/rain.png");
  animation-duration: 2s; /*下雨较慢层，自行调整*/
}

.weather.rain:after {
  animation-duration: 1.5s; /*下雨较快层，自行调整*/
}

/* 下雪 */
.weather.snow:before,
.weather.snow:after {
  background-image: url($weatherMainUrl+"/wechat/miniTest/snow.png");
  animation-duration: 20s; /*下雨较慢层，自行调整*/
}

.weather.snow:after {
  animation-duration: 15s; /*下雪较快层，自行调整*/
}

/* 动画设置 */
@-webkit-keyframes w {
  from {
    background-position: 0 0rpx;
  }

  to {
    background-position: 0 2048rpx;
  }
}

@keyframes w {
  from {
    background-position: 0 0rpx;
  }

  to {
    background-position: 0 2048rpx;
  }
}

@-webkit-keyframes x {
  from {
    background-position: 128rpx 128rpx;
  }

  to {
    background-position: 128rpx 2176rpx;
  }
}

@keyframes x {
  from {
    background-position: 218rpx 128rpx;
  }

  to {
    background-position: 128rpx 2176rpx;
  }
}

/* 样式根据自己需求改吧 */
.Bweather {
  width: 100%;
  text-align: center;
  line-height: 40px;
  padding-top: 150px;
  color: #fff;
  font-weight: 600;
}

page {
  height: 100%;
}

.bg {
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
}

.rainImgWindows {
  display: flex;
  position: fixed;
  bottom: 0rpx;
  width: 100%;
}

.rainImgText {
  z-index: 10;
  width: 100%;
}

.wt_date {
  display: flex;
  align-items: center;
}

.text {
  color: #fff;
  opacity: 0.8;
  padding-left: 25rpx;
  font-size: 30rpx;
  font-family: "cyqk";
}
.tips {
  color: #fff;
  opacity: 0.8;
  font-size: 30rpx;
  text-indent: 60rpx;
  padding: 0 40rpx;
  line-height: 50rpx;
  font-family: "cyqk";
}

.pm {
  color: #fff;
  opacity: 0.8;
  padding-left: 25rpx;
  font-size: 30rpx;
  display: flex;
  position: fixed;
  left: 8rpx;
  top: 95rpx;
}
@font-face {
  font-family: "cyqk";
  src: url("http://download.tpengyun.cn/res/WeatherTop/font.ttf");
  font-weight: normal;
  font-style: normal;
}
</style>