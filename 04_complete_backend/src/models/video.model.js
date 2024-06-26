import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema=new Schema({
    videoFile:{
        type:String,
        req:true
    },
    thumbnail:{
        type:String,
        req:true
    },
    title:{
        type:String,
        req:true
    },
    description:{
        type:String,
        req:true
    },
    duration:{
        type:Number,
        req:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video=new mongoose.model("Video",videoSchema)