<template>
	<view class="content">
		<view class="video-wrapper">
			<video 
				class="video"
				:src="detailInv.invVideo"
				controls
				:autoplay="false"
			></video>
		</view>
		<scroll-view class="scroll" scroll-y>
			<view class="scroll-content">
				<view class="introduce-section">
					<text class="title">{{detailInv.invId}}</text>
					<view>
						<text>{{detailInv.invContent}}</text>
						<view class="img-item-1"></view>
					</view>
					<view class="actions">
						<view @click="invLaudAdd" class="action-item">
							<text class="yticon icon-dianzan-ash"></text>
							<text>{{detailInv.invLaud}}</text>
						</view>
						<!-- <view class="action-item">
							<text class="yticon icon-dianzan-ash reverse"></text>
							<text>6</text>invLaud
						</view> -->
						<view @click="share" class="action-item">
							<text class="yticon icon-fenxiang2"></text>
							<text>分享</text>
						</view>
						<view @click="invCollectAdd" class="action-item">
							<text v-if="comSign" class="yticon icon-shoucang active"></text>
							<text v-else class="yticon icon-shoucang inactive"></text>
							<text>收藏</text>
						</view>
					</view>
				</view>
				
				<view class="container" v-show="loading === false">
					<!-- 评论 -->
					<view class="s-header">
						<text class="tit">评论</text>
					</view>
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
								<text>{{item.createTime}}</text>
								<view @click="comLaudAdd(item.id)" class="zan-box">
									<text>{{item.comLaud}}</text>
									<text class="yticon icon-shoucang"></text>
								</view>
								<text class="content">{{item.comContent}}</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 加载图标 -->
				<mixLoading class="mix-loading" v-if="loading"></mixLoading>
			</view>
		</scroll-view>
		
		<view class="bottom">
			<view class="input-box">
				<input 
					class="input"
					type="text" 
					v-model="comContent"
					placeholder="评论一下吧" 
					placeholder-style="color:#adb1b9;"
				/>
			</view>
			<text @click="sendMSg" class="confirm-btn">发表</text>
		</view>
	</view>
</template>

<script>
	import json from '@/json';
	import mixLoading from '@/components/mix-loading/mix-loading';
	import common from "@/common/common.js";
	export default {
		components: {
			mixLoading
		},
		data() {
			return {
				invId: 0,
				userId: 0,
				comContent: '',
				comSign: false,
				loading: true,
				detailData: {},
				detailInv: {},
				newsList: [],
				evaList: []
			}
		},
		onLoad(options){
			this.detailData = JSON.parse(options.data);
			this.invId = this.detailData.id;
			//获取登录人信息
			var that = this;
			uni.getStorage({  //携带token
			    key: 'user',  
			    success: function(ress) {
					that.userId = ress.data.id;
			    }
			});
			this.loadDetailInv();
			//更新收藏状态
			this.loadCollectStatus();
		},
		methods: {
			//朋友圈分享
			share(){
			  uni.share({
			        provider: "weixin",
			        scene: "WXSenceTimeline",
			        type: 0,
			        href: "http://uniapp.dcloud.io/",
			        title: "好玩社区",
			        summary: "我正在使用好玩社区，快来一起来体验吧！",
			        imageUrl: "https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
			        success: function (res) {
			            uni.showToast({
			              title:"分享成功",
			              duration:2000
			            })
			        },
			        fail: function (err) {
			           uni.showToast({
			             title:"分享失败",
			             duration:2000
			           })
			        }
			      });
			},
			//帖子点赞
			invLaudAdd(){
				var that = this;
				var reqData = {
					userId: that.userId,
					poId: 'laud-inv-'+that.invId,
				}
				var url = common.apiHost+'/invitation/tInvitation/laud/add';
				var method = "POST";
				common.request(url,reqData,method).then(data => {
					uni.showToast({
					  title:"只能点一次赞哦~",
					  duration:2000
					})
					
					//重新加载
					that.loadDetailInv();
				});
			},
			//评论点赞
			comLaudAdd(comId){
				var that = this;
				var reqData = {
					userId: that.userId,
					poId: 'laud-com-'+that.invId+'-'+comId,
				}
				var url = common.apiHost+'/invitation/tInvitation/laud/add';
				var method = "POST";
				common.request(url,reqData,method).then(data => {
					uni.showToast({
					  title:"只能点一次赞哦~",
					  duration:2000
					})
					
					//重新加载
					that.loadDetailInv();
				});
			},
			//收藏
			invCollectAdd(){
				var that = this;
				if(that.comSign){
					//取消收藏
					var reqData = {
						userId: 'collect-inv-'+that.userId,
						poId: that.invId,
					}
					var url = common.apiHost+'/invitation/tInvitation/collect/move';
					var method = "POST";
					common.request(url,reqData,method).then(data => {
						if(data.data.code == 1){
							that.comSign = false;
							uni.showToast({
							  title:"取消收藏成功",
							  duration:2000
							})
						}
						
					});
				}else{
					//收藏
					var reqData = {
						userId: 'collect-inv-'+that.userId,
						poId: that.invId,
					}
					var url = common.apiHost+'/invitation/tInvitation/collect/add';
					var method = "POST";
					common.request(url,reqData,method).then(data => {
						if(data.data.code == 1){
							that.comSign = true;
							uni.showToast({
							  title:"收藏成功",
							  duration:2000
							})
						}
						
					});
				}
				
			},
			//收藏的状态
			loadCollectStatus(){
				var that = this;
				var reqData = {
					userId: 'collect-inv-'+that.userId,
					poId: that.invId,
				}
				var url = common.apiHost+'/invitation/tInvitation/collect/or';
				var method = "POST";
				common.request(url,reqData,method).then(data => {
					if(data.data.code == 1){
						that.comSign = data.data.data;
					}
					
				});
			},
			//进个人主页
			toPersonal(userId){
				console.log("userId:"+userId);
				uni.navigateTo({
					url:'../me/personal?userId='+userId
				});
			},
			//发表评论
			sendMSg(){
				var that = this;
				if(that.comContent == null || that.comContent == ''){
					uni.showToast({
					  title:"发表的评论不能为空哦~",
						 duration:2000
					})
				}else{
					var that = this;
					var reqData = {
						userId: that.userId,
						invId: that.invId,
						comContent: that.comContent
					}
					var url = common.apiHost+'/invitation/tComment/save';
					var method = "POST";
					common.request(url,reqData,method).then(data => {
						if(data.data.code != 1){
							uni.showToast({
							  title:"发表评论失败,请稍后再试...",
								 duration:2000
							})
						}else{
							uni.showToast({
							  title:"发表评论成功",
								 duration:2000
							})
							//重新加载
							that.loadDetailInv();
							that.comContent = '';
						}
						that.loading = false;
					}).catch(err => {
						uni.showToast({
						  title:"服务器异常，发表评论失败...",
							 duration:2000
						})
						that.loading = false;
					})
				}
				
			},
			//获取帖子详情
			async loadDetailInv(){
				var that = this;
				var url = common.apiHost+'/invitation/tInvitation/front/get/'+that.invId;
				var method = "GET";
				common.request(url,null,method).then(data => {
					if(data.data.code != 1){
						uni.showToast({
						  title:"稍后再试...",
							 duration:2000
						})
					}else{
						console.log("加载详情: "+that.invId)
						that.detailInv = data.data.data;
						that.evaList = that.detailInv.commentList;
						
					}
					that.loading = false;
				}).catch(err => {
					uni.showToast({
					  title:"服务器异常，请稍后再试...",
						 duration:2000
					})
					that.loading = false;
				})
			},
			redirectToDetail(){
				uni.redirectTo({
					url: 'details'
				})
			}
		}
	}
</script>

<style lang="scss" >
	page{
		height: 100%;
	}
	.content{
		display: flex;
		flex-direction: column;
		height: 100%;
		background: #fff;
	}
	.video-wrapper{
		height: 422upx;
		
		.video{
			width: 100%;
			height: 100%;
		}
	}
	.scroll{
		flex: 1;
		position: relative;
		background-color: #f8f8f8;
		height: 0;
	}
	.scroll-content{
		display: flex;
		flex-direction: column;
	}
	/* 简介 */
	.introduce-section{
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		line-height: 1.5;
		
		.title{
			font-size: 36upx;
			color: #303133;
			margin-bottom: 16upx;
		}
		.introduce{
			display: flex;
			font-size: 26upx;
			color: #909399;
			
			.show-icon{
				font-size: 34upx;
				padding-left: 10upx;
			}
		}
	}
	/* 点赞等操作 */
	.actions{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		line-height: 1.3;
		padding: 10upx 40upx 20upx;
	
		.action-item{
			display: flex;
			flex-direction: row;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 24upx;
			color: #999;
		}
		.yticon{
			display: block;
			align-items: center;
			justify-content: center;
			width: 60upx;
			height: 60upx;
			font-size: 52upx;
			
			&.reverse{
				position: relative;
				top: 6upx;
				transform: scaleY(-1);
			}
			&.active{
				color: #ec706b;
			}
		}
		.icon-fenxiang2{
			font-weight: bold;
			font-size: 36upx;
		}
		.icon-shoucang{
			font-size: 44upx;
		}
	}
	.mix-loading{
		transform: translateY(140upx);
	}
	.s-header{
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
		display:flex;
		flex-direction:column;
		background: #fff;
		padding: 20upx 0;
	}
	
	.eva-item{
		display:flex;
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
		display:flex;
		flex-direction:column;
		flex: 1;
		font-size: 26upx;
		color: #909399;
		position:relative;
		.zan-box{
			display:flex;
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
	
	/* 底部 */
	.bottom{
		flex-shrink: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 90upx;
		padding: 0 30upx;
		box-shadow: 0 -1px 3px rgba(0,0,0,.04); 
		position: relative;
		z-index: 1;
		
		.input-box{
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 1;
			height: 60upx;
			background: #f2f3f3;
			border-radius: 100px;
			padding-left: 10upx;
			
			.icon-huifu{
				margin-top: 20upx;
				font-size: 28upx;
				color: #909399;
			}
			.input{
				width: 85%;
				margin: 10upx 10upx 0upx 0upx;
				font-size: 28upx;
				color: #303133;
			}
		}
		.confirm-btn{
			font-size: 30upx;
			padding-left: 20upx;
			color: #0d9fff;
		}
		
	}
	.img-item-1{
		width: 100%;
		height: 20upx;
		background-color: #ffffff;
	}
	.item-time {
		margin-left: 20upx;
	}
</style>
