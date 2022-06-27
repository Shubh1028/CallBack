console.log("person1: Shows Ticket");
console.log("person2: Shows Ticket");

const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve("popcorns"));
  const getButter = new Promise((resolve, reject) => resolve(`butter`));
  const getColdrink = new Promise((resolve,reject) => resolve(`cold drink`));


  let ticket = await promiseWifeBringingTicks;

  console.log("Husband: Cool you bring the tickets");
  console.log("Wife: I am hungry");

  let popcorn = await getPopcorn;

    console.log('Husband: I bring the popcorn now go for a movie ')
    console.log('wife: No I need butter on my popcorn also')

    let butter = await getButter;

    console.log('Husband: Now I bring the butter also can we go for a movie')
    console.log('Wife: No I need cold drink as well');

    let coldDrink = await getColdrink;

    console.log('Wife: Now go for a movie');

  return ticket;
};
preMovie().then((m) => console.log(`Person3: shows ${m}`));
console.log("person4: Shows Ticket");
console.log("person5: Shows Ticket");

// const promiseWifeBringingTicks = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('ticket')
//     },3000)
// })

// const getPopcorn = promiseWifeBringingTicks.then((t) => {
//     console.log('Husband: Cool you bring the tickets');
//     console.log('Wife: I am hungry')

//     return new Promise((resolve,reject) => resolve(`${t} popcorns`))
// })

// const getButter = getPopcorn.then((t) => {
//     console.log('Husband: now go for a movie ')
//     console.log('wife: No I need butter on my popcorn also')

//     return new Promise((resolve, reject) => resolve(`${t} butter`))
// });

// const getColdrink = getButter.then((t) => {
//     console.log('Wife: I also want cold drink');

//     return new Promise((resolve,reject) => resolve(`${t} cold drink`))
// })

// getColdrink.then((t) => console.log(t) );

// console.log('person4: Shows Ticket');
