class Person {
  String name;
  int age;
  int roll;
  Person(this.name, this.age, this.roll);
}

void main() {
  List<Person> students  = [];


  // add students 
  students.add(Person("Rezaul Karim", 22, 1));
  students.add(Person("Ramjan Ali", 22, 2));
  students.add(Person("Kamal Mia", 22, 3));
  students.add(Person("Janmal Uddin", 22, 4));

  // update all 
  students.forEach((it)=> it.roll+=1);

  // update specific student
  final int index = students.indexWhere((it)=>it.name == "Ramjan Ali");
  if(index >= 0) {
    students[index].name = "Ramjan Ali 2";
  }
  
  // update specific student
  final int removeIndex = students.indexWhere((it)=>it.name == "Kamal Mia");
  if(index >= 0) {
    students.remove(students[removeIndex]);
  }


  // PRINT
  for (var student in students) {
    print("name: ${student.name}, age: ${student.age}, roll: ${student.roll}");
  }
}