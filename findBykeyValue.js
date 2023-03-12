function findByKeyValue(obj, key, value) {
  if (obj[key] === value) {
    return obj;
  }

  for (const prop in obj) {
    if (typeof obj[prop] === "object") {
      const result = findByKeyValue(obj[prop], key, value);
      if (result !== null) {
        return result;
      }
    }
  }

  return null;
}

const data = {
  name: "dindi",
  age: 21,
  address: {
    street: "cozyhive",
    city: "bangalore",
    state: "Karnataka",
  },
  friends: [
    { name: "Suvaisnav", age: 21 },
    { name: "Kireeti", age: 22 },
  ],
};

const result = findByKeyValue(data, "name", "Suvaisnav");
const result2 = findByKeyValue(data, "age", 22);
console.log(result);
console.log(result2);
