export default function groceriesList() {
  const groceryMap = new Map();

  const groceryItems = [
    { name: 'Apples', quantity: 10 },
    { name: 'Tomatoes', quantity: 10 },
    { name: 'Pasta', quantity: 1 },
    { name: 'Rice', quantity: 1 },
    { name: 'Banana', quantity: 5 },
  ];

  groceryItems.forEach((item) => {
    const { name, quantity } = item;

    groceryMap.set(name, quantity);
  });

  return groceryMap;
}
