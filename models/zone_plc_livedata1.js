const mongoose = require('mongoose');

let zonePlcLivedata1Schema = mongoose.Schema({
    data_id:{
        type:Number,
        maxLength:111,
        default:null
    },
    plc_slno:{
        type:String,
        maxLength:30,
        default:null
    },
    main_meter_flow:{
        type:String,
        maxLength:30,
        required:true
    },
    main_meter_demand_flow:{
        type:String,
        maxLength:10,
        default:null
    },
    sub_flow_meter_1:{
        type:String,
        maxLength:16,
        default:null
    },
    sub_flow_meter_2:{
        type:String,
        maxLength:16,
        default:null
    },
    sub_flow_meter_3:{
        type:String,
        maxLength:16,
        default:null
    },
    sub_flow_meter_4:{
        type:String,
        maxLength:16,
        default:null
    },
    chlorine_1:{
        type:String,
        maxLength:30,
        default:null 
    },
    esr_presure:{
        type:String,
        maxLength:30,
        default:null 
    },
    esr_outlet_presure:{
        type:Number,
        maxLength:30,
        default:null
    },
    esr_level: {
        type:String,
        maxLength:30,
        default:null
    },
    valve_status :{
        type:String,
        maxLength:1,
        default:null
    },
    gene_red_volt:{
        type:String,
        maxLength:7,
        default:null
    },
    gene_yel_volt:{
        type:String,
        maxLength:7,
        default:null
    },
    gene_blu_volt:{
        type:String,
        maxLength:7,
        default:null
    },
    gene_red_current:{
        type:String,
        maxLength:5,
        default:null
    },
    gene_yel_current:{
        type:String,
        maxLength:5,
        default:null
    },
    gene_blu_current:{
        type:String,
        maxLength:5,
        default:null
    },
    main_red_volt:{
        type:String,
        maxLength:7,
        default:null 
    },
    main_yel_volt:{
        type:Number,
        maxLength:7,
        default:null
    },
    main_blu_volt: {
        type:String,
        maxLength:7,
        default:null
    },
    main_red_current:{
        type:String,
        maxLength:5,
        default:null
    },
    main_yel_curren:{
        type:String,
        maxLength:5,
        default:null
    },
    main_blu_current:{
        type:String,
        maxLength:5,
        default:null
    },
    generator_fule_level:{
        type:String,
        maxLength:8,
        default:null
    },
    date_time:{
        timestamp:{
            type:date,
            default:date.now
        },
        required:true
    },time:{
        timestamps:true,
        default:null
    }
})
module.exports = mongoose.model('ZonePlcLivedata1',zonePlcLivedata1Schema);