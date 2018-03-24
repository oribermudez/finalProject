const Schema = require("mongoose").Schema;
const GeoJSON = require('mongoose-geojson-schema');


const ticketSchema = new require("mongoose").Schema({
    services:[],
    creator:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    image:{
        type:String
    },
    status: {
        type:String,
        default: "Pending",
    },
    zone: {
        type:Number,
        default: 1,
    },
    proof:{
        type:String,
    },
    owner: {
        type:String,
    },
    location: {
        type: Schema.Types.Point,
        coordinates: [Number],
        address: {
            type:String,
        }
    },
    reviewed: {
        type:Boolean,
        default: false,
    }
    
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

module.exports = require("mongoose").model("Ticket", ticketSchema);