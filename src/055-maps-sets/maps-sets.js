
// Return a map with 3 entries
// 614 -> 'Ohio'
// 303 -> 'Colorado'
// 209 -> 'California'
const areaCodeToCity = () => {
  const m = new Map();
  return m.set(614, 'Ohio')
    .set(303, 'Colorado')
    .set(209, 'California');
};

// You will be passed 'n' number of two-item
// tuples, like so [1, 'ek']
// Return a map with those as the individual entries
const mapFromIterable = (...keyValuePairs) => new Map(...keyValuePairs);

// Given a map m, and a key and value, this should RETURN A NEW
// MAP with ALL the keys (including the new one)
// ONLY if the map does NOT have supplied key.
// Else just return a new Map constructed from m
const addToMap = (m, key, value) => {
  if (key && !m.has(key)) {
    return new Map([
      ...m.entries(),
      [key, value],
    ]);
  }
  return new Map(m);
};

// Return a new Set with 3 entries
// with the first three letters of the alphabet
const alphabet = () => {
  const s = new Set();
  return s.add('A').add('B').add('C');
};

// You will be passed 'n' items.
// Return a set with those as the individual entries
const setFromIterable = (...args) => new Set([...args]);

// Given a set s, and a key, this should RETURN A NEW
// MAP with ALL the keys (including the new one)
// ONLY if the map does not have supplied key.
// Else just return a new Map constructed from m
const addToSet = (s, key) => {
  if (key) {
    return new Set(s).add(key);
  }
  return new Set(s);
};

export {
  areaCodeToCity,
  mapFromIterable,
  addToMap,
  alphabet,
  setFromIterable,
  addToSet,
};
