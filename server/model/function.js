// 随机验证码
const randomString = (len = 6) => {
  let chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  let maxPos = chars.length;
  let data = "";
  for (i = 0; i < len; i++) {
    data += chars.charAt(Math.floor(Math.random() * maxPos));
  }

  return data;
};

module.exports = { randomString };
