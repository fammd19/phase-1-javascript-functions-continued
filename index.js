// code your solution here
function saturdayFun (activity='roller-skate') {
    return (`This Saturday, I want to ${activity}!`);
}

saturdayFun();

let mondayWork = function(workLocation='go to the office') {
    return (`This Monday, I will ${workLocation}.`)
}

function wrapAdjective(empathic) {
    return function (adjective='special') {
        return `You are ${empathic}${adjective}${empathic}!`;
    };
}

console.log(wrapAdjective("%")("a dedicated programmer"));
