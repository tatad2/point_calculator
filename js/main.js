var is_banker = false;
var fu = 40; 
var yakuman = 0;
var fan = 5; 

var temp_fan = 0; 
var temp_yakuman = 0; 

var yaku_list = [
    { name: "riichi", fan: 1, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "tsumo", fan: 1, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "ippatsu", fan: 1, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "dora", fan: 1, yakuman: 0, multiple: false, org: "ドラ", cur: 0 }, 
    { name: "yaku", fan: 1, yakuman: 0, multiple: false, org: "役牌", cur: 0 }, 
    { name: "chiitoi", fan: 2, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "kaitei", fan: 1, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "houtei", fan: 1, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "rinshan", fan: 1, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "chankan", fan: 1, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "daburii", fan: 2, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "pinfu", fan: 1, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "iipeikoi", fan: 1, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "sanshoku", fan: 1, yakuman: 0, multiple: true, org: "三色同順", add:"三色同順 門清", cur: 0 }, 
    { name: "ittsuu", fan: 1, yakuman: 0, multiple: true, org: "一気通貫", add:"一気通貫 門清", cur: 0 }, 
    { name: "ryanpeikou", fan: 2, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "toitoi", fan: 2, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "sanankou", fan: 2, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "sanshokudoukou", fan: 2, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "sankantsu", fan: 2, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "danyao", fan: 1, yakuman: 0, multiple: false, cur: 0 }, 
    { name: "chanta", fan: 1, yakuman: 0, multiple: true, org: "チャンタ", add:"チャンタ 門清", cur: 0 }, 
    { name: "junchan", fan: 2, yakuman: 0, multiple: true, org: "チャンタ", add:"チャンタ 門清", cur: 0 },
    { name: "honrou", fan: 2, yakuman: 0, multiple: false, cur: 0 },
    { name: "shousangen", fan: 2, yakuman: 0, multiple: false, cur: 0 },
    { name: "honiitsu", fan: 2, yakuman: 0, multiple: true, org: "混一色", add: "混一色 門清", cur: 0 },
    { name: "chiniitsu", fan: 5, yakuman: 0, multiple: true, org: "清一色", add: "清一色 門清", cur: 0 },
    { name: "nagashimangan", fan: 5, yakuman: 0, multiple: false, cur: 0 },

    { name: "kokushimusou", fan: 13, yakuman: 1, multiple: true, org: "国士無双", add: "国士無双13面待ち", cur: 0 },
    { name: "suuanko", fan: 13, yakuman: 1, multiple: true, org: "四暗刻", add: "四暗刻単騎", cur: 0 },
    { name: "daisangen", fan: 13, yakuman: 1, multiple: false, add: "", cur: 0 },
    { name: "shousuushii", fan: 13, yakuman: 1, multiple: false, add: "", cur: 0 },
    { name: "daisuushii", fan: 26, yakuman: 2, multiple: false, add: "", cur: 0 },
    { name: "tsuuiisou", fan: 13, yakuman: 1, multiple: false, add: "", cur: 0 },
    { name: "chinroutou", fan: 13, yakuman: 1, multiple: false, add: "", cur: 0 },
    { name: "ryuuiisou", fan: 13, yakuman: 1, multiple: false, add: "", cur: 0 },
    { name: "chuurenpoutou", fan: 13, yakuman: 1, multiple: true, org: "九蓮宝燈", add: "純正九蓮宝燈", cur: 0 },
    { name: "suukantsu", fan: 13, yakuman: 1, multiple: false, add: "", cur: 0 },
    { name: "tenhou", fan: 13, yakuman: 1, multiple: false, add: "", cur: 0 },
    { name: "chiihou", fan: 13, yakuman: 1, multiple: false, add: "", cur: 0 },
]; 

var yaku_color = [
    "white", // 0
    "#2dff2d", "#2dff2d", // 1~2
    "#2d96ff", "#2d96ff", // 3~4
    "#ff962d", "#ff962d", "#ff962d", "#ff962d", "#ff962d", // 5~9
    "#ff2d2d", "#ff2d2d", "#ff2d2d", "#ff2d2d", "#ff2d2d",
    "#ff2d2d", "#ff2d2d", "#ff2d2d", "#ff2d2d", "#ff2d2d",
    "#ff2d2d", "#ff2d2d", "#ff2d2d", "#ff2d2d", "#ff    2d2d",
    "#ff2d2d", "#ff2d2d"  // 11~26
];

var number = [
    "", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"
];

var mentsu_counter = [
    { name: "minko", val: 0, fu: 2 },
    { name: "minkoyaochuu", val: 0, fu: 4 }, 
    { name: "anko", val: 0, fu: 4 },
    { name: "ankoyaochuu", val: 0, fu: 8 }, 
    { name: "minkan", val: 0, fu: 8 },
    { name: "minkanyaochuu", val: 0, fu: 16 }, 
    { name: "ankan", val: 0, fu: 16 },
    { name: "ankanyaochuu", val: 0, fu: 32 }
];

var fu_counter = [
    { name: "machi", cur: "" }, 
    { name: "jianto", cur: "" }, 
    { name: "special-form", cur: "" }
];

var point_table = [
    { fan: 1, fu: 20, banker_point: 0, point: 0 },
    { fan: 1, fu: 25, banker_point: 0, point: 0 }, 
    { fan: 1, fu: 30, banker_point: 1500, point: [1000, 300, 500] },
    { fan: 1, fu: 40, banker_point: 2000, point: [1300, 400, 700] },
    { fan: 1, fu: 50, banker_point: 2400, point: [1600, 400, 800] },
    { fan: 1, fu: 60, banker_point: 2900, point: [2000, 500, 1000] },
    { fan: 1, fu: 70, banker_point: 3400, point: [2300, 600, 1200] },
    { fan: 1, fu: 80, banker_point: 3900, point: [2600, 700, 1300] },
    { fan: 1, fu: 90, banker_point: 4400, point: [2900, 800, 1500] },
    { fan: 1, fu: 100, banker_point: 4800, point: [3200, 800, 1600] },
    { fan: 1, fu: 110, banker_point: 5300, point: [3600, 900, 1800] },

    { fan: 2, fu: 20, banker_point: 2000, point: [1300, 400, 700] },
    { fan: 2, fu: 25, banker_point: 2400, point: [1600, 0, 0] }, 
    { fan: 2, fu: 30, banker_point: 2900, point: [2000, 500, 1000] },
    { fan: 2, fu: 40, banker_point: 3900, point: [2600, 700, 1300] },
    { fan: 2, fu: 50, banker_point: 4800, point: [3200, 800, 1600] },
    { fan: 2, fu: 60, banker_point: 5800, point: [3900, 1000, 2000] },
    { fan: 2, fu: 70, banker_point: 6800, point: [4500, 1200, 2300] },
    { fan: 2, fu: 80, banker_point: 7700, point: [5200, 1300, 2600] },
    { fan: 2, fu: 90, banker_point: 8700, point: [5800, 1500, 2900] },
    { fan: 2, fu: 100, banker_point: 9600, point: [6400, 1600, 3200] },
    { fan: 2, fu: 110, banker_point: 10600, point: [7100, 1800, 3600] },

    { fan: 3, fu: 20, banker_point: 3900, point: [2600, 700, 1300] },
    { fan: 3, fu: 25, banker_point: 4800, point: [3200, 800, 1600] }, 
    { fan: 3, fu: 30, banker_point: 5800, point: [3900, 1000, 2000] },
    { fan: 3, fu: 40, banker_point: 7700, point: [5200, 1300, 2600] },
    { fan: 3, fu: 50, banker_point: 9600, point: [6400, 1600, 3200] },
    { fan: 3, fu: 60, banker_point: 11600, point: [7700, 2000, 3900] },
    
    { fan: 4, fu: 20, banker_point: 7700, point: [5200, 1300, 2600] },
    { fan: 4, fu: 25, banker_point: 9600, point: [6400, 1600, 3200] }, 
    { fan: 4, fu: 30, banker_point: 11600, point: [7700, 2000, 3900] },
]; 

function update_point_baseon( base, temp ) {
    $("#point-display").html( base.toString() + "点 " + temp ); 
    
    base = is_banker ? ( base / 3 ) : ( base / 4 ); 
    if( is_banker ) 
        $("#point-lose").html("[" + base.toString() + "オー]");
    else 
        $("#point-lose").html("[" + (base*2).toString() + ", " + base.toString() + "]");
    return;
}

function calc_point() {
    $("#fan").html(fan.toString()+"翻"); 
    if( fan === 14 ) 
        $("#fan").html("13+翻"); 
    $("#fu").html(fu.toString()+"符");

    if( yakuman > 0 )
    {
        var temp = yakuman === 1 ? "役満" : ( number[yakuman] + "倍役満" );
        var base = is_banker ? 48000 : 32000; base *= yakuman; 
        $("#point-display").html( base.toString() + "点 " + temp ); 
        
        base = is_banker ? ( base / 3 ) : ( base / 4 ); 
        if( is_banker ) 
            $("#point-lose").html("[" + base.toString() + "オー]");
        else 
            $("#point-lose").html("[" + (base*2).toString() + ", " + base.toString() + "]");
        return;
    }

    if( fan >= 13 ) {
        update_point_baseon( is_banker ? 48000 : 32000, "累計役満" ); return;
    } 

    if( fan >= 11 ) {
        update_point_baseon( is_banker ? 36000 : 24000, "三倍満" ); return;
    }

    if( fan >= 8 ) {
        update_point_baseon( is_banker ? 24000 : 16000, "倍満" ); return;
    }

    if( fan >= 6 ) {
        update_point_baseon( is_banker ? 18000 : 12000, "跳満" ); return;
    } 

    if( fan === 5 || ( fan === 4 && fu >= 40 ) || ( fan === 3 && fu >= 70 ) ) {
        update_point_baseon( is_banker ? 12000 : 8000, "満貫" ); return;
    }

    var temp; 
    for( var i of point_table ) {
        if( i.fan === fan && i.fu === fu ) {
            temp = i; break;
        }
    }

    if( is_banker ) {
        $("#point-display").html(temp.banker_point.toString() + "点");

        var pay = temp.banker_point.toString() / 3;
        if( pay % 100 != 0 ) {
            pay = pay + 100 - pay % 100; 
        }

        $("#point-lose").html("[" + pay.toString() + "オー]");
        return;
    }

    $("#point-display").html(temp.point[0].toString() + "点");
    $("#point-lose").html("[" + temp.point[2].toString() + ", " + temp.point[1].toString() + "]");
}

function do_alert( id, color ) {
    $("#"+id).css("background-color", color);
    console.log( "do alert" );
    setTimeout( function() {
        $("#"+id).css("background-color", "transparent");
    }, 200 ); 
}

$("#fan").click( () => {
    $("#fan-popup-background").removeClass("hidden"); 
    
    if( fan <= 13 ) {
        $("#fan-display").html(fan.toString()); 
    }
    else {
        $("#fan-display").html("13+"); 
    }

    if( yakuman === 0 && fan < 13 ) {
        $("#yakuman-display").html(""); 
    }
    else if( yakuman === 0 && fan >= 13 ) {
        $("#yakuman-display").html("累計役満"); 
    }
    else if( yakuman === 1 ) {
        $("#yakuman-display").html("役満"); 
    }
    else if( yakuman > 1 ) {
        $("#yakuman-display").html(number[yakuman] + "倍役満"); 
    }
} )

$('.fan-choose').click( function() {
    var id = this.id; 

    if( id === "dora-clear" ) {
        var temp = 0; 
        for( var i of yaku_list ) {
            if( i.name !== "dora" ) continue;
            temp = i.cur; i.cur = 0; break;
        }

        temp_fan -= temp; 
        $("#dora").css("background-color", yaku_color[0]);
        document.getElementById("dora").innerHTML = "ドラ"; 
        return;
    }

    if( id === "yaku-clear" ) {
        var id = this.id; 

        var temp = 0; 
        for( var i of yaku_list ) {
            if( i.name !== "yaku" ) continue;
            temp = i.cur; i.cur = 0; break;
        }

        temp_fan -= temp; 
        $("#yaku").css("background-color", yaku_color[0]);
        document.getElementById("yaku").innerHTML = "役牌"; 
        return;
    }

    for( var i of yaku_list ) {
        if( i.name !== id ) continue;

        if( i.name === "dora" || i.name === "yaku" ) {
            i.cur ++; temp_fan ++;
            $(this).css("background-color", yaku_color[i.cur]);
            this.innerHTML = i.org + " " + i.cur.toString();
            return;
        }

        if( i.multiple === false ) {
            var temp = i.cur === 0 ? 1 : -1; 

            temp_fan += temp * i.fan;
            temp_yakuman += temp * i.yakuman; 

            if( temp === 1 ) {
                $(this).css("background-color", yaku_color[i.fan]); 
            }
            else {
                $(this).css("background-color", yaku_color[0]);
            }

            i.cur = i.cur === 1 ? 0 : 1; 
            return; 
       }

        // i.multiple === true

        if( i.cur === 0 ) {
            temp_fan += i.fan; temp_yakuman += i.yakuman;
            $(this).css("background-color", yaku_color[i.fan]); 
            i.cur = 1; 
        }
        else if( i.cur === 1 ) {
            temp_fan += i.yakuman === 0 ? 1 : 13; temp_yakuman += i.yakuman; 
            $(this).css("background-color", yaku_color[i.fan+1]); 
            this.innerHTML = i.add; 
            i.cur = 2; 
        }
        else {
            temp_fan -= i.yakuman === 0 ? ( i.fan + 1 ) : 26; temp_yakuman -= i.yakuman * 2; 
            $(this).css("background-color", yaku_color[0]); 
            this.innerHTML = i.org;
            i.cur = 0; 
        }
        
        return;
    }
} )

$('#calc-fan').click( () => {
    console.log( "fan: " + temp_fan.toString() ); 
    console.log( "yakuman: " + temp_yakuman.toString() );

    fan = temp_fan; fan = fan > 14 ? 14 : fan; fan = fan < 1 ? 1 : fan;
    if( fan <= 13 ) {
        $("#fan-display").html(fan.toString()); 
    }
    else {
        $("#fan-display").html("13+"); 
    }

    yakuman = temp_yakuman > 10 ? 10 : temp_yakuman;
    if( yakuman === 0 && fan < 13 ) {
        $("#yakuman-display").html(""); 
    }
    else if( yakuman === 0 && fan >= 13 ) {
        $("#yakuman-display").html("累計役満"); 
    }
    else if( yakuman === 1 ) {
        $("#yakuman-display").html("役満"); 
    }
    else if( yakuman > 1 ) {
        $("#yakuman-display").html(number[yakuman] + "倍役満"); 
    }
} )

function fan_all_clear() {
    temp_fan = 0; temp_yakuman = 0; 
    
    for( var i of yaku_list ) {
        i.cur = 0; 
        $("#"+i.name).css("background", "white"); 
        $("#"+i.name).html(i.org);
    }
}

$('#fan-all-clear').click( () => {
    fan_all_clear();
} ) 

$("#fan-add1").click( () => {
    if( yakuman > 0 ) { do_alert( "fan-add1", "red" ); return; }
    if( fan > 13 ) return;
    if( fan === 13 ) {
        $("#fan-display").html("13+"); fan = 14; return;
    }
    if( fan === 12 ) {
        $("#fan-display").html("13");
        $("#yakuman-display").html("累計役満"); 
        fan ++; 
        return;
    }

    fan ++; $("#fan-display").html(fan.toString());
} )

$("#fan-dec1").click( () => {
    if( yakuman > 0 ) { do_alert( "fan-dec1", "red" ); return; }
    if( fan <= 1 ) return; 
    if( fan === 13 ) {
        $("#fan-display").html("12");
        $("#yakuman-display").html(""); 
        return;
    }

    fan --; $("#fan-display").html(fan.toString());
} );

$("#fan-clear").click( () => {
    fan = 1; yakuman = 0; 
    $("#fan-display").html("1");
    $("#yakuman-display").html(""); 
} );

function fan_close() {
    fan_all_clear();
    $("#fan-popup-background").addClass("hidden"); 
    calc_point();
};

$("#fan-close").click( () => {
    fan_close();
} );

$("#fan-confirm").click( () => {
    fan_close();
} );

/* fu */


$("#fu").click( () => {
    $("#fu-popup-background").removeClass("hidden"); 
    $("#fu-display").html(fu.toString());
} );

$('.fu-choose').click( function() {
    var id = this.id; 

    if( $(this).hasClass("mentsu-count") ) {
        var target_id = this.id.slice(0, -3); 
        // console.log( target_id );
        var target = document.getElementById(target_id);
        var val = ( this.id.slice(-3) === "add" ) ? 1 : -1; 
        
        var i = 0; 
        for( ; i < mentsu_counter.length; i ++ ) {
            if( mentsu_counter[i].name === target_id ) break;
        }

        if( ( mentsu_counter[i].val === 0 && val === -1 ) ||
            ( mentsu_counter[i].val === 4 && val ===  1 ) ) {
            do_alert( id, "red" ); return;        
        }

        if( mentsu_counter[i].val === 1 && val === -1 ) {
            target.innerHTML = target.innerHTML.slice(0, -2);
        }
        else if( mentsu_counter[i].val === 0 && val === 1 ) {
            target.innerHTML = target.innerHTML + " 1";
        }
        else {
            target.innerHTML = (target.innerHTML.slice(0, -2)) + " " + (mentsu_counter[i].val+val).toString();
        }

        mentsu_counter[i].val += val; 
        return;
    }

    var i; 
    if( $(this).hasClass("special-form") ) {
        i = 2; 
    }
    if( this.id.slice(-5) === "machi" ) {
        i = 0;
    }
    if( this.id.slice(-6) === "jianto" ) {
        i = 1;
    }

    if( fu_counter[i].cur === "" ) {
        fu_counter[i].cur = this.id; 
        $(this).css("background-color", "#2dff2d");
        return;
    }
    if( fu_counter[i].cur === this.id ) {
        fu_counter[i].cur = "";
        $(this).css("background-color", "white"); 
        return;
    }
    $("#"+fu_counter[i].cur).css("background-color", "white");
    fu_counter[i].cur = this.id;
    $(this).css("background-color", "#2dff2d");
} )

function fu_all_clear() {
    for( var i = 0; i <= 2; i ++ ) {
        if( fu_counter[i].cur === "" ) continue;

        var temp = fu_counter[i].cur; 
        $("#"+temp).css("background", "white"); 
        fu_counter[i].cur = "";
    }

    for( var i of mentsu_counter ) {
        if( i.val === 0 ) continue;

        var temp = document.getElementById(i.name); 
        temp.innerHTML = temp.innerHTML.slice(0, -2);        
        i.val = 0; 
    }
}

$("#fu-add").click( () => {
    if( fu === 25 || fu === 110 ) { do_alert( "fu-add", "red" ); return; }

    fu += 10; $("#fu-display").html(fu.toString());
} )

$("#fu-dec").click( () => {
    if( fu === 20 || fu === 25 ) { do_alert( "fu-dec", "red" ); return; }

    fu -= 10; $("#fu-display").html(fu.toString());
} )

$("#fu-clear").click( () => {
    fu = 20;
    $("#fu-display").html("20");
} )

$("#fu-all-clear").click( function() {
    fu_all_clear();
} )

$("#calc-fu").click( function() {
    var cur_fu = 20; 
    if( fu_counter[2].cur === "chiitoi" ) {
        fu = 25; $("#fu-display").html("25"); return;
    }
    if( fu_counter[2].cur === "pinfukata-ron" ) {
        fu = 30; $("#fu-display").html("30"); return;
    }
    if( fu_counter[2].cur === "pinfu-jimo" ) {
        fu = 20; $("#fu-display").html("20"); return;
    }
    if( fu_counter[2].cur === "jimo-fu" ) {
        cur_fu += 2;
    }
    if( fu_counter[2].cur === "ron-menchin" ) {
        cur_fu += 10; 
    }

    for( var i = 0; i <= 4; i ++ ) {
        var tempClass = "fu" + i.toString();

        if( $("#"+fu_counter[0].cur).hasClass(tempClass) )
            cur_fu += i;
        if( $("#"+fu_counter[1].cur).hasClass(tempClass) )
            cur_fu += i;
    }

    for( var i of mentsu_counter ) {
        cur_fu += i.val * i.fu; 
    }

    fu = ( cur_fu % 10 === 0 ) ? cur_fu : ( (cur_fu + 10) - cur_fu % 10 );
    fu = fu < 20 ? 20 : fu; fu = fu > 110 ? 110 : fu;
    console.log( cur_fu ); 
    $("#fu-display").html(fu.toString()); 
} )

function fu_close() {
    fu_all_clear();
    $("#fu-popup-background").addClass("hidden"); 
    calc_point();
}

$("#fu-close").click( () => {
    fu_close();
} )

$("#fu-confirm").click( () => {
    fu_close();
} )

$("#banker").click( function() {
    if( is_banker === true ) {
        is_banker = false; $(this).css("background-color","white");
    }
    else {
        is_banker = true; $(this).css("background-color","#7CFC00");
    }
    calc_point(); 
} );