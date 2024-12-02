
        let currentFontSize = 40; 

        function laki() {
            currentFontSize += 5;
            document.getElementById("lumiliit").style.fontSize = currentFontSize + "px";
        }

        function liit() {
            if (currentFontSize > 10) { 
                currentFontSize -= 5;
                document.getElementById("lumiliit").style.fontSize = currentFontSize + "px";
            }
        }