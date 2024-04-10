
// 匹配手机号
export const phoneReg = /^[1][3,4,5,6.7,8,9][0-9]{9}$/

// 匹配身份证号码
export const idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

// 匹配邮箱
export const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

// 银行卡
export const bankCardReg = /^([1-9]{1})(\d{15}|\d{17}|\d{18})$/
