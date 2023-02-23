class Student {
	constructor (firstName, lastName, birthYear, evaluations) {
		this.firstName = firstName
		this.lastName = lastName
		this.birthYear = birthYear
		this.evaluations = evaluations
		this.attendance = []
	}

	age () {
		return new Date().getFullYear() - this.birthYear
	}

	averageRating () {
		return +(this.evaluations.reduce((sum, num) => sum += num, 0) / this.evaluations.length).toFixed(2)
	}

	present () {
		this.attendance.length < 25 && this.attendance.push(true)
	}

	absent () {
		this.attendance.length < 25 && this.attendance.push(false)
	}

	summary () {
		const attendedRating = this.attendance.filter(el => el).length / this.attendance.length

		if (this.averageRating() >= 90 && attendedRating >= 0.9) {
			return 'Молодець!'
		} else if (this.averageRating() >= 90 || attendedRating >= 0.9){
			return 'Добре, але можна краще'
		} return 'Редиска!'
	}

}

const student1 = new Student('Vlad', 'Kolov', 1999, [88, 100, 60])

console.log(student1);
console.log(student1.age());
console.log(student1.averageRating());
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
console.log(student1.summary());


const student2 = new Student('Alex', 'Denet', 1979, [100, 100, 90])

console.log(student2);
console.log(student2.age());
console.log(student2.averageRating());
student2.present();
student2.present();
student2.present();
student2.present();
console.log(student2.summary());


const student3 = new Student('Jon', 'Sushok', 2004, [10, 40, 60])

console.log(student3);
console.log(student3.age());
console.log(student3.averageRating());
student3.absent();
student3.absent();
student3.present();
student3.present();
console.log(student3.summary());
