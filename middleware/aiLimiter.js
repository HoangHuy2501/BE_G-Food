const rateLimit = require("express-rate-limit");

const aiLimiter = rateLimit({
  windowMs: 5000, // 2 giây
  max: 1, // chỉ cho phép 1 request trong 2 giây
  message: {
    success: false,
    status: 429,
    message: "Bạn gửi quá nhanh, vui lòng chờ 2 giây rồi thử lại."
  }
});

module.exports = aiLimiter;
