const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;

  if (count >= 4) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, count + 1);
}

export { queryAPI, weakMap };
