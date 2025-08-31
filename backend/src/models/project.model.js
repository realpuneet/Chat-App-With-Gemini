import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
        unique: true
    },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
})

const projectModel = mongoose.model("project", projectSchema);

export default projectModel;