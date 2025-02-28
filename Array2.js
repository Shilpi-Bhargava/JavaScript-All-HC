const marvel_heros = [ 'thor', 'ironman', 'spiderman']
const dc_heros = ["superman", "Flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const All_hero= marvel_heros.concat(dc_heros)
// console.log(All_hero)

const all_new_heros = [...marvel_heros, ...dc_heros]// spread obprator
console.log(all_new_heros)


console.log(Array.isArray("array"))
console.log(Array.from("array"))
console.log(Array.from({name: "array"}))// for interview perspective
