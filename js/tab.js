

// 対象の要素
var tab = document.getElementById("tabs").getElementsByTagName("a");
var box = document.getElementById("boxs").getElementsByTagName("div");


//タブ切り替え
function changeTab(){
  var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);

  for( var b=0; b<box.length; b++ ){
    if( box[b].id != targetid ){
      box[b].style.display = "none";
    }else{
      box[b].style.display = "block";
    }
  }

  for( var t=0; t<tab.length; t++ ){
    tab[t].style.zIndex = "0";
  }
  this.style.zIndex = "10";

  return false;
}

//クリック時
for( var c=0; c<tab.length; c++ ){
  tab[c].onclick = changeTab;
}

tab[0].onclick();
