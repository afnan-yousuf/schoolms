import mongoose, { model, mongo } from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    grade: String,
    isactive: Boolean
})

export default mongoose.models.Student || mongoose.model("Student", StudentSchema)