const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/studentteacher',{useNewUrlParser:true});

const Schema=mongoose.Schema;

const teacherSchema=new Schema({
    teacher_name:String,
    student_list:[]

});

const studentSchema=new Schema({

    student_name:String,
    Student_USN:String,
   
    attendence_status:Number,
    current_cgpa:Number,
    backlogs:Number,
    backlog_subjects:[],
    sem_wise_sgpa:{
        sem1:Number,
        sem2:Number,
        sem3:Number,
        sem4:Number,
        sem5:Number,
        sem6:Number,
        sem7:Number,
        sem8:Number,
        
    }
})
const Teachers=mongoose.model('Teachers',teacherSchema);
const Students=mongoose.model('Students',studentSchema);

module.exports.Teachers=Teachers;
module.exports.Students=Students;
