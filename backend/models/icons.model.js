import mongoose,{Schema} from "mongoose";

const siteSchema = new Schema(
    {
        name: {
            type: String, // cloudinary url
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        }
    },{
        timestamps: true
    }
)

export const Site = mongoose.model("Site", siteSchema);