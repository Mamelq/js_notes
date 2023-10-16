// Redeklaracja zmiennych
// Deklaracja zmiennej to stwoerzenie jej za pomocą np. let x;

// var x1 = 42;
// var x1 = 666;
//
// let x2 = 42;
// let x2 = 666; // nie można re deklarować, błąd
//
// const x3 = 42;
// const x3 = 666; // nie można re deklarować, błąd


// Reinicjalizacja
// Przypisanie nowej wartości do istniejącej zmiennej np. x = 42;

// var x1 = 42;
// x1 = 666;
//
// let x2 = 42;
// x2 = 666;
//
// const x3 = 42;
// x3 = 666;


// Hoisting
// Przenoszenie deklaracji zmiennyych var, deklaracji funkcji nazywanych deklaracji klass
// na górę aktualnie przetwarzeanego zasięgu. TDZ - temporary dead zone (tymczasowa strefa smierci)

// Scope - zasięg
// Widoczność, dostępność identyfikatorów (nazwy zmiennych, funkcji i klass)
// - global - wszędzie jest coś dostępne
// - local - dostępne tylko w aktualnym zasięgu
// - function scope - tworzymy przez ciało fuinkcji
// - block scope - tworzony przez block, dowolna para 2 klamerek

// function doSmth (){
//     var x1 = 42;
//     let x2 = 42;
//     const x3 = 42;
// }
//
// // console.log (x1, x2, x3) są niedostępne w aktualnym scope, bo są zadeklarowane wewnątrz funkcji
//
// if (true) {
//     var x1 = 42;
//     let x2 = 42;
//     const x3 = 42;
// }
// console.log (x1);
// console.log (x1, x2, x3);


// let x = 42;
// function doSmthMagic(){
//     x = 666; //kiedy nie ma deklaracji zmiennej to szuka w zasięgu otaczającym / wyżej
//     let x = 666; //kiedy jest deklaracjam to jest tworzona nowa zmiennea, a ta wyżej nie jest używana
//     console.log(x)
// }
// doSmthMagic();
// console.log(x);
