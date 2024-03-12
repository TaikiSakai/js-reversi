
// document.addEventListener('DOMContentLoaded', async function() {
//     let cobj = gameCanvas.addBgCanvas('#target', 1200, 800);

//     cobj.context.fillStyle = '#002040';
//     cobj.context.fillRect(100, 50, 600, 400);

//     await gameUtil.sleep(1000);
//     cobj.context.clearRect(0, 0, cobj.w, cobj.h);
//     cobj.context.fillStyle = '#004060';
//     cobj.context.fillRect(200, 200, 600, 400);

//     await gameUtil.sleep(1000);
//     cobj.context.clearRect(0, 0, cobj.w, cobj.h);
//     cobj.context.fillStyle = '#006080';
//     cobj.context.fillRect(500, 350, 600, 400);

// });




// const load = function(url) {
//     return new Promise(resolve => {
//         const image = new Image(); 
//         image.onload = () => { 
//             resolve(image);
//         }
//         image.src = url;
//     });
// }

// document.addEventListener('DOMContnetLoaded', async function() {
//     let cobj = gameCanvas.addBgCanvas('#target', 1200, 800);

//     let image0 = await load('image/token0.png');
//     let image2 = await load('image/token1.png');

//     cobj.context.drawImage(image0, 0, 0);
//     cobj.context.drawImage(image2, 150, 0);
// }); 


let holder = {};

const load = function(id, url) {
    return new Promise(resolve => {
        const image = new Image();
        image.onload = resolve;
        image.src = url;
        holder[id] = image;
    });
};


document.addEventListener('DOMContentLoaded', async function() {
    let cobj = gameCanvas.addBgCanvas('#target', 1200, 800);

    let promiseArray = [];
    promiseArray.push(resImage.load('token0', 'image/token0.png'));
    promiseArray.push(resImage.load('token1', 'image/token1.png'));
    promiseArray.push(resImage.load('square', 'image/square.png'));

    await Promise.all(promiseArray);

    resImage.draw('token0', cobj, 0, 0, 400, 400);
    resImage.draw('token1', cobj, 300, 0, 400, 400);
    resImage.draw('square', cobj, 600, 0, 400, 400);


});