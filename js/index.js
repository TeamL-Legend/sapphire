let inputInput = document.querySelector(`#input`);
let resultcryptNode = document.querySelector(`#resultcrypt`);
let cryptbtnNode = document.querySelector(`#cryptbtn`);

cryptbtnNode.addEventListener(`click`, function () {
    let crypt = inputInput.value
    crypt = crypt.replaceAll(`а`, `f`);
    crypt = crypt.replaceAll(`б`, `d`);
    crypt = crypt.replaceAll(`в`, `s`);
    crypt = crypt.replaceAll(`г`, `z`);
    crypt = crypt.replaceAll(`д`, `y`);
    crypt = crypt.replaceAll(`е`, `u`);
    crypt = crypt.replaceAll(`ё`, `t`);
    crypt = crypt.replaceAll(`ж`, `k`);
    crypt = crypt.replaceAll(`з`, `p`);
    crypt = crypt.replaceAll(`и`, `m`);
    crypt = crypt.replaceAll(`й`, `a`);
    crypt = crypt.replaceAll(`к`, `b`);
    crypt = crypt.replaceAll(`л`, `q`);
    crypt = crypt.replaceAll(`м`, `w`);
    crypt = crypt.replaceAll(`н`, `e`);
    crypt = crypt.replaceAll(`о`, `i`);
    crypt = crypt.replaceAll(`п`, `o`);
    crypt = crypt.replaceAll(`р`, `l`);
    crypt = crypt.replaceAll(`с`, `n`);
    crypt = crypt.replaceAll(`т`, `h`);
    crypt = crypt.replaceAll(`у`, `g`);
    crypt = crypt.replaceAll(`ф`, `j`);
    crypt = crypt.replaceAll(`х`, `t`);
    crypt = crypt.replaceAll(` `, `v`);
    resultcryptNode.innerHTML = crypt
    inputInput.value = ``;
});

let decryptbtnNode = document.querySelector(`#decryptbtn`);
decryptbtnNode.addEventListener(`click`, function () {
    let crypt = inputInput.value;
    crypt = crypt.replaceAll(`v`, ` `);
    crypt = crypt.replaceAll(`t`, `х`);
    crypt = crypt.replaceAll(`j`, `ф`);
    crypt = crypt.replaceAll(`g`, `у`);
    crypt = crypt.replaceAll(`h`, `т`);
    crypt = crypt.replaceAll(`n`, `с`);
    crypt = crypt.replaceAll(`l`, `р`);
    crypt = crypt.replaceAll(`o`, `п`);
    crypt = crypt.replaceAll(`i`, `о`);
    crypt = crypt.replaceAll(`e`, `н`);
    crypt = crypt.replaceAll(`w`, `м`);
    crypt = crypt.replaceAll(`q`, `л`);
    crypt = crypt.replaceAll(`b`, `к`);
    crypt = crypt.replaceAll(`a`, `й`);
    crypt = crypt.replaceAll(`m`, `и`);
    crypt = crypt.replaceAll(`p`, `з`);
    crypt = crypt.replaceAll(`k`, `ж`);
    crypt = crypt.replaceAll(`t`, `ё`);
    crypt = crypt.replaceAll(`u`, `е`);
    crypt = crypt.replaceAll(`y`, `д`);
    crypt = crypt.replaceAll(`z`, `г`);
    crypt = crypt.replaceAll(`s`, `в`);
    crypt = crypt.replaceAll(`d`, `б`);
    crypt = crypt.replaceAll(`f`, `а`);
    resultcryptNode.innerHTML = crypt;
    inputInput.value = ``;
});