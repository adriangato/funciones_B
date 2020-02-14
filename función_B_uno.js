// Ejercicio 1. Muestra 35.
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);


// Ejercicio 2. Muestra 8.

function a(){
    return 4;
}
console.log(a()+a());


// Ejercicio 3. Muestra 6.

function a(b){
    return b;
}
console.log(a(2)+a(4));


// Ejercicio 4. Muestra 3 y 9.

function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
    

    // Ejercicio 5. Muestra 40. En el return sale.

    function a(b){
        return b*4;
        console.log(b);
     }
     console.log(a(10));


     
     // Ejercicio 6. Muestra 4. El if no se ejecuta, y pasa al return.

     function a(b){
        if(b<10) {
            return 2;
        }
        else     {
            return 4;
        }
        console.log(b);
    }
    console.log(a(15));

    // Ejercicio 7. Primero muestra 10 y 3. Después 30.

    function a(b,c){
        return b*c;
    }
    console.log(10,3);
    console.log( a(3,10) );
    
    
    
    // Ejercicio 8. Muestra 3 y 4. No ingresa a la función.

    function a(b){
        for(var i=0; i<10; i++){
            console.log(i);
        }
        return i;
    }
    console.log(3);
    console.log(4);
    
    
    // Ejercicio 9. Primero muestra 2, 5, 8  y  11.

    function a(){
        for(var i=0; i<10; i++){
            i = i +2;
            console.log(i);
        }
    }
    a();
    


    // Ejercicio 10. Muestra 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0. ( Dos veces).

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));



// Ejercicio 11. No se ejecuta esta función.

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}


// Ejercicio 12.  No se ejecuta esta función.

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

// Ejercicio 13. Muestra 10, el valor de z.

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);


// Ejercicio 14. Muestra 15 y 10 respectivamente.
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);


// Ejercicio 15. Muestra 15 

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
