var personName = "Global: sai";
{
    let personName = "Philip"
    let personMarks = 10;
    personMarks = personMarks + 20;
    const personBloodGroup = 'A+';
    console.log("Inside block");
    console.log("Scoped Name: ", personName);
    console.log("Scoped Marks: ", personMarks);
    console.log("Scoped BloodGroup: ", personBloodGroup);
}
// console.log("Global BloodGroup: ", personBloodGroup);
console.log("Global ", personName);
function printName() {
    console.log("Inside function ", personName);
}
printName();