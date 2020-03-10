import {CardDeck, CardType, CONTINUE_FLAG, GeneratedCardNumber, LOSE_FLAG, PUSH_FLAG, WIN_FLAG} from "./constants";


export const range = (start, stop, step) => Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));

export const shuffle = (arr: number[]) => arr.sort(() => Math.random() - 0.5);

export const removeNumbersFromArray = (targetArr: number[], v: number[]) => {
    var what, a = v, L = a.length, ax;
    while (L > 1 && targetArr.length) {
        what = a[--L];
        while ((ax = targetArr.indexOf(what)) !== -1) {
            targetArr.splice(ax, 1);
        }
    }
    return targetArr;
};

export const calcAndUpdateScore = (house: CardType[], player: CardType[], turnCardFace: boolean = false) => {

    const addReducer = (accumulator, currentValue) => accumulator + currentValue;

    let houseHand = house.map((e) => {
        if (!e.isBack) {
            return e.value
        } else {
            return 0;
        }
    }).reduce(addReducer);


    if (turnCardFace) houseHand = reduceWithAces(house);

    const playerHand = reduceWithAces(player);

    return {
        househand: houseHand,
        playerhand: playerHand
    }
};

const checkAces = (input: CardType[]) => {
    let res = input.map((e) => {
        return e.value === 1;
    });
    return res;
};

const reduceWithAces = (input: CardType[]) => {
    const isAces = checkAces(input);
    const addReducer = (accumulator, currentValue) => accumulator + currentValue;

    if (isAces.includes(true)) {
        // map twice.
        const small = input.map((e) => e.value);

        const big = input.map((e) => {
            if (e.value === 1) return 11;
            return e.value;
        });

        if (big.reduce(addReducer) > 21) {
            return small.reduce(addReducer);
        } else {
            return big.reduce(addReducer);
        }
    }

    return input.map((e) => e.value).reduce(addReducer)
};

export const tranlateNumber2Card = (input: GeneratedCardNumber, turnCardFace: boolean = false) => {
    let {h, p} = input;

    const house = h.map(function (value, index) {
        let isBack = false;
        if (index === 0 && (!turnCardFace)) isBack = true;
        let e = CardDeck[value];
        return {
            name: e.name,
            isBack: isBack,
            value: e.value
        }
    });

    const player = p.map(function (value) {
        let e = CardDeck[value];
        return {
            name: e.name,
            isBack: false,
            value: e.value
        }
    });

    return {
        house: house,
        player: player
    }
};

export const returnScoresWithStoredStates = (state, turnCardFace = false) => {
    // // @ts-ignore
    let {house, player} = tranlateNumber2Card(state.game.cards, turnCardFace);
    // // @ts-ignore
    if (house.length && player.length) {
        let {househand, playerhand} = calcAndUpdateScore(house, player, turnCardFace);
        return [househand, playerhand];
    }
    return [0, 0];
};

export const checkWinOrNotBeforeAddCard = (househand: number, playerhand: number) => {
    console.log("house -> ", househand, " player -> ", playerhand);

    if ((playerhand === househand) && (playerhand < 21)) return PUSH_FLAG;

    if (househand > 21 && (playerhand <= 21)) return WIN_FLAG;
    if (playerhand > 21 && (househand <= 21)) return LOSE_FLAG;

    if (househand === 21) return LOSE_FLAG;
    if (playerhand === 21) return WIN_FLAG;


    if (househand < 21 && (playerhand < househand)) return LOSE_FLAG;
    if (playerhand < 21 && (househand < playerhand)) return WIN_FLAG;
    return CONTINUE_FLAG;
};
