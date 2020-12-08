//Dit script heeft scope errors
//Los alle errors op door enkel het type van de variabelen te veranderen

const c = 0;
const d = 0;
function test(){
    c += 5;
    
    if(true){
        let d = 100;
        let e = 0;
        d += 8;     
        console.log("d : " + d);
    }
    d += 5;
    e += 10;
    console.log("d : " + d);
}

test();