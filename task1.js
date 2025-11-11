

function max(val1,val2){

    if(val1>val2){
        document.getElementById("max1").innerHTML="maximum value of two number is "+val1;
    }
    else if(val2>val1){
        document.getElementById("max1").innerHTML="maximum value of two number is "+val2;
    }
    
}

function reverse(s){
    const arr=s.split("");
    const s1=arr.reverse();
    // let rev="";
    // for(let x of s1){
    //     rev+=x;
    // }
    document.getElementById("rev1").innerHTML=s1.join("");   
}

function showlargestword(){
    let val=document.getElementById("w1").value;

    let res=FindLongestWord(val);

    document.getElementById("l1").innerHTML="largest word:"+res;
}

function FindLongestWord(val){

    const myarr=val.split(",");
    let largest=myarr[0];
    for(let x of myarr){
        
        if(largest.length<x.length){
            largest=x;
        }
    }    
    return largest;

}

function savecookie(){
    let name=document.getElementById("c1").value;
    let phone=document.getElementById("c2").value;

    document.cookie="name="+encodeURIComponent(name)+"; expires=Fri, 31 Dec 2026 23:59:59 UTC; path=/";
    document.cookie="phone="+encodeURIComponent(phone)+"; expires=Fri, 31 Dec 2026 23:59:59 UTC; path=/";
}

function getCookie(name){
    let decode=decodeURIComponent(document.cookie);
    let cookies=decode.split("; ");
    for(let c of cookies){
        if(c.startsWith(name+"=")){
            return c.split("=")[1];
        }
    }
    return "";
}

window.onload=function(){
    let cname=getCookie("name");
    let cphone=getCookie("phone");

    if(cname!==""){
        document.getElementById("a1").innerText=cname;
        
    }
    if(cphone!=""){
        document.getElementById("pn1").innerText=cphone;
    }
}