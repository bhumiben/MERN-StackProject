import mongoose from 'mongoose';

const postingSchema = new mongoose.Schema(
    {
        location:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },

        imageUrls:{
            type: Array,
            required: true,
        },

        userRef:{
            type: String,
            required: true,
        },
    }, {timestamps: true}

)

const Posting = mongoose.model('Posting', postingSchema);

export default Posting;