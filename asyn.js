// console.log('person1:shows ticket');
// console.log('person2:shows ticket');

// // const promiseWifeBringingTickets = new Promise((reslove, reject) => {
// //     setTimeout(() => {
// //         reslove('ticket');
// // //     }, 3000)
// // });

// // promiseWifeBringingTickets.then((t) => {
// //     console.log('person3:shows ticket');
// // });

// // const getPopcorn = promiseWifeBringingTickets.then((t) => {
// //     console.log('wife:i have tickets');
// //     console.log('husband:we should go in');
// //     console.log('wife:no i am hungry');
// //     return new Promise((resolve, reject) => resolve(`${t} popcorn`));
// // });

// // const getButter = getPopcorn.then((t) => {
// //     console.log('husband: i got some popcorn');
// //     console.log('husband: we should go in ');
// //     console.log('wife:i need butter on my popcorn');
// //     return new Promise((resolve, reject) => resolve(`${t} butter`));
// // })

// // getButter.then((t) => console.log(t));



// const preMovie = async() => {
//     const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('ticket'), 3000);
//     });
//     const getPopcorn = new Promise((resolve, reject) => resolve(` popcorn`));
//     //const addButter = new Promise((resolve, reject) => resolve(` butter`));

//     const getCandy = new Promise((resolve, reject) => resolve(` candy`));

//     const getCoolDrinks = new Promise((resolve, reject) => resolve(` cooldrinks`));

//     let ticket = await promiseWifeBringingTickets;
//     let [popcorn,candy,cooldrinks] =await promise.all[getPopcorn,getCandy,getCoolDrinks];

//     console.log(`${popcorn},${candy},${cooldrinks}`);


//     // console.log(`wife:i have ${ticket}`);
//     // console.log('husband:lets go in');
//     // console.log('wife:no i am hungry');

//     // let popcorn = await getPopcorn;
//     // console.log(`husband:i have ${popcorn}`);
//     // console.log('wife:i want butter on the popcorn');

//     // let butter = await addButter;
//     // console.log(`husand: i had ${butter} on the popcorn`);
//     // console.log('husband:anything else');


//     return ticket;
// }

// preMovie().then((m) => console.log(`person3:shows ${m}`));

// console.log('person4:shows ticket');
// console.log('person5:shows ticket');




console.log('post1:create post1');

console.log('post2:create post2');
const prePost = async() => {
    const promiseCreatepost = new Promise((resolve, reject) => {
        setTimeout(() => resolve('post'));
    }, 2000);

    let post = await promiseCreatepost();
    console.log('post');
    return post;
}

console.log('post4:this is post 4');