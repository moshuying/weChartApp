const {log} = console;
const axios = require('axios');
class Express {
  constructor(text) {
    this.mainUrl = 'https://www.kuaidi100.com/';
    this.text = text;
    this.mainHeaders = {
      Host: 'www.kuaidi100.com',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:70.0) Gecko/20100101 Firefox/70.0',
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
      'Accept-Encoding': 'gzip, deflate, br',
      'X-Requested-With': 'XMLHttpRequest',
      Origin: 'https://www.kuaidi100.com',
      Connection: 'keep-alive',
      Referer: this.mainUrl,
      'Content-Length': '0'
    }
  }
  async init(){
    let res= await axios.get(this.mainUrl);
    this.Cookie = res.headers['set-cookie']
    this.mainHeaders.Cookie = res.headers['set-cookie'][0].toString()+';'+res.headers['set-cookie'][1]+';'+res.headers['set-cookie'][2];
  }
  async autoType() {
    let res = await axios({
      methods: 'post',
      url: this.mainUrl+'autonumber/autoComNum?resultv2=1&text=' + this.text,
      data: {},
      headers: this.mainHeaders
    });
    return res.data.auto[0].comCode;
  }
  async getres() {
    await this.init()
    let queryType = await this.autoType();
    let urlIs = this.mainUrl+'query?type=' + queryType + '&postid=' + this.text + '&temp=' + Math.random() % 100 + '&phone='
    log(urlIs)
    let res = await axios({
      methods: 'get',
      url: urlIs,
      headers: this.mainHeaders
    });
    log(res.data)
    return res.data
  }
}
export default{
  Express
}
// const temp = new Express('YT4089928762666');
// temp.getres()