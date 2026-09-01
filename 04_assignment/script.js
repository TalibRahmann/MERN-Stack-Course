function add(a,b){
    console.log(a + b);
}

function evenOdd(a){
    if(a % 2 == 0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

function largest(a,b,c){
    if(a>b && a>c){
        console.log(a);
    } else if(b>c && b>a){
        console.log(b);
    } else if(c>a && c>b){
        console.log(c);
    } else {
        console.log("All are equal");
    }
}

function faranheit(a){
    console.log((a*9)/5+32);
}