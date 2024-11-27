class Person (var name:String, var age:Int , var roll:Int) {}

fun main () {
  val students = mutableListOf<Person>()

  // add new student 
  students.add(Person("rezaul karim", 20, 1))
  students.add(Person("Ramjan ali", 20, 2))
  students.add(Person("Kamal Mia", 20, 3))
  students.add(Person("Jamal Uddin", 20, 4))


  // update all student roll
  students.map({it.roll+=1})

  // update specific student
  val index = students.indexOfFirst { it.name === "Ramjan ali" }
  if (index >= 0 ) {
    students[index].name = "Ramjan ali 2"
  }

  // delete specific element
  val removeIndex = students.indexOfFirst { it.name === "Kamal Mia"  }
  if(removeIndex >= 0 ) {
    students.remove(students[removeIndex])
  }


  for (student in students) {
    println("name: ${student.name}, age: ${student.age}, roll: ${student.roll}")
  }
} 