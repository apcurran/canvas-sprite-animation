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

    const spriteWidth = 575;
    const spriteHeight = 523;
    const staggerFrames = 5;

    let frameX = 0;
    let frameY = 0;
    let gameFrame = 0;

    function getFrameX() {
        return frameX;
    }

    function setFrameX(amt) {
        frameX += amt;
    }

    function resetFrameX() {
        frameX = 0;
    }

    function getFrameY() {
        return frameY;
    }

    function getGameFrame() {
        return gameFrame;
    }

    function incrementGameFrame() {
        gameFrame++;
    }

    return {
        dogImg,
        spriteWidth,
        spriteHeight,
        getFrameX,
        setFrameX,
        resetFrameX,
        getFrameY,
        getGameFrame,
        incrementGameFrame,
        staggerFrames,
    };
})();

/**
 * Animation loop
 */
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(dogSprite.dogImg, dogSprite.getFrameX() * dogSprite.spriteWidth, dogSprite.getFrameY() * dogSprite.spriteHeight, dogSprite.spriteWidth, dogSprite.spriteHeight, 0, 0, dogSprite.spriteWidth, dogSprite.spriteHeight);

    if (dogSprite.getGameFrame() % dogSprite.staggerFrames === 0) {
        if (dogSprite.getFrameX() < 6) {
            dogSprite.setFrameX(1);
        } else {
            dogSprite.resetFrameX();
        }
    }

    dogSprite.incrementGameFrame();
    requestAnimationFrame(animate);
}

animate();