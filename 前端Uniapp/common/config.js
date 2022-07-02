export default {
	/**
	 * @description slogan 
	 */
	title: '诡瞥社区,诡也,瞥之.',
	/**
	 * @description token在Cookie中存储的天数，默认1天
	 */
	cookieExpires: 7,
	/**
	 * @description api请求基础路径
	 */
	baseUrl: {
		dev: 'http://192.168.0.44:8881/',
		pro: 'http://192.168.0.197:54321/',
		defaultPrefix: "api/v1/"
	},
	/**
	 * @description 用户验证请求基础路径
	 */
	authUrl: {
		dev: 'http://192.168.0.44:8881/api/oauth/authadmin',
		pro: 'http://localhost:54321/monster/api/oauth/authadmin'
	},
	/**
	 * @description app下载地址
	 */
	appDownloadUrl: "www.baidu.com",
	/**
	 * @description 上传配置
	 */
	uploadConfig: {
		enableQiniu: true, //是否七牛上传，默认启用
		qiniu: {
			qiniuDomain: "http://q1o2gp8mj.bkt.clouddn.com/", //域名，启用七牛上传后此处必填
			useCdnDomain: true,
			bucket:"monster1",
			ak: "pMvRgO1pq8nbOsuAOYr6D9d7HH1-fcAGNqFziwsk",
			sk: "XiBd72v3P27ou1w7NHTk8Jh1g5Krs8JhCkB06bX_",
			//https://blog.csdn.net/xue251248603/article/details/52982263  视频类型mineType
			videoMimeType: ["video/x-flv", "video/mp4", "application/x-mpegURL", "video/MP2T", "video/3gpp", "video/quicktime",
				"video/x-msvideo", "video/x-ms-wmv"
			],
			videoMaxSize: 0,
			imgMimeType: ["image/jpg", "image/jpeg", "image/png", "image/gif"],
			imgMaxSize: 0
		}
	}
}
