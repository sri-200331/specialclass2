const mongoose=require('mongoose')

const productSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"product name is required"],
            trim:true
        },
        price:{
            type:Number,
            required:[true,"Price is required"],
            min:[0,"price cannot be negative"]
        },
        category:{
            type:String,
            required:[true,"category is required"],
            trim:true
        },
        stock:{
            type:Number,
            required:[true,"stock is required"],
            min:[0,"stock cannot be neagtive"]
        },
        imageUrl:{
            type:String,
            

        },

    },
    {
        timestamps:true
    }
)
module.exports=mongoose.model("Product",productSchema)