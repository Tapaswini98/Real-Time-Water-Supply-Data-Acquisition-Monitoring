const mongoose = require('mongoose');

let sectionSchema = mongoose.Schema({
    section_id:{
        type:Number,
        maxLength:11,
        unique:true,
        required:true
    },
    section_name:{
        type:String,
        maxLength:30,
        required:true
    },
    section_nick_name:{
        type:String,
        maxLength:30,
        default:null
    },
    no_of_consumer:{
        type:String,
        maxLength:5,
        required:true
    },
    day_avg_demand:{
        type:String,
        maxLength:8,
        required:true
    },
    lat:{
        type:String,
        maxLength:16,
        required:true
    },
    lon:{
        type:String,
        maxLength:16,
        required:true
    },
    alt:{
        type:String,
        maxLength:5,
        required:true
    },
    weather_location:{
        type:String,
        maxLength:80,
        required:true
    },
    subdivision_id_fk:{
        type:Number,
        maxLength:11,
        required:true 
    },
    section_activation_date:{
        type:Date,
        required:true
    },
    section_is_active:{
       type:Number,
       maxLength:1,
       required:true
    },
    city_id_fk:{
        type:Number,
        maxLength:11,
        required:true
    }
});

module.exports = mongoose.model('Section',sectionSchema)