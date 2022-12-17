const CustomerSchema = require('../model/customer');

const save = (req, resp) => {
    const customer = new CustomerSchema({
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary
    });

    customer.save().then(result=>{
        resp.status(201).json({id:result._id});
    }).catch(error=>{
        resp.status(500).json({error});
    });
}
const get = (req, resp) => {
    CustomerSchema.findOne({_id:req.headers.id}).then(result=>{
        if(result){
            resp.status(200).json({data:result});
        }else{
            resp.status(404).json({data:null});
        }
    }).catch(error=>{
        resp.status(500).json({error});
    });
}
const update = (req, resp) => {
    CustomerSchema.findOneAndUpdate({_id:req.body.id},{
        $set:{
            name:req.body.name,
            address:req.body.address,
            salary:req.body.salary
        }
    }).then(result=>{
        if(result){
            resp.status(200).json({data:result});
        }else{
            resp.status(404).json({data:null});
        }
    }).catch(error=>{
        resp.status(500).json({error});
    });
}
const del = (req, resp) => {
    CustomerSchema.findOneAndDelete({_id:req.query.id}).then(result=>{
        if(result){
            resp.status(200).json({data:result});
        }else{
            resp.status(404).json({data:null});
        }
    }).catch(error=>{
        resp.status(500).json({error});
    });
}
const getAll = (req, resp) => {
    CustomerSchema.find().then(result=>{
            resp.status(200).json({data:result});
    }).catch(error=>{
        resp.status(500).json({error});
    });
}

module.exports={
    save,get,update,del,getAll
}