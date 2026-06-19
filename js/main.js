let currentQ = 0;
let pickFivePerson = [];
let numMapPerson = [];
let selectRecord = {};

let questionList = [
    "老师无故叫你上课起立，你会？",
    "出去和不熟的朋友吃饭，你会点？",
    "如果能养一只宠物，你最想要？",
    "选一个颜色吧！",
    "孙笑川吧是什么？",
    "下方你的幸运数字是？"
];

let optionList = [
    [
        {text:"大喊：我命由我不由天",person:"魔丸"},
        {text:"跟朋友对视，于是两个人开始憋笑",person:"奶娃"},
        {text:"回答老师：我太懂你这种感觉了！！我将用最直接、最真相、最不绕弯、最扎心、最硬核、最干脆、最不墨迹、最一针见血、最开门见山、最单刀直入、 最不铺垫、最不客套、最不煽情、最不废话、最不拐弯、最不磨叽、最不装、最不端着、最不啰嗦、最不拖沓、最不委婉、最不掩饰、最不藏着掖着、最直白、最露骨、最实在、最通透、最毒辣、最爽快、最解气、最上头、最够劲、最过瘾、最粗暴、最有效、最狠、最准、最稳、最绝、 最顶、最炸、最刚、最烈、最飒、最莽最冲、最猛、最脆、最亮、最透、最干、 最净、最利落、最霸道、最硬核、最生猛、最狂野、最直白、最粗暴、最不讲虚的、最不玩套路、最不搞形式、最不整虚头巴脑、最只讲干货、最只说重点、最只给结果、最只聊真相、最只谈核心、最只戳关键的方式来告诉你答案。",person:"豆包"},
        {text:"站起来走向沃希白板查看股票走势",person:"嘉豪"}
    ],
    [
        {text:"焖子+板面",person:"良子"},
        {text:"麦当劳",person:"胖猫"},
        {text:"飞起来扔旋转炸弹炸掉餐厅",person:"迷你世界拆"},
        {text:"棒棒糖",person:"灵珠"}
    ],
    [
        {text:"一只拿刀拿盾的小狗",person:"刀盾"},
        {text:"流口水小孩",person:"Papa"},
        {text:"白色的羊驼狗",person:"杯子狗"},
        {text:"一只开心的香蕉猫",person:"香蕉猫"}
    ],
    [
        {text:"黄色",person:"蛋小黄"},
        {text:"绿色",person:"陈泽"},
        {text:"粉色",person:"猪神"}
    ],
    [
        {text:"我家SXC无疑",person:"绿色大佛"},
        {text:"你已急哭乐子作者",person:"你已急哭外星人"},
        {text:"我玩小红书呀，集美",person:"嘉欣"}
    ],
    [
        {text:"1",idx:0},
        {text:"2",idx:1},
        {text:"3",idx:2},
        {text:"4",idx:3},
        {text:"5",idx:4}
    ]
];

let personList = [
    {name:"奶娃",avatar:"images/naiwa.png",short:"",long:""},
    {name:"绿色大佛",avatar:"images/dafo.png",short:"",long:""},
    {name:"魔丸",avatar:"images/mowan.png",short:"",long:""},
    {name:"灵珠",avatar:"images/lingzhu.png",short:"",long:""},
    {name:"刀盾",avatar:"images/daodun.png",short:"",long:""},
    {name:"猪神",avatar:"images/zhushen.png",short:"",long:""},
    {name:"陈泽",avatar:"images/chenze.png",short:"",long:""},
    {name:"胖猫",avatar:"images/pangmao.png",short:"",long:""},
    {name:"香蕉猫",avatar:"images/xiangjiao.png",short:"",long:""},
    {name:"Papa",avatar:"images/papa.png",short:"",long:""},
    {name:"迷你世界拆",avatar:"images/mini.png",short:"",long:""},
    {name:"你已急哭外星人",avatar:"images/wairen.png",short:"",long:""},
    {name:"良子",avatar:"images/liangzi.png",short:"",long:""},
    {name:"蛋小黄",avatar:"images/danxiaohuang.png",short:"",long:""},
    {name:"杯子狗",avatar:"images/beizi.png",short:"",long:""},
    {name:"豆包",avatar:"images/doubao.png",short:"",long:""},
    {name:"嘉豪",avatar:"images/jiahao.png",short:"",long:""},
    {name:"嘉欣",avatar:"images/jiaxin.png",short:"",long:""}
];

function shuffleArr(arr){
    let arrCopy = [...arr];
    for(let i = arrCopy.length - 1; i > 0; i--){
        let r = Math.floor(Math.random()*(i+1));
        [arrCopy[i],arrCopy[r]] = [arrCopy[r],arrCopy[i]];
    }
    return arrCopy;
}

function getPersonInfo(name){
    return personList.find(item=>item.name === name);
}

window.onload = function(){
    if(location.pathname.includes("quiz.html")){
        initPage();
    }
    if(location.pathname.includes("result.html")){
        showResultPage();
    }
}

function initPage(){
    currentQ = 0;
    pickFivePerson = [];
    selectRecord = {};
    renderQues();
}

function renderQues(){
    let totalQ = questionList.length;
    document.getElementById("progressText").innerText = currentQ;
    document.getElementById("progressInner").style.width = (currentQ/totalQ)*100 + "%";
    document.getElementById("questionText").innerText = questionList[currentQ];

    let optBox = document.getElementById("optionBox");
    optBox.innerHTML = "";
    let nowOpts = optionList[currentQ];
    let selectedIndex = selectRecord[currentQ] ?? -1;

    nowOpts.forEach((item, index)=>{
        let btn = document.createElement("button");
        btn.innerText = item.text;
        btn.style.width = "90%";
        btn.style.padding = "18px 12px";
        btn.style.margin = "10px auto";
        btn.style.borderRadius = "12px";
        btn.style.border = "1px solid #eee";
        btn.style.background = "#fff";
        btn.style.fontSize = "17px";
        btn.style.display = "block";
        btn.style.cursor = "pointer";
        if(index === selectedIndex){
            btn.style.background = "#ffeeda";
            btn.style.border = "1px solid #f8c89c";
        }

        btn.onclick = function(){
            selectRecord[currentQ] = index;
            document.querySelectorAll("#optionBox button").forEach(b=>{
                b.style.background = "#fff";
                b.style.border = "1px solid #eee";
            })
            btn.style.background = "#ffeeda";
            btn.style.border = "1px solid #f8c89c";

            if(currentQ < 5){
                pickFivePerson.push(item.person);
                currentQ++;
                renderQues();
            }else{
                numMapPerson = shuffleArr(pickFivePerson);
                localStorage.setItem("fiveRandList",JSON.stringify(numMapPerson));
                localStorage.setItem("userPickNum",item.idx);
                location.href = "result.html";
            }
        }
        optBox.appendChild(btn);
    })
}

function showResultPage(){
    let randList = JSON.parse(localStorage.getItem("fiveRandList"));
    let userSelIndex = Number(localStorage.getItem("userPickNum"));
    let finalPersonName = randList[userSelIndex];
    let finalInfo = getPersonInfo(finalPersonName);

    document.getElementById("resImg").src = finalInfo.avatar;
    document.getElementById("resName").innerText = finalPersonName;

    let showText = `
本次随机分配结果：<br>
1号：${randList[0]}<br>
2号：${randList[1]}<br>
3号：${randList[2]}<br>
4号：${randList[3]}<br>
5号：${randList[4]}<br><br>
你选择的数字：${userSelIndex+1}<br>
最终人格：${finalPersonName}
    `;
    document.getElementById("resLong").innerHTML = showText;

    document.getElementById("restartBtn").onclick = function(){
        localStorage.clear();
        window.location.href = "index.html";
    }
}
