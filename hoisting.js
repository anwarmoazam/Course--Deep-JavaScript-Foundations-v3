console.log("Hoisting");

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

function getStudentById(studentId){
    return studentRecords.find(matchId);

    function matchId(record){
        return (record.id == studentId);
    }
}

console.log(getStudentById(867));

function printRecords(recordIds){
    var records = recordIds.map(getStudentById);

    records.sort(sortByNameAsc);

    records.forEach(printRecord);
}

function printRecord(record){
    console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
}


function sortByNameAsc(record1,record2){
    if(record1.name < record2.name){
        return -1;
    } else if(record1.name > record2.name){
        return 1;
    } else{
        return 0;
    }
}

console.log(printRecords(currentEnrollment));

function paidStudentsToEnroll(){
    var idsToEnroll = studentRecords.filter(needsToEnroll)
    .map(getStudentId);

    return [...currentEnrollment, ...idsToEnroll];
}

function needsToEnroll(record){
    return (record.paid && !currentEnrollment.includes(record.id));
}

function getStudentId(record){
    return record.id;
}

console.log(paidStudentsToEnroll());

function remindUnpaid(recordIds){
    var unpaidIds = recordIds.filter(isUnpaid);

    printRecords(unpaidIds);
}

function isUnpaid(studentId){
    var record = getStudentById(studentId);
    return !record.paid;
}

console.log(remindUnpaid([313,410,709,105,502,664,250,375,867]));