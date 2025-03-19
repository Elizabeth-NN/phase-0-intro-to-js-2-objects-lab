let employee={
    name:"brian",
    streetAddress:"nairobi"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    return {
        ...employee, // Spread the existing employee properties
        [key]: value, // Add/update the new key-value pair
      };
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");

console.log(updatedEmployee);
// Output: { name: "John Doe", streetAddress: "123 Main St", position: "Manager" }

console.log(employee);
// Output: { name: "John Doe", streetAddress: "123 Main St" } (original object remains unchanged)

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){

    employee[key]=value
    return employee
    

}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "department", "Engineering");
console.log(employee); // { name: "John Doe", streetAddress: "123 Main St", position: "Manager", department: "Engineering" } (mutated)

// doent mutate the original employee object
function deleteFromEmployeeByKey(employee,key){
    const { [key]: deletedKey, ...newEmployee } = employee;
    return newEmployee;
}
const newEmployee = deleteFromEmployeeByKey(employee, "streetAddress");

console.log(newEmployee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Mutate the original employee object by deleting the specified key
    delete employee[key];
    // Return the mutated object
    return employee;
  }

destructivelyDeleteFromEmployeeByKey(employee, "department");

console.log(employee);



