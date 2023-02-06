function nbDig(n, d) {
    let sum = 0;
    let i = 0;
    while (i <= n) {
        let k = ((i * i) + '').split('');
        for (let i = 0; i < k.length; i++) {
            d === +(k[i]) ? sum++ : null;
        }
        i++;

    }
    return sum;
}