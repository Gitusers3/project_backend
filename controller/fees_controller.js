const Fees=require('../model/Fees')
const Student=require('../model/Student')




const add_fees= async (req,res)=>{
    try {
        const{rec_num,div_id,amount,std_id,pay_type,fees_type,rec_towards,status,f_date}=req.body
        let fees=await new Fees({
            rec_num,
            div_id,
            amount,
            std_id,
            pay_type,
            fees_type,
            rec_towards,
            status,
            f_date
        })
        let savedFees = await fees.save()

        let s1=await Student.findById(std_id)
       
        let pending_fees=s1.pending_fees
        let newPending_fees=pending_fees-amount
        const savedStudent=await Student.findByIdAndUpdate(s1,{pending_fees:newPending_fees},{new:true})
        res.json(savedFees)
        console.log(newPending_fees)
    }
    catch (err) {
        res.json({ success: false, message: "something went wrong" })
        console.log(err)
    }
}


const view_fees=async (req,res)=>{
    try{
        const fees=await Fees.find()
        if(fees){
            res.json(fees)
            console.log("---------------------")
            console.log(req.method)
            console.log(fees)
            console.log("---------------------")
        }else{
            res.json({success:true,message:"No records Found"})
        }
    }
    catch(err){
        res.json({success:false,message:"some internal error!!"})
    }
}

const view_one_fees= async (req,res)=>{
    try{
     
    const fees= await Fees.findById(req.params.id)  
   
    if(!fees){
        res.status(400).send("Not found")


    }else{
        res.json(fees)
    }
    }
    catch(err){
        console.error(err.message)
        res.status(500).send("Some internal ERROR")
    }
    
}

const Update_fees=async(req,res)=>{
    try{
        const {rec_num,div_id,amount,std_id,pay_type,fees_type,remark,status,f_date}=req.body
        const fees=await Fees.findById(req.params.id)
        if(!fees){
            console.log("Record Not Found")
            res.status(400).send("Record Not Found")

        }else{
            const newFees={}
            if(rec_num){newFees.rec_num=rec_num}
            if(div_id){newFees.div_id=div_id}
            if(amount){newFees.amount=amount}
            if(std_id){newFees.std_id=std_id}
            if(pay_type){newFees.pay_type=pay_type}
            if(fees_type){newFees.fees_type=fees_type}
            if(remark){newFees.remark=remark}
            if(status){newFees.status=status}
            if(f_date){newFees.f_date=f_date}
           


            const updatedFees=await Fees.findByIdAndUpdate(req.params.id,{$set:newFees},{new:true})

            res.json(updatedFees)
            console.log(updatedFees)
            console.log(req.method)
            console.log("Record Updated Successfully")
            
            

        }

    }catch(err){
        console.error(err.message)
        res.status(500).send("Some Internal Error Occured")
    }

}
module.exports = { add_fees,view_fees,view_one_fees,Update_fees}