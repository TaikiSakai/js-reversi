
const gameCanvas = {};


gameCanvas.genCanvas = function(w, h) {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const context = canvas.getContext('2d');
    return { canvas, context, w, h };
};

gameCanvas.addCanvas = function(selector, w, h) {
    const cobj = this.genCanvas(w, h);
    const element = document.querySelector(selector);
    element.append(cobj.canvas);
    return cobj;
};

gameCanvas.addBgCanvas = function(selector, w, h) {
    const cobj = this.addCanvas(selector, w, h);
    cobj.canvas.style.background = 'url(image/bg.png)';
    return cobj;
}