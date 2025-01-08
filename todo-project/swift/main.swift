
struct Person {
    var name:String;
    var age:Int
    var roll:Int
}

var students:[Person] = []


// add new students 
students.append(Person(name: "Rezaul Karim", age: 22, roll: 1))
students.append(Person(name: "Ramjan", age: 22, roll: 2))
students.append(Person(name: "Rezaul Karim", age: 22, roll: 3))
students.append(Person(name: "Rezaul Karim", age: 22, roll: 4))

// remove
students.remove(at: 2) // remove   ny index
students.removeFirst()
students.removeLast()



// print students
for item in students {
    print("Name: \(item.name), age: \(item.age), roll: \(item.roll)")
}

