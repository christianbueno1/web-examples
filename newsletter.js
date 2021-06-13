let re = /hel*o/g;  //literal notaion, RegExp object
// global flag g, returns all
// default only the first
// match(regexp object)
// it is implicitly converted
const matches = 'helllo@slackheo.gobhelo.comhelobyeyuhellokikohelllloyumalay'.match(re);
console.log(matches +' '+ matches.length, typeof matches);
console.log('hello 5');