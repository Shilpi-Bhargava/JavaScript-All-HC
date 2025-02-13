const map = new Map()
map.set("In", "India")
map.set("USA", "USA")
map.set("Fr", "France")
map.set("Sh", "Shilpi")
console.log(map)
/* output is:  Map(4) {
  'In' => 'India',
  'USA' => 'USA',
  'Fr' => 'France',
  'Sh' => 'Shilpi'
}*/

for(const [key, value] of map){//hold alagh alag value
    console.log(key, ':-', value)
}/* output is==In :- India
USA :- USA
Fr :- France
Sh :- Shilpi
*/

const = myObject = {
  'game1': 'NFS',
  'game2': 'SpiderMan'
}

// for(const {ket, value] of myObjects){
//   console.log(key, value)    noy allowed object iteration via map
