var studentRecords = [
    {id: 313, name: "Frank", paid: true, },
    {id: 410, name: "Suzy", paid: true, },
    {id: 709, name: "Brian", paid: false, },
    {id: 105, name: "Henry", paid: false, },
    {id: 502, name: "Mary", paid: true, },
    {id: 664, name: "Bob", paid: false, },
    {id: 250, name: "Peter", paid: true, },
    {id: 375, name: "Sarah", paid: true, },
    {id: 867, name: "Greg", paid: false, },
];

var currentEnrollment = [313,410,502,250,375];

var getStudentFromId = studentId =>
    studentRecords.find(record => record.id == studentId);

console.log(getStudentFromId(867));

var printRecords = recordIds =>
    recordIds.map(getStudentFromId)
    .sort(
        (record1,record2) => (record1.name < record2.name) ? -1 : (record1.name > record2.name) ? 1 : 0
    )
    .forEach(record => console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`))

console.log(printRecords(currentEnrollment));

var paidStudentsToEnroll = [
    ...currentEnrollment,
    ...(
        studentRecords.filter(
            record => record.paid && !currentEnrollment.includes(record.id)
        ).map(record => record.id)
    )
]

console.log(paidStudentsToEnroll);

var remindUnpaid = recordIds =>
    printRecords(
        recordIds.filter(
            studentId => !getStudentFromId(studentId).paid
            )
    )
    
console.log(remindUnpaid([313,410,709,105,502,664,250,375,867]));