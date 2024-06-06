const year = [1990, 1967, 2002, 2010, 2018];

//Push Method => add a data to the end
year.push(2016);
console.log(year, year.length);

//Pop Method => Delete a data from the end
year.pop(2016);
const poped = year.pop(2018);
console.log(poped);
console.log(year);

//Unshift Method => add a data in the start
year.unshift(1950);
console.log(year);

//Shift Method => remove a data from start
year.shift(1950);
console.log(year);

// indexOf => find the index of an array data
const findIndex = year.indexOf(2002);
console.log(findIndex);

// includes => find a data avaliable or not in a array
const isincludes = year.includes(1967);
console.log(isincludes);

//for Each Method => do operations with each data of an array
year.forEach((birthYear) => {
  const age = 2037 - birthYear;
  return console.log(age);
});

const bill = [100, 125, 555, 44];
let tip = [];

//practice -1

function calctip() {
  bill.forEach((bill) => {
    if (bill >= 50 && bill <= 300) {
      tip.push(bill * 0.15);
    } else {
      tip.push(bill * 0.2);
    }
  });
  return tip;
}

console.log(calctip());

//practice -2

// const bill = [100, 125, 555, 44, 1000];
// let tip = [];
let total = [];

function calctip(bill) {
  for (i = 0; i <= bill.length - 1; i++) {
    if (bill[i] >= 50 && bill[i] <= 300) {
      tip.push(bill[i] * 0.15);
      total.push(bill[i] + tip[i]);
    } else {
      tip.push(bill[i] * 0.2);
      total.push(bill[i] + tip[i]);
    }
  }
  console.log(tip);
  console.log(total);
}

calctip(bill);
