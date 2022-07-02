<template>
	<view>
		<view class="main-body">
			 
			<block v-if="userList.length>0">
			<view v-for="(item,index) in userList" :key="index" @click="toPersonal(item.id)" class="flex pd-10 bg-fff bdb">
				<block >
						<image v-if="item.image == null || item.image == ''" class="wh-40 mgr-10 bd-radius-10" src="../../static/chatImage.png" ></image>
						<image v-if="item.image != null && item.image != ''" class="wh-40 mgr-10 bd-radius-10" :src="item.image"></image>
						<view class="flex-1">
							 
							<view v-if="item.nickname == null || item.nickname == ''" class="cl1 mgb-5">{{item.username}}</view>
							<view v-if="item.nickname != null && item.nickname != ''" class="cl1 mgb-5">{{item.nickname}}</view>
							<view v-if="item.signature == null || item.signature == ''" class="cl1 mgb-5">该用户很懒哦~什么都没留下</view>
							<view v-if="item.signature != null && item.signature != ''" class="cl1 mgb-5">{{item.signature}}</view>
							
						</view>
				</block> 
 				
			</view>
			</block>
			<block v-else>
				<view class="emptyData">暂无关注</view>
			</block>
			
			
		</view>
		
	</view>
</template>

<script>
	 
	import common from "@/common/common.js";
	 
	export default {
		components:{
			
		},
		data() {
			return {
				userList: [],
				userId: '',//当前登录人ID
			}
		},
		onLoad() {
			var that = this;
			//获取当前登录人信息
			var token = "";
			uni.getStorage({  //携带token
			    key: 'user',  
			    success: function(ress) {
			        token = ress.data.token;
					that.userId = ress.data.id;
			    }
			});
			
			//加载关注用户
			this.loadFoucsUser();
			
		},
		onPullDownRefresh() { // 下拉监听事件
		        console.log("下拉刷新===");
		        this.loadFoucsUser();
		        setTimeout(function () {
		            uni.stopPullDownRefresh();
		        }, 1000);
		},
		mounted() {
		},
		methods: {
			toPersonal: function(userId){
				uni.navigateTo({
					url:'./personal?userId='+userId
				});
			},
			loadFoucsUser: function(){
				var that = this;
				var url = common.apiHost+'/user/tFocusFans/focusOrFans/list?type=1&userId='+that.userId;
				var method = "GET";
				common.request(url,null,method).then(data => {
					//更新用户
					that.userList = data.data.data;
				})
			},
				

		}
	}
</script>

<style>
	 .showTime {
		 margin-right: 0;
		 font-size: 26upx;
	 }
</style>
