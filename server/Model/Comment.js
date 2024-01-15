const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
    {
        name: String,
        password: String,
        comment: String,
        // commentNum: Number
    }, { collection: "comment" });

// 모델 생성
const Comment = mongoose.model('Comment', commentSchema);

// 모델 내보내기
module.exports = { Comment };