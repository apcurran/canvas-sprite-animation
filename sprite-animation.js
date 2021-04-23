"use strict";

/** @type {HTMLCanvasElement} */
// @ts-ignore
const canvas = document.getElementById("canvas1");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

/**
 * Dog sprite module
 * @typedef {object} dog
 * @property {HTMLImageElement} dogImg
 * 
 * @return {dog}
 */
const dogSprite = (() => {
    const dogImg = new Image();

    dogImg.src = "./images/shadow-dog.png";

    return {
        dogImg
    };
})();

/**
 * Animation loop
 */
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(50, 50, 100, 100);
    ctx.drawImage(dogSprite.dogImg, 50, 50, CANVAS_WIDTH, CANVAS_HEIGHT);

    requestAnimationFrame(animate);
}

animate();