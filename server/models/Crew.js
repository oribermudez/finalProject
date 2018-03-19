const Schema = require("mongoose").Schema;
const PassportLocalMongoose = require("passport-local-mongoose");

const userSchema = new require("mongoose").Schema({
    number:{
        type:String
    },
    zone:{
        type:String,
    },
    members:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    coordinates: { 
        type: Object,
    },
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

userSchema.plugin(PassportLocalMongoose, {usernameField:"email"})
module.exports = require("mongoose").model("User", userSchema);