<template>
	<view class="content">
		<view class="header">
			<image src="../../static/shilu-login/logo.png"></image>
		</view>
		
		<view class="list">
			<view class="list-call">
				<image class="img" src="/static/shilu-login/email.png"></image>
				<input class="biaoti" v-model="username" type="text" placeholder="登录邮箱" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/password.png"></image>
				<input class="biaoti" v-model="password" type="text" maxlength="32" placeholder="登录密码" :password="!showPassword" />
				<image class="img" @click="display_btn()" :src="showPassword?'/static/shilu-login/op.png':'/static/shilu-login/cl.png'" ></image>
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/check.png"></image>
				<input class="biaoti" v-model="msgCode" type="number" maxlength="4" placeholder="验证码" />
				<view class="yzm" :class="{ yzms: second>0 }" @tap="getcode">{{checkMsg}}</view>
			</view>
			<!-- <view class="list-call">
				<image class="img" src="/static/shilu-login/4.png"></image>
				<input class="biaoti" v-model="invitation" type="text" maxlength="12" placeholder="邀请码" />
			</view>
			 -->
		</view>
		
		<view class="dlbutton" hover-class="dlbutton-hover" @tap="bindLogin">
			<text class="reg-btn">注册</text>
		</view>
		
		<view class="xieyi">
			<navigator  open-type="navigate">注册即表明同意《软件用户协议》</navigator>
		</view>
	</view>
</template>

<script>
	import common from "@/common/common.js";
	var tha,js;
	export default {
		onLoad(){
			tha = this;
			
		},
		onUnload(){
			clearInterval(js)
			this.second = 0;
		},
		data() {
			return {
				username:'',
				password:'',
				msgCode:'',
				invitation:'',
				xieyi:true,
				showPassword:false,
				second:0
			};
		},
		computed:{
			checkMsg(){
				console.log("开始获取==========");
				if(this.second==0 || this.second ==1){
					return '获取验证码';
				}else{
					return '重新获取'+this.second;
				}
			}
		},
		methods: {
			display_btn: function() {
			    this.showPassword = !this.showPassword
			},
			xieyitong(){
				this.xieyi = !this.xieyi;
			},
			getcode(){
				
				//定时器
				var interval = setInterval(() => {
					if(this.second<1){
						return;
					 }
				   this.second = this.second - 1;
				}, 1000);
				setTimeout(() => {
				   clearInterval(interval);
				 }, 60000);

			   if(this.second>0){
			   	   return;
			    }
			   this.second = 59;
			
				
				var reqData = {
					username: this.username,
					password: this.password
				}
				
				var url = common.apiHost+'/user/tUser/send';
				var method = "POST";
				common.request(url,reqData,method).then(data => {
				  uni.showToast({
				    title:data.data.data,
				  	duration:2000
				  })
				  
				}).catch((err) => {
				   uni.showToast({
				     title:"服务器异常...稍后再试",
				   	 duration:2000
				   })
				});
				
			},
		    bindLogin() {
				
				if (this.msgCode.length != 4) {
				    uni.showToast({
				        title: '验证码长度为四位'
				    });
				    return;
				}
				
				var reqData = {
					username: this.username,
					password: this.password,
					msgCode: this.msgCode
				}
				
				var url = common.apiHost+'/user/tUser/register';
				var method = "POST";
				common.request(url,reqData,method).then(data => {
				  if(data.data.code === 1){
					  //注册成功
					  uni.reLaunch({
					  	url: "../me/me",
					  });
					 
					  //保存登录信息
					  uni.setStorage({
					  	key:"user",
						data:data.data.data
					  })
					  
					  uni.showToast({
					    title:data.data.msg,
					  	duration:2000
					  })
				  }else{
					  uni.showToast({
					    title:data.data.data,
					  	duration:2000
					  })
				  }
				  
				}).catch((err) => {
				   uni.showToast({
				     title:"服务器异常...稍后再试",
				   	 duration:2000
				   })
				});
	
				
		    }
		}
	}
</script>

<style scoped>
	.content {
		display: flex;
		flex-direction: column;
		justify-content:center;
	}
	.header {
		width:161upx;
		height:161upx;
		background:rgba(63,205,235,1);
		box-shadow:0upx 12upx 13upx 0upx rgba(63,205,235,0.47);
		border-radius:50%;
		margin-top: 30upx;
		margin-left: auto;
		margin-right: auto;
	}
	.header image{
		width:161upx;
		height:161upx;
		border-radius:50%;
	}
	
	.list {
		display: flex;
		flex-direction: column;
		padding-top: 130upx;
		padding-left: 70upx;
		padding-right: 70upx;
	}
	.list-call{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		color: #55557f;
		border-bottom: 1upx solid rgba(230,230,230,1);
	}
	.list-call .img{
		width: 33upx;
		height: 33upx;
	}
	.list-call .biaoti{
		flex: 1;
		text-align: left;
		font-size: 32upx;
		line-height: 100upx;
		margin-left: 25upx;
	}
	.yzm {
		color: #55557f;
		font-size: 24upx;
		line-height: 64upx;
		padding-left: 10upx;
		padding-right: 10upx;
		width:auto;
		height:64upx;
		border:1upx solid #55557f;
		border-radius: 50upx;
	}
	.yzms {
		color: #999999 !important;
		border:1upx solid #999999;
	}
	.dlbutton {
		color: #FFFFFF;
		font-size: 34upx;
		width:470upx;
		height:100upx;
		background:#55557f;
		box-shadow:0upx 0upx 13upx 0upx rgba(164,217,228,0.2);
		border-radius:50upx;
		line-height: 100upx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100upx;
	}
	.reg-btn{
		margin: 23upx;
	}
	.dlbutton-hover {
		background:#6B7EDD;
	}
	.xieyi{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 26upx;
		margin-top: 50upx;
		color: #55557f;
		text-align: center;
		height: 30upx;
		line-height: 30upx;
	}
	
</style>
