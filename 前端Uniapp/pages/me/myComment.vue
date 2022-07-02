<template>
	<view>
		<!-- 评论 -->
			<view class="evalution">
				<view  v-for="(item, index) in evaList" :key="index"
					class="eva-item"
				>
					<view @click="toPersonal(item.userId)">
						<image v-if="item.image == null || item.image == ''" mode="aspectFill" src="../../static/chatImage.png" ></image>
						<image v-else :src="item.image" mode="aspectFill"></image>
					</view>
				    
					<view class="eva-right">
						<text v-if="item.nickname != null && item.nickname != ''">{{item.nickname}}</text>
						<text v-else>{{item.username}}</text>
						<text class="item-time"> {{item.createTime}}</text>
						<text class="content">{{item.comContent}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import common from "@/common/common.js";
	
	export default {
		data() {
			return {
				userId: 0,
				evaList: [],
				currentPage: 1,
				pageSize: 1000,
				
			}
		},
		onLoad(options){
			//获取登录人信息
			var that = this;
			uni.getStorage({  //携带token
			    key: 'user',  
			    success: function(ress) {
					that.userId = ress.data.id;
			    }
			});
			
			//加载评论
			this.loadComList();
		
		},
		methods: {
			//进个人主页
			toPersonal(userId){
				console.log("userId:"+userId);
				uni.navigateTo({
					url:'./personal?userId='+userId
				});
			},
			//加载评论
			loadComList: function(){
				var that = this;
				var reqData = {
					userId: that.userId
				}
				var url = common.apiHost+'/invitation/tComment/list?currentPage='+that.currentPage+'&pageSize='+that.pageSize;
				var method = "POST";
				common.request(url,reqData,method).then(data => {
					if(data.data.code != 1){
						uni.showToast({
						  title:"稍后再试...",
							 duration:2000
						})
					}else{
						//更新数据
						that.evaList = data.data.data.records;
						console.log(JSON.stringify(that.evaList))
					}
					that.loading = false;
				}).catch(err => {
					uni.showToast({
					  title:"服务器异常，请稍后再试...",
						 duration:2000
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.s-header{
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		font-size: 30upx;
		color: #303133;
		background: #fff;
		margin-top: 16upx;
		
		
		&:before{
			content: '';
			width: 0;
			height: 40upx;
			margin-right: 24upx;
			border-left: 6upx solid #ec706b;
		}
	}
	
	
	/* 评论 */
	.evalution{
		display:block;
		flex-direction:column;
		background: #fff;
		padding: 20upx 0;
	}
	
	.eva-item{
		display:block;
		padding: 20upx 30upx;
		position: relative;
		image{
			width: 60upx;
			height: 60upx;
			border-radius: 50px;
			flex-shrink: 0;
			margin-right: 24upx;
		}
		&:after{
			content: '';
			position: absolute;
			left: 30upx;
			bottom: 0;
			right: 0;
			height: 0;
			border-bottom: 1px solid #eee;
			transform: translateY(50%);
		}
		&:last-child:after{
			border: 0;
		}
	}
	.eva-right{
		display:block;
		flex-direction:column;
		flex: 1;
		font-size: 26upx;
		color: #909399;
		position:relative;
		.zan-box{
			display:block;
			align-items:base-line;
			position:absolute;
			top: 10upx;
			right: 10upx;
			.yticon{
				margin-left: 8upx; 
			}
		}
		.content{
			font-size: 28upx;
			color: #333;
			padding-top:20upx;
		}
	}
	

</style>
