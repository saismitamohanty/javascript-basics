let getEmployeeIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2,3,4,6,7])
    }, 5000)
});
let getEmployeeObject = (employeeId) => {
    return new Promise((resolve, reject) => {
        setTimeout((id)=> {
            const employee = {
                id: id,
                name: 'Bruno',
                role: 'UI Engineer'
            }
            resolve(employee)
        }, 2500, employeeId)
    })
}
async function getEmployee(){
    console.log("Inside getEmployee")
    const ids = await getEmployeeIds;
    console.log(ids);
    const employee = await getEmployeeObject(ids[1]);
    console.log(employee);
    return employee;
}
getEmployee().then( employee => {
    console.log(employee);
});