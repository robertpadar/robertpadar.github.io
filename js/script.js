var newHtml =
    '<html>' +
    '<head>' +
        '<title>BlackJack</title>' +
        '<link rel="stylesheet" href="./blackjack/style.css">' +
        '<link rel="icon" href="assets/PNG/Cards/cardClubsJ.png" type="image/png" />' +
    '</head>' +
    '<body  onload="init()">' +
        '<canvas id="canvas" width="1100" height="650"></canvas>' +
    '</body>' +
    '</html>';

var newHtml2 = '<iframe src="./roulette/index.html"></iframe>';
    /*'<html>' +
        '<head>' +
            '<title>3D Roulette</title>' +
            '<link rel="stylesheet" href="./roulette/css/reset.css" type="text/css">' +
            '<link rel="stylesheet" href="./roulette/css/main.css" type="text/css">' +
            '<link rel="stylesheet" href="./roulette/css/orientation_utils.css" type="text/css">' +
            '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">' +
            '<meta name="viewport" content="width=device-width, initial-scale=1">' +
            '<meta name="msapplication-tap-highlight" content="no">' +
            '<script type="text/javascript" src="./roulette/js/jquery-3.2.1.min.js"></script>' +
            '<script type="text/javascript" src="./roulette/js/createjs-2015.11.26.min.js"></script>' +
            '<script type="text/javascript" src="./roulette/js/howler.min.js"></script>' +
            '<script type="text/javascript" src="js/screenfull.js"></script>' +
            '<script type="text/javascript" src="js/ctl_utils.js"></script>' +
            
        '</head>' +
        '<body ondragstart="return false;" ondrop="return false;">' +
            '<div style="position: fixed; background-color: transparent; top: 0px; left: 0px; width: 100%; height: 100%"></div>' +
            '<script>' +
                '$(document).ready(function(){' +
                    'var oMain = new CMain({' +
                                            'money: 1000,       //STARING CREDIT FOR THE USER' +
                                            'min_bet: 0.1,      //MINIMUM BET' +
                                            'max_bet: 1000,     //MAXIMUM BET' +
                                            'time_bet: 0,       //TIME TO WAIT FOR A BET IN MILLISECONDS. SET 0 IF YOU DON\'T WANT BET LIMIT' +
                                            'time_winner: 3000, //TIME FOR WINNER SHOWING IN MILLISECONDS' +
                                            'win_occurrence: 30, //Win occurrence percentage (100 = always win).' +
                                                                '//SET THIS VALUE TO -1 IF YOU WANT WIN OCCURRENCE STRICTLY RELATED TO PLAYER BET ( SEE DOCUMENTATION)' +
                                            'casino_cash:4000,    //The starting casino cash that is recharged by the money lost by the user' +
                                            'fullscreen:true,     //SET THIS TO FALSE IF YOU DON\'T WANT TO SHOW FULLSCREEN BUTTON' +
                                            'audio_enable_on_startup:false, //ENABLE/DISABLE AUDIO WHEN GAME STARTS' +
                                            'check_orientation:true, //SET TO FALSE IF YOU DON\'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES' +
                                            'show_credits:true,           //SET THIS VALUE TO FALSE IF YOU DON\'T TO SHOW CREDITS BUTTON' +
                                            'num_hand_before_ads:10  //NUMBER OF HANDS TO COMPLETE, BEFORE TRIGGERING SAVE_SCORE EVENT. USEFUL FOR INTER-LEVEL AD EVENTUALLY.' +
                                '});' +
                    '$(oMain).on("recharge", function(evt) {' +
                            '//INSERT HERE YOUR RECHARGE SCRIPT THAT RETURN MONEY TO RECHARGE' +
                            'var iMoney = 1000;' +
                            'if(s_oGame !== null){' +
                                's_oGame.setMoney(iMoney);' +
                            '}' +
                    '});' +
                    '$(oMain).on("start_session", function(evt) {' +
                            'if(getParamValue("ctl-arcade") === "true"){' +
                                'parent.__ctlArcadeStartSession();' +
                            '}' +
                            '//...ADD YOUR CODE HERE EVENTUALLY' +
                    '});' +
                    '$(oMain).on("end_session", function(evt) {' +
                            'if(getParamValue("ctl-arcade") === "true"){' +
                                'parent.__ctlArcadeEndSession();' +
                            '}' +
                            '//...ADD YOUR CODE HERE EVENTUALLY' +
                    '});' +
                    '$(oMain).on("bet_placed", function (evt, iTotBet) {' +
                        '//...ADD YOUR CODE HERE EVENTUALLY' +
                    '});' +
                    '$(oMain).on("save_score", function(evt,iMoney,iWin) {' +
                            'if(getParamValue("ctl-arcade") === "true"){' +
                               'parent.__ctlArcadeSaveScore({score:iMoney});' +
                            '}' +
                            '//...ADD YOUR CODE HERE EVENTUALLY' +
                    '});' +
                    '$(oMain).on("show_interlevel_ad", function(evt) {' +
                            'if(getParamValue("ctl-arcade") === "true"){' +
                                'parent.__ctlArcadeShowInterlevelAD();' +
                            '}' +
                            '//...ADD YOUR CODE HERE EVENTUALLY' +
                    '});' +
                    '$(oMain).on("share_event", function(evt,iMoney) {' +
                            'if(getParamValue("ctl-arcade") === "true"){' +
                               'parent.__ctlArcadeShareEvent({ img:"200x200.jpg",' +
                                                                'title:TEXT_CONGRATULATIONS,' +
                                                                'msg:TEXT_SHARE_1 + iMoney + TEXT_SHARE_2,' +
                                                                'msg_share:TEXT_SHARE_3 + iMoney + TEXT_SHARE_4' +
                                                            '});' +
                            '}' +
                            '//...ADD YOUR CODE HERE EVENTUALLY' +
                    '});' +
                    'if(isIOS()){' +
                        'setTimeout(function(){sizeHandler();},200);' +
                    '}else{' +
                        'sizeHandler();' +
                    '}' +
                '});' +
            '</script>' +
            '<canvas id="canvas" class="ani_hack" width="1200"></canvas>' +
            '' +
            '' +
        '</body>'
    '</html>';*/

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