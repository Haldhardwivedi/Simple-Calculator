
function addkey(number)
{
    let res=document.getElementById("result");
    let str=res.value;
    if(str.length==1&&str[0]=='0'&&number!=='+'&&number!=='-'&&number!=='*'&&number!=='/')
    {
        res.value=number;
    }
    else
    res.value+=number;
    //console.log(str);
}

function delkey()
{
    let res=document.getElementById("result");
    let str=res.value;
    str=str.substring(0,str.length-1);
    res.value=str;
}

function clearkey()
{
    let res=document.getElementById("result");
    let str=res.value;
    res.value=null;
}

function solve()
{
    let res=document.getElementById("result");
    let str=res.value;
    res.value=eval(str);
    console.log(res.value);
}

document.addEventListener("keydown", function(event) {
    let key=event.key;
    let kval=event.which;
    console.log(event.which);
    if(kval==8)
    {
        delkey();
    }
    else if(kval===13)
    {
        solve();
    }
    else if(kval>=96&&kval<=111)
    {
        addkey(key);
    }
  });