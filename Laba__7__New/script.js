const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function firstPayer(rect1) {
    ctx.beginPath();
    ctx.rect(rect1.x, rect1.y, rect1.width, rect1.height);
    ctx.fillStyle = rect1.color;
    ctx.fill();
}

function secondPayer(rect1) {
    ctx.beginPath();
    ctx.rect(rect2.x, rect2.y, rect2.width, rect2.height);
    ctx.fillStyle = rect2.color;
    ctx.fill();
}

let rect1 = {
    x: 50,
    y: 420,
    width: 50,
    height: 50,
    color: 'blue',
    dx: 10,
    dy: 10
}

let rect2 = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    color: 'red',
    dx: 10,
    dy: 10
}

let ammo1 = {
    x: rect1.x,
    y: rect1.y,
    width: 10,
    height: 20,
    color: 'green',
    dy: rect1.dy * 2
}

let ammo2 = {
    x: rect2.x,
    y: rect2.y,
    width: 10,
    height: 20,
    color: 'purple',
    dy: rect2.dy * 2
}

function drawAmmoFirst(ammo) {
    ctx.beginPath();
    ctx.rect(ammo1.x, ammo1.y, ammo1.width, ammo1.height);
    ctx.fillStyle = ammo1.color;
    ctx.fill();
}

function drawAmmoSecond(ammo) {
    ctx.beginPath();
    ctx.rect(ammo2.x, ammo2.y, ammo2.width, ammo2.height);
    ctx.fillStyle = ammo2.color;
    ctx.fill();
}

const pressed = {}

document.addEventListener('keydown', function (event) {
    pressed[event.code] = true;
})

document.addEventListener('keyup', function (event) {
    pressed[event.code] = false;
})

function checkRectsCollisionFirst(ammo1, rect2) {
    return ammo1.x < rect2.x + rect2.width &&
        ammo1.x + rect2.width > rect2.x &&
        ammo1.y < rect2.y + rect2.height &&
        ammo1.height + ammo1.y > rect2.y
}

function checkRectsCollisionSecond(ammo2, rect1) {
    return ammo2.x < rect1.x + rect1.width &&
        ammo2.x + rect1.width > rect1.x &&
        ammo2.y < rect1.y + rect1.height &&
        ammo2.height + ammo2.y > rect1.y
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    firstPayer(rect1);
    drawAmmoFirst(ammo1);
    secondPayer(rect2);
    drawAmmoSecond(ammo2);
    if (checkRectsCollisionFirst(ammo1, rect2)) {
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = rect1.color;
        ctx.fill();
        location.reload();
    }
    if (checkRectsCollisionSecond(ammo2, rect1)) {
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = rect2.color;
        ctx.fill();
        location.reload();
    }

    //второй игрок
    if (pressed['KeyD']) {
        if (
            (rect2.x + rect2.width >= canvas.width)

        ) {
            rect2.x = rect2.x + 0;
            if (!pressed['Space']) {
                ammo2.x = rect2.x + (rect2.width / 2);
                ammo2.y = rect2.y + (rect2.width / 2);
            }
        } else {
            rect2.x = rect2.x + rect2.dx;
            if (!pressed['Space']) {
                ammo2.x = rect2.x + (rect2.width / 2);
                ammo2.y = rect2.y + (rect2.width / 2);
            }
        }
    }
    if (pressed['KeyA']) {
        if ((rect2.x <= 0)) {
            rect2.x = rect2.x + 0;
            if (!pressed['Space']) {
                ammo2.x = rect2.x + (rect2.width / 2);
                ammo2.y = rect2.y + (rect2.width / 2);
            }
        } else {
            rect2.x = rect2.x - rect2.dx;
            if (!pressed['Space']) {
                ammo2.x = rect2.x + (rect2.width / 2);
                ammo2.y = rect2.y + (rect2.width / 2);
            }
        }
    }
    if (pressed['KeyS']) {
        if (rect2.y + rect2.height >= canvas.height / 2) {
            rect2.y = rect2.y + 0;
            if (!pressed['Space']) {
                ammo2.y = rect2.y + (rect2.width / 2);
            }
        } else {
            rect2.y = rect2.y + rect2.dy;
            if (!pressed['Space']) {
                ammo2.y = rect2.y + (rect2.width / 2);
            }
        }
    }
    if (pressed['KeyW']) {
        if (rect2.y <= 0) {
            rect2.y = rect2.y + 0;
            if (!pressed['Space']) {
                ammo2.y = rect2.y + (rect2.width / 2);
            }
        } else {
            rect2.y = rect2.y - rect2.dy;
            if (!pressed['Space']) {
                ammo2.y = rect2.y + (rect2.width / 2);
            }
        }
    }
    if (pressed['Space']) {
        ammo2.y = ammo2.y + ammo2.dy;
    }


    //первый игрок
    if (pressed['ArrowRight']) {
        if (
            (rect1.x + rect1.width >= canvas.width)

        ) {
            rect1.x = rect1.x + 0;
            if (!pressed['NumpadEnter']) {
                ammo1.x = rect1.x + (rect1.width / 2);
                ammo1.y = rect1.y + (rect1.width / 2);
            }
        } else {
            rect1.x = rect1.x + rect1.dx;
            if (!pressed['NumpadEnter']) {
                ammo1.x = rect1.x + (rect1.width / 2);
                ammo1.y = rect1.y + (rect1.width / 2);
            }
        }
    }
    if (pressed['ArrowLeft']) {
        if ((rect1.x <= 0)) {
            rect1.x = rect1.x + 0;
            if (!pressed['NumpadEnter']) {
                ammo1.x = rect1.x + (rect1.width / 2);
                ammo1.y = rect1.y + (rect1.width / 2);
            }
        } else {
            rect1.x = rect1.x - rect1.dx;
            if (!pressed['NumpadEnter']) {
                ammo1.x = rect1.x + (rect1.width / 2);
                ammo1.y = rect1.y + (rect1.width / 2);
            }
        }
    }
    if (pressed['ArrowDown']) {
        if (rect1.y + rect1.height >= canvas.height) {
            rect1.y = rect1.y + 0;
            if (!pressed['NumpadEnter']) {
                ammo1.y = rect1.y + (rect1.width / 2);
            }
        } else {
            rect1.y = rect1.y + rect1.dy;
            if (!pressed['NumpadEnter']) {
                ammo1.y = rect1.y + (rect1.width / 2);
            }
        }
    }
    if (pressed['ArrowUp']) {
        if (rect1.y <= canvas.height / 2) {
            rect1.y = rect1.y + 0;
            if (!pressed['NumpadEnter']) {
                ammo1.y = rect1.y + (rect1.width / 2);
            }
        } else {
            rect1.y = rect1.y - rect1.dy;
            if (!pressed['NumpadEnter']) {
                ammo1.y = rect1.y + (rect1.width / 2);
            }
        }
    }
    if (pressed['NumpadEnter']) {
        ammo1.y = ammo1.y - ammo1.dy;
    }


    window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render);
