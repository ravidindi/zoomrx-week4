function removeKeyValuePair(obj, key) {
  //if key found directly delete
  if (key in obj) {
    delete obj[key];
    return obj;
  }

  //if key not found directly and it is found in nested objects delete it
  for (const prop in obj) {
    if (typeof obj[prop] === "object") {
      obj[prop] = removeKeyValuePair(obj[prop], key);
      break;
    }
  }

  //return obj if not found or after deleting
  return obj;
}

const data = {
  name: "dindi",
  age: 21,
  address: {
    city: "hyd",
  },
};
console.log(removeKeyValuePair(data, "age"));
console.log(removeKeyValuePair(data, "city"));
//doesn't throw an exception if a key is not found
console.log(removeKeyValuePair(data, "state"));
