var wip= document.getElementsByClassName("wip");

var alertwip= function(){
    alert("Work In Progress!\nBest Wishes\nAnkit");
}

for(var i=0;i<wip.length;i++) {
    console.log("Check");
    wip[i].addEventListener('click',alertwip,false);
}