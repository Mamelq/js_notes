function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
// console.log(result);
// console.log(sum(1, 2));

// napisz funkcję, która zwraca 'Cześć, Janusz', przy czym Janusz to parametr

function greetings(name){
    return 'Cześć, ' + name;
}

// console.log(greetings('Janusz'));

function getDayName(day){
    return ['ndz', 'pon', 'wt'][day]
}
//console.log(getDayName(0)) //niedziela

// wylosuj 6 liczb bez powtórzeń z zakresu 1-49

function drawDigits(quantity){
    const temp = [];
    while (temp.length < quantity){
        const digit = Math.floor(Math.random() * 48 +1);
        if (!temp.includes(digit)) {
            temp.push(digit)
        }
    }

    return temp;






    function arrayIntersection(arr1, arr2) {
        const result = [];


        for (const item of arr1) {
            if (arr2.includes(item)) {
                result.push(item);
            }
        }

        return result;
    }

    const x = [42, 1, 2, 3, 4, 5]
console.log(arrayIntersection([1, 2, 3, 4], [2, 4, 11]))





}

// console.log(drawDigits([1, 3, 4, 11], [2, 4, 11]))

// function myLord() {
//     const sentences = ['Witaj mój Panie!','Co jeszcze mogę dla Ciebie zrobić','Pięknie dzisiaj wyglądasz!'];
//     return sentences[Math.round(Math.random() * sentences.length - 1)];
//
// }
// console.log(myLord())



