import config from './config.scss';
export default{
  baseurl:String(config.weatherUrl.toString().substring(1,config.weatherUrl.length-1)),
	pathUrl:'http://47.107.231.9:7002',
  faceIdUrl:'https://aip.baidubce.com/rest/2.0/face/v3/faceset/user/add?access_token=',
  faceIdToken:'24.f1fc6f1ba955d20800bc3c9b3fba3d0b.2592000.1571900694.282335-17329266'
}