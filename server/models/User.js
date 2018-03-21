const Schema = require("mongoose").Schema;
const PassportLocalMongoose = require("passport-local-mongoose");

const userSchema = new require("mongoose").Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type: String,
    },
    coordinates: { 
        type: Object,
    },
    services:[],
    creditcard:{
        type: Number
    },
    role:{
        type:String,
        enum:["USER", "MANAGER", "TECH", "ADMIN"],
        default: "USER"
    },
    crew:{
        mumber:Number,
        zone:Number,
    }
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

userSchema.plugin(PassportLocalMongoose, {usernameField:"email"})
module.exports = require("mongoose").model("User", userSchema);