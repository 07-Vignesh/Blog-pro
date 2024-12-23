const { Schema,model,models } =require("mongoose") ;

const enquryschema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:String,
    message:String,
})



const EnquiryModel = models.Enqury || model('Enqury', enquryschema);

export default EnquiryModel;