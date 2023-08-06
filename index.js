class Student {
    constructor(lastname, firstname, year) {
      this.lastname = lastname
      this.firstname = firstname
      this.year = year
      this.evaluations = []
      this.emptyArray = Array(25).fill(undefined)
    }
    userYear = () => {
      const currentYear = new Date().getFullYear()
      return currentYear - this.year
    }
    gradePointAverage = () => {
      let gradeAverage = 0
      let i = 0
      this.evaluations.forEach((element) => {
        gradeAverage += element
        i++
      })
      return gradeAverage / i
    }
    present = () => {
      for (let i = 0; i <= this.emptyArray.length; i++) {
        if (this.emptyArray[i] === undefined && i < this.emptyArray.length) {
          this.emptyArray[i] = true
          break
        }
      }
      return this.emptyArray
    }
    absent = () => {
      for (let i = 0; i <= this.emptyArray.length; i++) {
        if (this.emptyArray[i] === undefined && i < this.emptyArray.length) {
          this.emptyArray[i] = false
          break
        }
      }
      return this.emptyArray
    }
    summary = () => {
      const averageScore = this.gradePointAverage()
      const averageAttendance =
        this.emptyArray.filter((value) => value === true).length /
        this.emptyArray.length
      if (averageScore > 90 && averageAttendance > 0.9) {
        return 'молодець'
      } else if (
        (averageScore < 90 && averageAttendance > 0.9) ||
        (averageScore > 90 && averageAttendance < 0.9)
      ) {
        return 'Добре, але можна краще'
      } else {
        return 'Редиска!'
      }
    }
  }
  
  let stud1 = new Student('Alex', 'Ka', 1988)
  stud1.evaluations = [50, 90, 80, 70, 55, 100, 85, 100]
  console.log(stud1.userYear())
  console.log(stud1.gradePointAverage())
  
  console.log(stud1.present())
  console.log(stud1.present())
  console.log(stud1.present())
  console.log(stud1.present())
  console.log(stud1.absent())
  console.log(stud1.absent())
  
  console.log(stud1.summary())
  // =================================================================
  let stud2 = new Student('Ivan', 'Mi', 2001)
  stud2.evaluations = [100, 100, 95, 98, 100]
  console.log(stud2.userYear())
  console.log(stud2.gradePointAverage())
  
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.absent())
  console.log(stud2.absent())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  console.log(stud2.present())
  
  console.log(stud2.summary())