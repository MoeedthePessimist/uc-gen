import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors' 
import postRoutes from './routes/posts.js';


const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

//

const CONNECTION_URL = "mongodb+srv://moeedawan2121:awanmoeed1212@cluster0.homne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 6900;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`)))
.catch(() => console.log(error.message));

mongoose.set('useFindAndModify', false);