let ids = [];
        for (let i = 0; i < 25; i++) {
            ids[i] = "location" + i
        }
        var checkCount = 0;
        var penalty = 0;
        var lastCheck = 0;
        var treasureLocation = 5;
        var trapLocation = 18;
        var gameOver = false;
        function check(position) {
            if (gameOver) return;
            const id = ids[position];
            const image = document.getElementById(id);
            if (position === treasureLocation) {
                image.src = "treasure.jpg";
                gameOver = true;
                penalty -= 3;
                checkCount++;
            } else if (position === trapLocation) {
                image.src = "Trap.jpg";
                gameOver = true;
                penalty += 4;
                checkCount++;
            } else {
                image.src = "pirate.jpg";
                checkCount++;
                penalty++;
            }

            document.getElementById("locations").textContent = "Number of locations checked is " + checkCount;
            document.getElementById("penalty").textContent = "Penalty is " + penalty;
            lastCheck = position;
        }

        function help() {
            var treasureRow = Math.floor(treasureLocation / 5);
            var treasureCol = treasureLocation % 5;
            var lastRow = Math.floor(lastCheck / 5);
            var lastCol = lastCheck % 5;
            var rowDiff = Math.abs(treasureRow - lastRow);
            var colDiff = Math.abs(treasureCol - lastCol);
            if (rowDiff + colDiff === 1) {
                return "Can smell it";
            } else if (rowDiff + colDiff === 2) {
                return "Close Matie";
            } else {
                return "Step faster";
            }
            penalty += 2;
            document.getElementById("penalty").textContent = "Penalty is : " + penalty;
            document.getElementById("help").textContent = "Help ";
        }
        function showHelp() {
            document.getElementById("help").textContent = help();
        }
        function newGame() {
            checkCount = 0;
            penalty = 0;
            lastCheck = 0;
            gameOver = false;

            treasureLocation = Math.floor(Math.random() * 25);
            do {
                trapLocation = Math.floor(Math.random() * 25);
            } while (trapLocation === treasureLocation);

            document.getElementById("locations").textContent = "Number of locations checked is : " + checkCount;
            document.getElementById("penalty").textContent = "Penalty is : " + penalty;
            document.getElementById("help").textContent = "Help report";

            for (var i = 0; i < 25; i++) {
                document.getElementById(ids[i]).src = "treasure_location.jpg"
            }
        }