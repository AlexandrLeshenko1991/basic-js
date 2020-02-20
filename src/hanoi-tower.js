module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    const turnSpeedInSeconds = turnsSpeed / 3600;
    const turns = 2 ** disksNumber -1;
    return {turns: turns , seconds: turns / turnSpeedInSeconds}
}