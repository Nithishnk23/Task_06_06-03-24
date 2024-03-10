//3.Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("Nithish", "kumar",21, "CSE", "knithish389@gmail.com", 8189824428, "theni");
let person2 = new Person("mugesh","dr", 22, "CSE", "drmugesh07@gmail.com", 8825017992, "chennai");

console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());