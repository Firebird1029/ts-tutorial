interface Person {
	firstName: String;
	lastName: String;
}

class Student {
	fullName: String;
	constructor(public firstName: String, public middleInitial: String, public lastName: String) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

function greeter(person: Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("bob", "b", "bobo");

console.log(greeter(user));
