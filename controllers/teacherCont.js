const Schemas=require('../models/teacherSchema')
const Teachers=Schemas.Teachers;
const Students=Schemas.Students;

module.exports=function(app){

    app.get('/listofstudents',(req,res)=>{
        res.render('listofstudents')
    })

    app.get('/newstudent',(req,res)=>{
        res.render('newstudent')

    })

    app.post('/newstudent',(req,res)=>{
        var new_student=new Students({
            proctor_name:req.body.proctor_name,
            student_name:req.body.student_name,
            Student_USN:req.body.student_usn,
           
            attendence_status:req.body.attendence,
            current_cgpa:req.body.current_cgpa,
            backlogs:req.body.backlogs,
            sem_wise_sgpa:{
                sem1:req.body.sem1_sgpa,
                sem2:req.body.sem2_sgpa,
                sem3:req.body.sem3_sgpa,
                sem4:req.body.sem4_sgpa,
                sem5:req.body.sem5_sgpa,
                sem6:req.body.sem6_sgpa,
                sem7:req.body.sem7_sgpa,
                sem8:req.body.sem8_sgpa,
            }
        })
        Teachers.findOneAndUpdate({teacher_name:req.body.proctor_name},{$push:{student_list:req.body.student_name}}).then(function(res){
            console.log(res)
        });
        new_student.save(function(err){
            if(err) throw err
            else{
                console.log('successfullly saved in the database')
            }
        })
        res.render('newstudent')
    })
}