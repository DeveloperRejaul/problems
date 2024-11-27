const student = []


// add student 
student.push({name:"rezaul karim", age:22, roll:1})
student.push({name:"ramjan ali", age:22, roll:2})
student.push({name:"kamal mia", age:22, roll:3})
student.push({name:"jamal uddin", age:22, roll:4})



// update all student 
student.forEach(st=> st.roll+=1)


// update specific student
const index = student.findIndex(st=> st.name === "ramjan ali");
if(index >= 0) {
 student[index].name = "Ramjan ali 2"
}


// remove specific student
const removeIndex = student.findIndex(st => st.name === "kamal mia")
if(removeIndex >= 0 ) {
  student.splice(removeIndex, 1)
}



console.log(student);