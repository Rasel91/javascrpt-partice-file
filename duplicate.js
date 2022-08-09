
// Duplicat an how find an arry with the function 

const names = ['abul', 'babul', 'calbul', 'ebul', 'kabul', 'gabul', 'dabul', 'babul', 'abul', 'calbul'];


function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}

const uniqueName = removeDuplicate(names);
console.log(uniqueName);