<!--
 * #Description :墨抒颖
 * #Author :墨抒颖
 * #Date :2019-09-22 23:20:46
 * #LastEditTime :2019-09-22 23:20:46
 * #LastEditors :墨抒颖
 * #Github :https://github.com/moshuying
 * #Gitee :https://gitee.com/moshuying
 * #Blogs :https://blog.csdn.net/qq_34846662
 -->
<template>
	<view class="center">
		<view class="userinfo">
			<view class="userinfo-avatar"><open-data type="userAvatarUrl"></open-data></view>
			<open-data type="userNickName"></open-data>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60f;</text>
				<text class="list-text">账号管理</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe639;</text>
				<text class="list-text">新消息通知</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">帮助与反馈</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe65f;</text>
				<text class="list-text">服务条款及隐私</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item">
				<text class="list-icon">&#xe614;</text>
				<text class="list-text">关于应用</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
	</view>
</template>

<script>
	import config from '@/common/config.js'
export default {
	data() {
		return {
			login: false,
			avatarUrl: '/static/logo.png',
			uerInfo: {}
		};
	},
	mounted() {
		// this.getUserInfo();
		this.goLogin()
		// 暂不考虑兼容性
		// if (uni.getExtConfig) {
		// 	uni.getExtConfig({
		// 		success(res) {
		// 			console.log(res.extConfig);
		// 		}
		// 	});
		// }
	},
	methods: {
		goLogin() {
			uni.login({
				provider: 'weixin',
				success: res => {
					console.log(res.code);
					uni.request({
						method:'get',
						url:config.baseurl+'/jscode2session?code='+res.code,
						success:(resinfo)=>{
							console.log(resinfo)
						}
					})
				}
			});
			if (!this.login) {
				console.log('点击前往登录');
			}
		},
		getUserInfo() {
			// 查看是否授权
			uni.getSetting({
				success(res) {
					if (res.authSetting['scope.userInfo']) {
						// 已经授权，可以直接调用 getUserInfo 获取头像昵称
						uni.getUserInfo({
							success: function(res) {
								console.log(res.userInfo);
							}
						});
					}
				}
			});
		}
	}
};
</script>

<style>
/* #ifndef APP-PLUS-NVUE */
@font-face {
	font-family: texticons;
	font-weight: normal;
	font-style: normal;
	src: url('~@/static/text-icon.ttf') format('truetype');
}

page {
	background-color: #f8f8f8;
}

/* #endif*/

/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */
/* #ifdef MP-TOUTIAO */
text :not(view) {
	font-family: texticons;
}

/* #endif */

.center {
	flex: 1;
	flex-direction: column;
	background-color: #f8f8f8;
}
.logo {
		width: 750upx;
		height: 240upx;
		padding: 20upx;
		background-color: #f8f8f8;
		flex-direction: row;
		align-items: center;
	}

	.logo-hover {
		opacity: 0.8;
	}

	.logo-img {
		width: 150upx;
		height: 150upx;
		border-radius: 150upx;
	}

	.logo-title {
		height: 150upx;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 20upx;
	}
.uer-name {
	height: 60upx;
	line-height: 60upx;
	font-size: 38upx;
	color: #000;
}

.go-login-navigat-arrow {
	font-size: 38upx;
	color: #ffffff;
}

.login-title {
	height: 150upx;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 20upx;
}

.center-list {
	flex-direction: column;
	background-color: #ffffff;
	margin-top: 20upx;
	width: 750upx;
}

.center-list-item {
	height: 90upx;
	width: 750upx;
	flex-direction: row;
	padding: 0upx 20upx;
}

.border-bottom {
	border-bottom-width: 1upx;
	border-color: #c8c7cc;
	border-bottom-style: solid;
}

.list-icon {
	width: 40upx;
	height: 90upx;
	line-height: 90upx;
	font-size: 34upx;
	color: #2f85fc;
	text-align: center;
	font-family: texticons;
	margin-right: 20upx;
}

.list-text {
	height: 90upx;
	line-height: 90upx;
	font-size: 34upx;
	color: #555;
	flex: 1;
}

.navigat-arrow {
	height: 90upx;
	width: 40upx;
	line-height: 90upx;
	font-size: 34upx;
	color: #555;
	text-align: right;
	font-family: texticons;
}
.userinfo {
	position: relative;
	width: 750rpx;
	height: 320rpx;
	color: #000;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.userinfo-avatar {
	overflow: hidden;
	display: block;
	width: 160rpx;
	height: 160rpx;
	margin: 20rpx;
	margin-top: 50rpx;
	border-radius: 50%;
	border: 2px solid #fff;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}

.userinfo text {
	/* color: #fff; */
	font-size: 14px;
	background-color: #c0c0c0;
	border-radius: 40%;
}
</style>
