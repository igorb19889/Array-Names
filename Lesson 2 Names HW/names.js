

// 1. print them using a loop in console
    // HW1: modify this loop
    // so it prints all names besides FIRST and LAST

    //HW2: modify this loop
    // so it outputs names -> html <ol> list
// for( let i=1; i<4; i++) {

//       console.log(names[i])

//  }

// // 2. check name in list
//     let nameToFind = prompt("Name to Find")
//     for( let i=0; i<5;i++) {
//         if( names[i] == nameToFind){
//         console.log(`${nameToFind} FOUND!`)
//         }
//     }

let names = [
    "John Doe",
    "Marry Poppins",
    "Pete Cork",
    "Jake Solomon",
    "Vasilii Sviatoi",
]


let ul = `<ul>`
//--------------------1------------------------->

    for( let i = 1; i<=3; i++) {
        let names_ul = ``

        if ( i == 1 ) {
            names_ul = `<ul>`

        for( let i = 0; i<=1; i++ ) {
            names_ul += ` <li>${names[i]}</li> `
        }
            names_ul += `</ul>` 
        }


        //-------------------2-------------------->

        if ( i == 2) {
            names_ul = `<ul>`
        for ( let i = 2; i <=3; i++ ) {
            
            names_ul += ` <li>${names[i]}</li> `
        }
        names_ul += `</ul>`
    }
       //------------------------3---------------->

if ( i == 3) {
            names_ul = `<ul>`
        for ( let i = 4; i <= 4; i++ ) {
            
            names_ul += ` <li>${names[i]}</li> `
        }
        names_ul += `</ul>`
    }
        ul += `<li>Names_${i}${names_ul}</li>`
    }

    ul += `</ul>`

    container.innerHTML = ul