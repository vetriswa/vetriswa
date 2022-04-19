// class Student {
//     constructor(name, age, marks) {
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
//     setPlacementAge(minPlacementAge) {
//         console.log(this);
//         return (minMarks) => {
//             console.log('inside eligibleForCurrentCompany', this)
//             if (this.marks > minMarks) {
//                 console.log(this.name + "is ready for placement")

//             } else {
//                 console.log(this.name + "is not ready for placement")
//             }
//         }
//     }
// }
// const vetri = new Student('vetri', 29, 78);
// const swathi = new Student('swathi', 28, 90);
// vetri.setPlacementAge(18)(40);
// swathi.setPlacementAge(18)(40);





let product = (a, b) => {
    let result = a * b;
    return result;
}

let result1 = product(5, 7);
console.log(result1);