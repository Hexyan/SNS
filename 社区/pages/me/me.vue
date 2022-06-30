 <template>
	<view>
		
		<!--主体-->
		<view class="meMain">
			<image src="../../static/icon/meBg.png"></image>
			<view class="mePosition">
				<view class="meMainBox">
					
					<!--头部-->
					<view class="meHead" @click="BindGetUserInfo()">
						<view class="meHeadAvatar"><image :src="image" mode="aspectFill"></image></view>
						<view class="meHeadName">
							<block v-if="nickname == null || nickname == ''">
								<text>{{ username }}</text>
							</block>
							<block v-else>
								<text>{{ nickname }}</text>
							</block>
						</view>
					</view>
					<!--头部-->
					
					<!--模板-->
					<view class="meOverBg">
						<view class="meVisitor">
							<view class="meVisitorLt" @click="toMyFocus()">
								<view class="meVisitorTxt_02">{{focusCount}}</view>
								<view class="meVisitorTxt_01">关注</view>
							</view>
							<view class="meVisitorLt" @click="toMyFans()">
								<view class="meVisitorTxt_02">{{fansCount}}</view>
								<view class="meVisitorTxt_01">粉丝</view>
							</view>
						</view>
					</view>
					<!--模板-->
					
					<!--订单-->
					<view class="meOverBg">
						<view class="meVisitorTitle">个人相关</view>
						<view class="meVisitor">
							<view class="meOrderLt" @click="toMyInvitation()">
								<view class="meOrderTxt_01"><image src="../../static/icon/invitation.png"></image></view>
								<view class="meOrderTxt_02">我的帖子</view>
							</view>
							<view class="meOrderLt" @click="toMyComment()">
								<view class="meOrderTxt_01"><image src="../../static/icon/comment.png"></image></view>
								<view class="meOrderTxt_02">我的评论</view>
							</view>
							<view class="meOrderLt" @click="toMyCollect()">
								<view class="meOrderTxt_01"><image src="../../static/icon/collect.png"></image></view>
								<view class="meOrderTxt_02">我的收藏</view>
							</view>
							<view class="meOrderLt">
								<view class="meOrderTxt_01"><image src="../../static/icon/good.png"></image></view>
								<view class="meOrderTxt_02">我赞过的</view>
							</view>
						</view>
					</view>
					<!--订单-->
					
					<!--其他-->
					<view class="meOverBg">
						<view class="businessList" @click="toSetting()">
							<view class="businessListTxt">设置</view>
						</view>
						<view class="businessList" @click="toAbout()">
							<view class="businessListTxt">关于我们</view>
						</view>
					</view>
					<!--其他-->
					
					
				</view>
			</view>
		</view>
		<!--主体-->
		
	</view>
</template>

<script>
	
	import common from "@/common/common.js";
	
	export default{
		data(){
			return{
				image:'../../static/chatImage.png',//头像
				nickname:'点击登录',
				focusCount: '0',
				fansCount: '0',
				userId: '',
			}
		},
		onLoad() {
			var that = this;
			//获取当前登录人信息
			uni.getStorage({  //携带token
			    key: 'user',  
			    success: function(ress) {
					that.userId = ress.data.id;
			    }
			});
			
		},
		onShow() {
			//加载个人信息
			this.loadUserPerson();
		},
		methods:{
			//点击我的帖子
			toMyInvitation: function(){
				uni.navigateTo({
					url:'./myInvitation'
				});
			},
			//点击我的评论
			toMyComment: function(){
				uni.navigateTo({
					url:'./myComment'
				});
			},
			//点击我的收藏
			toMyCollect: function(){
				uni.navigateTo({
					url:'./myCollect'
				});
			},
			//点击关注
			toMyFocus: function(){
				uni.navigateTo({
					url:'./myFocus'
				});
			},
			//点击粉丝
			toMyFans: function(){
				uni.navigateTo({
					url:'./myFans'
				});
			},
			//点击个人信息
			BindGetUserInfo:function(){
				if ( this.userId == null ) {
					console.log("还没登录");
					uni.navigateTo({
						url:'../shilu-login/login'
					});
				} else{
					uni.navigateTo({
						url:'./info'
					});
					
				}
			},	
			//点击设置
			toSetting: function(){
				uni.navigateTo({
					url:'./setting'
				});
			},
			//关于我们
			toAbout: function(){
				uni.navigateTo({
					url:'./about'
				});
			},
		    loadUserPerson: function(){
		    	var that = this;
		    	var url = common.apiHost+'/user/tUser/front/personal/get/'+that.userId;
		    	var method = "GET";
		    	common.request(url,null,method).then(data => {
		    		//更新用户
					console.log(JSON.stringify(data.data.data));
					var user = data.data.data;
		    		that.image = user.image;
					that.nickname = user.nickname;
					that.focusCount = user.focusCount;
					that.fansCount = user.fansCount;
					console.log(JSON.stringify(user));
		    	})
		    },
			
		}
	}
</script>

<style >
	page{ background: #F5F5F5; }
	.meMain{ width: 100%;position: relative; }
	.meMain>image{ width: 100%;height: 220upx;display: block; }
	.meMainBox{ width: 92%;margin: 0 auto; }
	.mePosition{ position: absolute;top: 0;left: 0;width: 100%; }
	.meHead{ overflow: hidden;position: relative; }
	.meHeadAvatar{ float: left;width: 19%;margin-top: 10upx; }
	.meHeadAvatar image{ width: 110upx;height: 110upx;display: block;border-radius: 50%; }
	.meHeadName{ float: left;width: 100%;line-height: 120upx;color: #FFFFFF;font-size: 28upx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap; }
	
	.meOverBg{ background: #FFFFFF;overflow: hidden;border-radius: 12upx;margin-top: 30upx; }
	.meVisitor{ display: flex;flex-direction: row; }
	.meVisitorLt{ width: 50%;text-align: center;margin: 30upx 0; }
	.meVisitorLt:nth-child(1){ border-left: 1px #F5F5F5 solid;border-right: 1px #F5F5F5 solid; }
	.meVisitorTxt_01{ font-size: 28upx;color: #666666; }
	.meVisitorTxt_01 image{ width: 35upx;height: 35upx;vertical-align: middle;margin: 0 10upx 4upx 0; }
	.meVisitorTxt_02{ font-size: 30upx;color: #55557f; }
	
	.meVisitorTitle{ font-size: 30upx;color: #55557f;border-bottom: 1px #F5F5F5 solid;padding: 20upx 30upx; }
	.meOrderLt{ width: 25%;text-align: center;padding: 30upx 0;transition: all 0.4s; }
	.meOrderLt:active{ background: #E2E2E2; }
	.meOrderTxt_01{  }
	.meOrderTxt_01 image{ width: 80upx;height: 80upx;display: block;margin: 0 auto 6upx; }
	.meOrderTxt_02{ font-size: 24upx;color: #666666; }
	
	.businessList{ overflow: hidden;padding: 30upx;border-bottom: 1px #F5F5F5 solid;transition: all 0.4s; }
	.businessList:active{ background: #E2E2E2; }
	.businessList:last-child{ border-bottom: none; }
	.businessListTxt{ float: left;font-size: 28upx;color: #55557f; }
	.businessListTxt image{ width: 35upx;height: 35upx;vertical-align: middle;margin: 0 10upx 4upx 0; }
	.businessListYou{ float: right;font-size: 28upx;color: #55557f; }
	.businessListYou image{ width: 20upx;height: 20upx;vertical-align: middle;margin: 0 0 4upx 10upx; }
	
	
</style>
