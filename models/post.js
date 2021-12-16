import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema(
  {
    name: { type: String, required: true },
    status: { type: String, required: true },
    comment: { type: String, required: true },
    profilePic: { type: String, required: true }
  },
  { timestamps: true }
)

export default mongoose.model('posts', Post)