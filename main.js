

const func = (x1, x2) => {
    return 4*x1**2 - 4*x1*x2 + 5*x2**2 - x1 - x2;
}

const funcDx1 = (x1, x2) => {
    return 8*x1 - 4*x2 - 1;
}

const funcDx2 = (x1, x2) => {
    return -4*x1 + 10*x2 - 1;
}

const gradf = (x1, x2) => {
    return Math.sqrt(Math.pow(funcDx1(x1, x2), 2) + Math.pow(funcDx2(x1, x2), 2));
}

const gradMethod = (x1Init, x2Init, alphaInit, epsi) => {
    let k = 0;
    let alpha = alphaInit;
    let x1 = x1Init, x2 = x2Init;

    while (Math.abs(funcDx1(x1, x2)) > epsi && Math.abs(funcDx2(x1, x2)) > epsi) {
        const step = 0.005;
        let alphaMin, alphaMinFunc = 1000000000;

        for(let alphaLocal = 0; alphaLocal <= 4; alphaLocal += step) {
            let x1Local = x1Init - alphaLocal * funcDx1(x1Init, x2Init);
            let x2Local = x2Init - alphaLocal * funcDx2(x1Init, x2Init);
            

            if(alphaMinFunc > func(x1Local, x2Local)) {
                alphaMinFunc = func(x1Local, x2Local);
                alphaMin = alphaLocal;
            }
        }
        alpha = alphaMin;
        x1 = x1Init - alpha * funcDx1(x1, x2);
        x2 = x2Init - alpha * funcDx2(x1, x2);
        k++;
        x1Init = x1;
        x2Init = x2;

        // if(func(x1, x2, x3) - func(x1Init, x2Init, x3Init) <= epsi*alpha*Math.pow(gradf(x1Init, x2Init, x3Init), 2)) {

        // } else {
            
        // }
    }

    console.log(k);
    console.log(x1);
    console.log(x2);
    console.log(func(x1, x2));
}

const alpha = 2, epsi = 0.05;

gradMethod(3, 3, alpha, epsi);