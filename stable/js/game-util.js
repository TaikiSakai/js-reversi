const gameUtil = {};

gameUtil.sleep = function(time) {
    return new Promise(r => setTimeout(r, time));
};
