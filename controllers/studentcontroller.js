const Schemas=require('../models/teacherSchema')
const Teachers=Schemas.Teachers;
const Students=Schemas.Students;

module.exports=function(app){

    app.get('/showstudent/:studentname',(req,res)=>{
        console.log(req.params.studentname)
        var name=req.params.studentname;
        
        Students.find({student_name:name}).then(function(result){
            console.log(result)
            res.render('studentdata',{data:result[0]})
        })
        
    })
    
    
}