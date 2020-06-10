/*
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/

const nextId = (ids) => {
  let array = ids.sort(function(a, b) {
    return a - b;
  });
  let lastOne = 0;
  console.log('here is ids: ' + array);
  for(let i = 0; i < array.length; i++) {
    if(array[i] === lastOne) {
      lastOne++;
      if(i === array.length - 1) {
        return lastOne + 1;
      }
      continue;
    }
    if(array[i] === lastOne - 1) {
      if(i === array.length - 1) {
        return lastOne;
      }
      continue;
    }
    if(array[i] !== lastOne) {
      return lastOne;
    }
  }
}