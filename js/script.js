var newHtml =
    '<html>' +
    '<head>' +
        '<title>BlackJack</title>' +
        '<link rel="stylesheet" href="./blackjack/style.css">' +
        '<link rel="icon" href="assets/PNG/Cards/cardClubsJ.png" type="image/png" />' +
    '</head>' +
    '<body  onload="init()">' +
        '<canvas id="canvas" style="width:1100px; height:650px"></canvas>' +
    '</body>' +
    '</html>';

var newHtml2 = '<iframe src="./roulette/index.html"></iframe>';

var bool = ' ';
function myRoulette() {
    if(bool == ' ') {
        bool = true;
        document.getElementById('playField').insertAdjacentHTML("beforebegin", newHtml2);
    } else {
        
    }
}
function myBlackjack() {
    if(bool == ' ') {
        bool = true;
        document.getElementById('playField').insertAdjacentHTML("beforebegin", newHtml);
        init();
    } else {
        
    }
}