import mongoose from 'mongoose'

const Schema = mongoose.Schema
const courseSchema = new Schema({
    id: String,
    title: String,
    author: String,
    description: String,
    topic:String,
    url: String,
    voteCount: { type: Number, default: 0 }
})

courseSchema.index({'$**': 'text'})

const model = mongoose.model('course', courseSchema)
export default model