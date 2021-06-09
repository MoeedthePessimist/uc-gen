import mongoose from 'mongoose';


const postSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;