const mongooes = require("mongoose");

const Schema = mongooes.Schema;

const commentSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Auth",
  },
  filmId: {
    type: Schema.Types.ObjectId,
    ref: "Film",
  },
  content: {
    type: String,
    default: "",
  },
  commentDate: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongooes.model("CommentUser", commentSchema);
