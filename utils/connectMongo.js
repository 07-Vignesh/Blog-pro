import mongoose from "mongoose"
 
const coonectDb=async()=>mongoose.connect("mongodb+srv://2006vigneshvicky:n1tTgiMesHo2EtZs@cluster0.j9qho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
export default coonectDb