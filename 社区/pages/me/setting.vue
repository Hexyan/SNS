<template>
	<view>
		 <button type="primary" class="btn"  @click="toLogin()">切换账号</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toLogin: function(){
				//跳转登录
				uni.redirectTo({
					url:'../shilu-login/login'
				});
			}
			
		}
	}
</script>

<style>
	
	.btn{
		margin-top: 30upx;
	}
</style>
