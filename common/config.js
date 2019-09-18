import config from './config.scss';
export default{
  baseurl:String(config.weatherUrl.toString().substring(1,config.weatherUrl.length-1))
}