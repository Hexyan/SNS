<template>
	<view class="content">
		<form @submit="formSubmit" >
			<view class="cu-form-group margin-top">
				<view class="meHeadAvatar">
					<view v-if="image == null || image == ''">
						<image name="image" mode="aspectFill" @click="imageClick" src="../../static/chatImage.png"></image>
					</view>
					<view v-else>
						<image name="image" mode="aspectFill" @click="imageClick" :src="image" ></image>
					</view>
					</view>
			</view>
			<view class="cu-form-group margin-top">
					<view class="title">昵称</view>
					<input placeholder="设置昵称" :value="nickname" name="nickname"></input>
			</view>
			<view class="cu-form-group margin-top">
					<view class="title">签名</view>
					<input placeholder="留下个签名吧" :value="signature" name="signature"></input>
			</view>
			<view class="cu-form-group margin-top">
					<radio-group  name="sex" class="sex">
					    <label>
					       <radio value="1" v-if="sex == 1" checked="checked" />
							<radio value="1" v-if="sex != 1"  /><text>男</text>
					    </label>
					    <label>
					        <radio value="2" v-if="sex == 2" checked="checked" />
							<radio value="2" v-if="sex != 2" /><text>女</text>
					    </label>
					</radio-group>			
			</view>
		    
			<view class="cu-form-group">
				<view class="title">生日</view>
				<picker mode="date" :value="birthday" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{birthday}}
					</view>
				</picker>
			</view>
		    <view class="uni-btn-v" style="margin-top: 30upx;">
		        <button form-type="submit" style="background-color:#55557f; color:white">保存修改</button>
		    </view>           
		</form>
	</view>
</template>

<script>
	import common from "@/common/common.js";
	
	export default {
		data() {
			const currentDate = this.getDate({
			            format: true
			})
			return {
				userId: '',
				image: '',
				nickname: '',
				signature: '',
				sex: 1,
				birthday: currentDate,
			}
		},
		computed: {
		        startDate() {
		            return this.getDate('start');
		        },
		        endDate() {
		            return this.getDate('end');
		        }
		},
		onLoad() {
			var that = this;
			//获取登录人信息
			uni.getStorage({  
			    key: 'user',  
			    success: function(ress) {
					that.userId = ress.data.id;
			    }
			});
			
			//加载个人信息
			this.loadUserInfo();
			
		},
		methods: {
			loadUserInfo: function(){
				var that = this;
				var url = common.apiHost+'/user/tUser/front/info/get/'+that.userId;
				var method = "GET";
				common.request(url,null,method).then(data => {
					that.image= data.data.data.image;
				    that.nickname= data.data.data.nickname;
				    that.signature= data.data.data.signature;
				    that.sex= data.data.data.sex;
					if(data.data.data.birthday != null){
						that.birthday= data.data.data.birthday;
					}
				    
					
				});
			},
			 formSubmit: function(e) {
			        var that = this;
			       
					var reqData = e.detail.value;//表单数据
					reqData.id = that.userId;
					reqData.birthday = that.birthday;
					reqData.image = that.image;
					console.log(JSON.stringify(reqData));
					var url = common.apiHost+'/user/tUser/front/info';
					var method = "POST";
					common.request(url,reqData,method).then(data => {
						if(data.data.code == 1){
							uni.showToast({
							  title:"修改成功",
							  duration:2000
							})
							
							that.user = data.data.data;
							
						}else{
							uni.showToast({
							  title:"修改失败",
							  duration:2000
							})
							
						}
					
						
						
					});
			},
			DateChange(e) {
					this.birthday = e.detail.value
			},
			getDate(type) {
			    const date = new Date();
			    let year = date.getFullYear();
			    let month = date.getMonth() + 1;
			    let day = date.getDate();
						
			    if (type === 'start') {
			        year = year - 60;
			    } else if (type === 'end') {
			        year = year + 2;
			    }
			    month = month > 9 ? month : '0' + month;;
			    day = day > 9 ? day : '0' + day;
			    return `${year}-${month}-${day}`;
			},
			async imageClick() {
				var _this = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						//上传
						var url = '';
						var token = '';
						uni.getStorage({  //携带token
							key: 'user',  
							success: function(ress) {
							  token = ress.data.token;
						    }
						});
						//上传图片
						uni.uploadFile({
							url: common.apiHost + '/other/qiniu/file/upload', //仅为示例，换成自己的上传地址
							filePath: res.tempFilePaths[0],
							header: {
								"Content-Type": "multipart/form-data",
								"token": token
							},
							name: 'file',
							formData: {
								'file': 'file'
							},
							success: (res) => {
								//未登陆,自动跳到登陆界面
								console.log('上传');
								if(res.statusCode === 405){
									console.log("未登陆")
									uni.navigateTo({
										url: "/pages/shilu-login/login"
									});
								}
								var ress = JSON.parse(res.data);
								if(ress.code === 1){
									url = ress.data;
									_this.image = url;
									console.log('图片路径：==============='+_this.image);
								}
								
							},
						});
						
					}
				});
			},
			
			        
		}
	}
</script>

<style lang="scss" scoped>
	@import url('../../colorui/main.css');
	@import url('../../colorui/icon.css');
	
	.content{
		display: flex;
	}
	
	.sex {
		margin-top: 20upx;
	}
	
	.meHeadAvatar image{ 
		width: 200upx;height: 200upx;display: block;border-radius: 50%; 
	}

</style>
