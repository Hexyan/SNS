import common from "@/common/common.js";
const baseUrl = common.apiHost;
let uploadTask;
export const uploadFile = async function(filePath) {
	var url = '';
	var token = '';
	uni.getStorage({  //携带token
		key: 'user',  
		success: function(ress) {
		  token = ress.data.token;
	    }
	});
	uploadTask = uni.uploadFile({
		url: baseUrl + '/other/qiniu/file/upload', //仅为示例，换成自己的上传地址
		filePath: filePath,
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
			console.log("success:" + JSON.stringify(res));
			console.log('图片路径：==============='+url);
			url = res.data.data;
			return url;
		},
		fail: (error) => {
			console.log("error:" + JSON.stringify(error));
		},
		complete: (complete) => {
			console.log("complete:" + JSON.stringify(complete));
		}
	});
	uploadTask.onProgressUpdate((res) => {
		console.log('上传进度' + res.progress);
		console.log('已经上传的数据长度' + res.totalBytesSent);
		console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
	});
}
export const uploadAbort = function() {
	// 测试取消上传任务。
	if (res.progress > 50) {
		uploadTask.abort();
	}
}
