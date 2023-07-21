const Intership=require('../model/Intership');



const add_intership =async (req,res)=>{
    try{
        const {intership_on,frontend_lang,backend_lang,desc,status}=req.body
        let intership= await new Intership({
            intership_on,
            frontend_lang,
            backend_lang,
            desc,
            status

        })
        let savedIntership= await intership.save()
        res.json(savedIntership)

    }
    catch (err) {
        res.json({ success: false, message: "something went wrong" })
        console.log(err)
    }
}

const view_intership=async(req,res)=>{
    try{
    const intership=await Intership.find()
    if(intership){
        res.json(intership)
        console.log("---------------------")
        console.log(req.method)
        console.log(intership)
        console.log("---------------------")
    }else{
        res.json({success:true,message:"No records Found"})
    }
}catch(err){
    res.json({success:false,message:"some internal error!!"})
}

}

const view_one_intership=async(req,res)=>{
    try{
    const intership=await Intership.findById(req.params.id)
    if(!intership){
            res.status(400).send("Not found")
    }else{
        res.json(intership)

    }
}catch(err){
    console.error(err.message)
    res.status(500).send("Some internal ERROR")
}

}

module.exports = { add_intership,view_intership,view_one_intership }