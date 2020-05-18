const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let arry = [];
  for (let veggie of vegetables){
    arry.push(veggie[metric]);
  }
  let max = Math.max(...arry);
  console.log(max)
  let indx = arry.findIndex(veg => veg === max);
  console.log(indx)
  return (vegetables[indx])["submitter"]
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)