

// 対象の要素
var tab = document.getElementById("tabs").getElementsByTagName("a");
var box = document.getElementById("boxs").getElementsByTagName("div");


//タブ切り替え
function changeTab(){
  var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);

  for( var i=0; i<box.length; i++ ){
    if( box[i].id != targetid ){
      box[i].style.display = "none";
    }else{
      box[i].style.display = "block";
    }
  }

  for( var i=0; i<tab.length; i++ ){
    tab[i].style.zIndex = "0";
  }
  this.style.zIndex = "10";

  return false;
}

//クリック時
for( var i=0; i<tab.length; i++ ){
  tab[i].onclick = changeTab;
}

tab[0].onclick();
