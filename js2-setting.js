// 获取元素
var text=document.getElementById("man_total");
var range=document.getElementById("range");
var btn_reduce=document.getElementById("btn_reduce");
var btn_add=document.getElementById("btn_add");
// 改变range值时同时改变text值
range.onchange=function range_change(){
    text.value=range.value;
}
// 改变text的值，同时改变range值
text.onblur=function text_blur(){
    if (text.value<4) {
        alert("游戏人数不能小于4!");
        text.value=4;
    }
    else if(text.value>18){
        alert("游戏人数不能多于18!");
        text.value=18;
    }
    else{
        range.value=text.value;
    }
}

// 改变减少人数按钮时同时改变range和text值
btn_reduce.onclick=function btn_reduceClick(){
    text.value--;
    if (text.value<4) {
        alert("游戏人数不能小于4");
         text.value=4;
        }
        else{
            range.value=text.value;
        }
}

// 改变增加人数按钮时同时改变range和text值
btn_add.onclick=function btn_addClick(){
    text.value++;
    if (text.value>18) {
        alert("游戏人数不能大于18");
         text.value=18;
        }
        else{
            range.value=text.value;
        }
}

// 获取显示玩家身份区域的元素和设置身份的元素
var identity=document.getElementById('set_list');
var id_set=document.getElementById("btn_set");
var killer=[],
    civilian=[],
    all_man,
    man_list="";
id_set.onclick=function id_set(){
    man_list="";
    if (text.value>=4 && text.value<=8) {
        killer.length=1;
    }
        else if (text.value>=9 && text.value<=11) {
            killer.length=2;
        }
        else if (text.value>=12 && text.value<=15) {
            killer.length=4;
        }
        else if (text.value>=16 && text.value<=18) {
            killer.length=4;
        }
    for (var i = 0; i<killer.length;i++){
        killer[i]="杀手";
    }
    for(var j=0;j<text.value-killer.length;j++){
        civilian[j]="平民";
    }
    // 合并数组
    var all_man=killer.concat(civilian);
    // 数组洗牌
    var m=all_man.length;
    while(m){
        var t,i;
        i=Math.floor(Math.random()*m--);
        t=all_man[m];
        all_man[m]=all_man[i];
        all_man[i]=t;
    }
    // 输出打乱的数组显示在设置页面上
    for(var h=0;h<all_man.length;h++){
        if (all_man[h]=="杀手") {
            man_list+="<li><span></span>" + (h + 1) + "号" + "&nbsp;&nbsp;" + all_man[h] + "</li>";
        }
        else{
            man_list+="<li><i></i>" + (h + 1) + "号" + "&nbsp;&nbsp;" + all_man[h] + "</li>";
        }
        identity.innerHTML=man_list;
    }
}
// 发牌按钮添加点击事件
var go=document.getElementById("go"),man=null;
go.onclick=function go_click(){
    if (man!=null) {
        top.location="showcar.html";
    }
    else{
        alert("你牛x，没人你咋玩游戏，还不快设置");
    }
}

 