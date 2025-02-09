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

for(const [key, value] of map){
    console.log(key, ':-', value)
}/* output is==In :- India
USA :- USA
Fr :- France
Sh :- Shilpi
*/
