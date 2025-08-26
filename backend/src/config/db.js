import mongoose from 'mongoose';


export default async function connectDB(){
   await mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("Database connected...");
    }).catch(err=>{
        console.log("Error while database connection...", err);
    })
}