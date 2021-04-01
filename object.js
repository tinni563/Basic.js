var student = { id:121, phone:1745, name:"Abir"};
var student2 = { id:131, phone:457, name:"mahi"};
var phoneProName = "phone";

var phoneNo = student["phone"];


// update phone
student2.phone = 98765;
student2["phone"] = 456789;
student2[phoneProName] = 99922334567;


student2.cinema = "love";

console.log(phoneNo);
console.log(student2);




