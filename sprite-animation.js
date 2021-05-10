"use strict";

let playerState = "sit";
const dropDown = document.getElementById("animations");

dropDown.addEventListener("change", (event) => {
    playerState = event.target.value;
})

/** @type {HTMLCanvasElement} */
// @ts-ignore
const canvas = document.getElementById("canvas1");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImg = new Image();
playerImg.src = './images/shadow-dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

let gameFrame = 0;
const staggerFrames = 5;
let spriteAnimations = [];
let animationStates = [
    {
        name: "idle",
        frames: 7
    },
    {
        name: "jump",
        frames: 7
    },
    {
        name: "fall",
        frames: 7
    },
    {
        name: "run",
        frames: 9
    },
    {
        name: "dizzy",
        frames: 11
    },
    {
        name: "sit",
        frames: 5
    },
    {
        name: "roll",
        frames: 7
    },
    {
        name: "bite",
        frames: 7
    },
    {
        name: "ko",
        frames: 12
    },
    {
        name: "getHit",
        frames: 4
    },
];

animationStates.forEach((state, index) => {
    let frames = {
        location: []
    };

    for (let j = 0; j < state.frames; j++) {
        const positionX = j * spriteWidth;
        const positionY = index * spriteHeight;

        frames.location.push({ x: positionX, y: positionY });
    }

    spriteAnimations[state.name] = frames;
});

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].location.length;
    const frameX = spriteWidth * position;
    const frameY = spriteAnimations[playerState].location[position].y;

    ctx.drawImage(playerImg, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();