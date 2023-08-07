const numberOfEmployeesWhoMetTarget = (hours, target) => {
    const result = hours.filter((n) => n >= target)
    return result.length 
};

console.log(numberOfEmployeesWhoMetTarget([0,1,2,3,4], 2));