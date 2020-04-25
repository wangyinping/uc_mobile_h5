/**
 * Created by Kaola on 2020-02-17.
 */
import axiosRequest from '@/request/axiosRequest';
import Config from '@/index.config.js';

// 短信验证码
export function sendVerifyCode(data) {
  return axiosRequest.post(`${Config.baseUrl}/v2/repay/dg/sendVerifyCode`, data);
}
// 获取验证码
export function pictureVerifyCode() {
  return axiosRequest.get(`${Config.baseUrl}/common/pictureVerifyCode`, null);
}
// 获取OpenId
export function getOpenId(data) {
  return axiosRequest.post(`${Config.baseUrl}/v1/loan/auth/getOpenId`, data);
}
// 校验短信验证码
export function verifyMobileCode(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/verifyIdentity/verifyMobileCode`, data);
}

// 上传身份证
export function idCardRecognition(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/verifyIdentity/idCardRecognition`, data);
}
// 获取进件列表
export function getLoanList(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/verifyIdentity/getLoan`, data);
}
// 查询开户绑卡信息
export function getCmbcInfo(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/bankCard/queryCmbcInfo`, data);
}
// 查询鉴权通道个数
export function passagewayCount(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/passageway/passagewayCount`, data);
}
// 根据银行卡号查银行
export function getBankName(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/bankCard/getBankName`, data);
}
// 集团支付发送短信
export function bindSendSms(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/passageway/bindSendSms`, data);
}
// 校验短信验证码
export function smsVerify(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/passageway/smsVerify`, data);
}
// 立即提现按钮
export function applyCash(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/bankCard/applyCash`, data);
}
// 提交email
export function storeEmail(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/email/store`, data);
}
export function applyUnbind(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/bankCard/applyUnbind`, data);
}
export function getLoanState(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/verifyIdentity/getLoanState`, data);
}

/*
开户绑卡
*/

// 获取省市信息
export function regionRrd(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/bankCard/regionRrd`, data);
}
// 获取支行信息
export function getBankBranchList(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/bankCard/bankBranchList`, data);
}
// 开户绑卡
export function applyAcc(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/bankCard/applyAcc`, data);
}
// 上传银行卡
export function uploadBankCard(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/bankCard/uploadBankCard`, data);
}
// 获取知情函参数
export function getEnsionNotice(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/verifyIdentity/ensionNotice`, data);
}
// 获取生成合同列表url地址
export function getGenerateSignUrl(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/contract/generateSignUrl`, data, { longTimeOut: 60000 });
}
// 获取CA短信验证码并发送
export function smsSignGenerateCode(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/contract/smsSignGenerateCode`, data);
}
// 校验CA短信验证码
export function checkSmsCode(data) {
  return axiosRequest.post(`${Config.baseUrl}/tx/contract/checkSmsCode`, data);
}
