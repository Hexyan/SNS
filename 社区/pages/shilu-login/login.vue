<template>
	<view class="content">
		<view class="header">
			<!-- <image src="../../static/shilu-login/logo"></image> -->
		</view>
		
		<view class="list">
			<view class="list-call">
				<image class="img" src="/static/shilu-login/email.png"></image>
				<input class="biaoti" v-model="username" type="text" maxlength="25" placeholder="输入邮箱" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/password.png"></image>
				<input class="biaoti" v-model="password" type="text" maxlength="32" placeholder="输入密码" password="true" />
			</view>
			
		</view>
		
		<view class="dlbutton" hover-class="dlbutton-hover" @click="bindLogin()">
			<text class="log-btn">登录</text>
		</view>
		
		<view class="xieyi">
			<navigator open-type="navigate">忘记密码</navigator>
			<text>|</text>
			<navigator url="reg" open-type="navigate">注册账号</navigator>
		</view>
	</view>
</template>

<script>
	import common from "@/common/common.js";
	var tha;
	import {mapMutations} from 'vuex';
	export default {
		onLoad(){
			tha = this;
		},
		data() {
			return {
				username:'',
				password:''
			};
		},
		methods: {
			...mapMutations(['login']),
		    bindLogin() {
				
				var reqData = {
					username: this.username,
					password: this.password
				}
				
				var url = common.apiHost+'/user/tUser/login';
				var method = "POST";
				common.request(url,reqData,method).then(data => {
				  if(data.data.code === 1){
					  
					  //保存登录信息
					  uni.setStorage({
					  	key:"user",
					  	data:data.data.data,
					  })
					  
					  //保证顺序执行
					  setTimeout(() => {
						 //登录成功
						 
						 uni.reLaunch({
						 	url: "../me/me"
						 });
						
						 uni.showToast({
						   title:data.data.msg,
						 	duration:2000
						 })
					  },0);
					  
					  
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
		margin-left: 25upx;
		flex: 1;
		text-align: left;
		font-size: 32upx;
		line-height: 100upx;
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
	.log-btn{
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
		font-size: 30upx;
		margin-top: 80upx;
		color: #000000;
		text-align: center;
		height: 40upx;
		line-height: 40upx;
	}
	.xieyi text{
		font-size: 24upx;
		margin-left: 15upx;
		margin-right: 15upx;
	}
</style>
