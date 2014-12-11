var students = [
    //{firstname: "", lastname: "", grade: 0}
];


var firstname_field, lastname_field, grade_field, add_btn;

function init() {
    firstname_field = $('#firstname');
    lastname_field = $('#lastname');
    grade_field = $('#grade');
    add_btn = $('#btn-add-student');
    
    add_btn.click(addStudent);
    
}

function addStudent() {
    //create object with the three values
    var student = {
        firstname: firstname_field.val(),
        lastname: lastname_field.val(),
        grade: parseFloat(grade_field.val()),
    
    }
    
    //Add student object into students array
    
    students.push(student);
    
    //Clear out fields
    
    firstname_field.val('');
    lastname_field.val('');
    grade_field.val('');
    
    console.log(students);
}


$(document).ready(init);