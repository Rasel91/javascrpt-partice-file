const phones = [
    { name: 'samsung', camera: 112, storage: '120gb', price: 36000, color: 'silver' },
    { name: 'apple', camera: 120, storage: '130gb', price: 86000, color: 'silver' },
    { name: 'nokia', camera: 40, storage: '160gb', price: 26000, color: 'silver' },
    { name: 'Oppo', camera: 180, storage: '180gb', price: 16000, color: 'silver' },
    { name: 'htc', camera: 250, storage: '150gb', price: 60000, color: 'silver' }
];

function cheapestPhone(phones) {
    let cheapest = phones[0];

    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }

    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);

// =================================================
// lowest camara at phone 

function lowestCameraPhone(phones) {
    let lowest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera < lowest.camera) {
            lowest = phone;
        }
    }
    return lowest;
}

const mySelect = lowestCameraPhone(phones);
console.log(mySelect);



// ===============//shortstorstorage mobile phone 


function shortStoragephone(phones) {
      let shortstor = phones [0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if( phone.storage < shortstor.storage ){
            shortstor = phone;
        }

    }
    return shortstor;
}

const mylowstoragePhone = shortStoragephone(phones);
console.log(mylowstoragePhone);