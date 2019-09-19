<script>
export default {
  onLaunch: function() {
    console.log("App Launch");
    // #ifdef APP-PLUS-NVUE
    var domModule = weex.requireModule("dom");
    domModule.addRule("fontFace", {
      fontFamily: "texticons",
      src: "url('./static/text-icon.ttf')"
    });
    // #endif
    uni.getSystemInfo({
        success: function(e) {
            // #ifndef MP
            Vue.prototype.StatusBar = e.statusBarHeight;
            if (e.platform == 'android') {
                Vue.prototype.CustomBar = e.statusBarHeight + 50;
            } else {
                Vue.prototype.CustomBar = e.statusBarHeight + 45;
            };
            // #endif
            // #ifdef MP-WEIXIN
            Vue.prototype.StatusBar = e.statusBarHeight;
            let custom = wx.getMenuButtonBoundingClientRect();
            Vue.prototype.Custom = custom;
            Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
            // #endif       
            // #ifdef MP-ALIPAY
            Vue.prototype.StatusBar = e.statusBarHeight;
            Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
            // #endif
        }
    })
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>
<style lang="scss">
</style>
<style>
/*每个页面公共css */
</style>
