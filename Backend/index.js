import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./routes/book.route.js"
import userRoute from "./routes/user.route.js"
import cors from "cors"

const app = express()
dotenv.config()

app.use(cors(
    {
        origin: ["https://deploy-mern-1whq.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/bookstore")
    .then(() => {
        console.log("MongoDB Connected"); 
    })
    .catch(err => console.log("MongoDB Error: ", err.message))


// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);


app.get("/", (req, res) => {
    res.send("Bookstore App")
})

app.listen(PORT, () => console.log(`Server Listening at ${PORT}`));