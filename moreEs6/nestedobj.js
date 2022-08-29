// show the video chain.js
// 31-2 Access Value, nested object Optional chaining


// 1.First Example 
const nestedobject = {

    id: 205,

    student: {
        id: 208,
        data: {
            name: 'Ruhi',
            age: 7,
            location: 'Dhaka',
            school: 'Oxford Gg',

            subjects: {
                math: 29,
                english: 69,
                physic: 78,
            }

        }



    }

}

console.log(nestedobject.student?.data?.subjects?.physic);

// =================another Example
const info = {
    count: 2502,
    data: [
        { id: 250, name: 'jamal', job: 'designer' },
        { id: 255, name: 'kamal', job: 'Webdesigner' },
    ]
}

const result = info;
console.log(result.data[1].job);