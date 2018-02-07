const mapMe = ['pilfered', 'sooty', 'marble'];

const arrayMap = mapMe.map((x) => {
  const listItem = `<li>${x}</li>`;
  console.log('List Item', listItem);
  return listItem;
})

console.log('arrayMap', arrayMap);
