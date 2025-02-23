document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("player");
    const doll = document.getElementById("doll");
    const statusText = document.getElementById("status");
    const obstacles = document.querySelectorAll(".obstacle");

    let playerX = 130;
    let playerY = 360;
    let isRedLight = false;
    let light;

    function changeLight() {
        isRedLight = Math.random() > 0.5; // 50% chance of red or green
        if (isRedLight) {
            
            doll.textContent = "Red";
            doll.style.backgroundColor = "black";
            doll.style.textShadow = "1px 1px 10px #FF3131,2px 2px 15px #FF3131,3px 3px 20px #FF3131";
            doll.style.boxShadow = "1px 1px 10px #FF3131,2px 2px 15px #FF3131,3px 3px 20px #FF3131,4px 4px 25px #FF3131";
        } else {
            doll.textContent = "Green";
            doll.style.backgroundColor = "black";
            doll.style.textShadow = "1px 1px 10px #39FF14,2px 2px 15px #39FF14,3px 3px 20px #39FF14";
            doll.style.boxShadow = "1px 1px 10px #39FF14,2px 2px 15px #39FF14,3px 3px 20px #39FF14,4px 4px 25px #39FF14";
        }
    }

    function checkCollision(x, y) {
        for (let obs of obstacles) {
            let obsX = obs.offsetLeft;
            let obsY = obs.offsetTop;
            if (x >= obsX && x <= obsX + 40 && y >= obsY && y <= obsY + 40) {
                return true; // Collision detected
            }
        }
        return false;
    }

    function movePlayer(dx, dy) {
        if (statusText.textContent.includes("Eliminated") || statusText.textContent.includes("Qualified")) 
        {
            return;
        }

        let newX = playerX + dx;
        let newY = playerY + dy;

        if (newX < 0 || newX > 260 || newY < 0 || newY > 360) 
        {
            return; 
        }

        if (checkCollision(newX, newY)) 
        {
            return;
        }

        if (isRedLight) {
            statusText.textContent = "Eliminated!";
            clearInterval(light);
            return;
        }

        playerX = newX;
        playerY = newY;
        player.style.left = `${playerX}px`;
        player.style.top = `${playerY}px`;

        if (playerY <= 10) {
            statusText.textContent = "Qualified!";
            clearInterval(light);
        }
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") movePlayer(0, -20);
        if (event.key === "ArrowDown") movePlayer(0, 20);
        if (event.key === "ArrowLeft") movePlayer(-20, 0);
        if (event.key === "ArrowRight") movePlayer(20, 0);
    });

    light = setInterval(changeLight, 2000); // Change light every 2 seconds
});
