const CustomerSchema = require('../model/customer');

const save = (req, resp) => {
    const customer = new CustomerSchema({
        name:req.body.name,
        address:req.body.address,
        salary:req.body.salary
    });

    CustomerSchema.save(customer).then(result=>{
        resp.status(201).json({id:result._id});
    }).catch(error=>{
        resp.status(500).json({error});
    });
}
const get = (req, resp) => {
    CustomerSchema.findOne({_id:req.body.id}).then(result=>{
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
}
const del = (req, resp) => {
}
const getAll = (req, resp) => {
}

module.exports={
    save,get,update,del,getAll
}