const Schemas=require('../models/teacherSchema')
const teachersContr=require('./teacherCont');
const Teachers=Schemas.Teachers;
const Students=Schemas.Students;

const studnetcontr=require('./studentcontroller')
module.exports=function(app){
    // Teachers.find().then(function(data){
    //     console.log(data)
    // })
    app.get('/',(req,res)=>{

        res.render('frontpage');

    })

    app.get('/teacher',(req,res)=>{
        res.render('teachers')
    })

    app.post('/teacher',(req,res)=>{
        var data=req.body.teacher;
         console.log(data)
        // var teacher=new Teachers({
        //     teacher_name:data
        // })
        // teacher.save(function(){
        //     console.log('saved successfully')
        // })
        Teachers.find({teacher_name:data}).then(function(result,err){
            if(err) throw err
            else if(result.length>=1){
                console.log('teacher exists in the database',result)
                console.log(result[0].student_list)
                res.render('listofstudents',{teacher:data,students:result[0].student_list})

            }
            else{
                console.log('teacher does not exist');
                res.render('error',{message:'requested data does not exist '})
            }  
        })

    })

    app.get('/student',(req,res)=>{
        res.render('students');

    });

    app.post('/student',(req,res)=>{
        var data=req.body.studentusn;
        console.log(data)
        Students.find({Student_USN:req.body.studentusn}).then(function(data){
            console.log(data);
            if(data.length>=1){
            res.render('studentdata',{data:data[0]})
            }
            else{
                res.render('error',{message:'requested data does not exist '})

            }
        })
        
    })
teachersContr(app);
studnetcontr(app);
}