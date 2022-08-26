const users = [{ id: 1, name: 'Ruhi', age: 22, job: 'doctor' }];
// console.log(users);
// console.log(users[0].id);



const data = {
    count: 5000,
    data: [
        { id: 1, name: 'rahi', job: 'leader' },
        { id: 2, name: 'rohan', job: 'leader' }
    ]
}

const firstJobs = data.data[0].job;
// console.log(firstJobs);

const user = {
    id: 2001,
    address: {
        street: {
            first: 'Road 1 Meherpur StudamPara',
            second:'Road2 MujibNagar '
        },
        postOffice: 'Meherpur',
        division:'khulna'


        
    }

}
   
console.log(user.address.street.first);
console.log(user.address.division);
    

