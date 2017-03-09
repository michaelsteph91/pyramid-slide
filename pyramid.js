function renderPyramid(){
    var h = document.getElementById("slider").value;
    var a = document.getElementById("selector").value;
    drawPyramid(h,a);
}



function drawPyramid(height,char) {

    var cont = document.getElementById("pyramid");
    cont.innerText = "";
    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += ".";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += char;
        }

       textElem = document.createTextNode(rowStr);

       rowElem = document.createElement("p");
       rowElem.appendChild(textElem);

       document.getElementById("pyramid").appendChild(rowElem);
   }
}
