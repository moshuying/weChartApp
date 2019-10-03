/**
 * @Description :墨抒颖
 * @Author :墨抒颖
 * @Date :2019-09-22 23:20:46
 * @LastEditTime :2019-10-03 09:10:20
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :https://blog.csdn.net/qq_34846662
 */
import config from './config.scss';
export default {
    baseurl: String(config.weatherUrl.toString().substring(1, config.weatherUrl.length - 1)),
    faceIdUrl: 'https://aip.baidubce.com/rest/2.0/face/v3/faceset/user/add?access_token=',
    faceIdToken: '24.f1fc6f1ba955d20800bc3c9b3fba3d0b.2592000.1571900694.282335-17329266'
}