var recipes = new Object({})

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]:  value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = Object.assign({}, object);
  delete obj[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
