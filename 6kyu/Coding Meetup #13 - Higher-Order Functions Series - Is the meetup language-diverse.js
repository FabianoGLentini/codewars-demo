// You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

// Your task is to return either:

// true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
//   { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
// ];
// your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

//First Pass

function isLanguageDiverse(list) {
    
    //var isolating dev lang
    const langArr = list.map(dev => dev.language)
    
    //create an obj containing the lang and the ammount of times it appears, using reduce()
    const lang = langArr.reduce((obj,item) => {
        obj[item] = obj[item] +1 || 1
      return obj
      },{})
    
    //find least populated language from lang obj
    const min = Math.min(... Object.values(lang))
    
    //go through this list of obj using every() to insure no lang count goes beyond the dev lang threshold we have found
    return Object.values(lang).every(el => el <= min*2)
}

  //Refractor
  
function isLanguageDiverse(list) {
    const langArr = list.map(dev => dev.language)

    const lang = langArr.reduce((obj,item) => {
        obj[item] = obj[item] +1 || 1
      return obj
      },{})
    
    const min = Math.min(... Object.values(lang))
    
    
    return Object.values(lang).every(el => el <= min*2)
}

//Code Wars Refractro

function isLanguageDiverse(list) {
    list = list.map(dev => dev.language);
    const num = [...new Set(list)].map(el => list.filter(e => e === el).length);
    return Math.max(...num) / Math.min(...num) <= 2;
  }