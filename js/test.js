


/*


div id="waku"><!--■画像の配置用。JavaScriptとは無関係なので、不要なら削除しても可-->
<div id="Bs"></div><!--★拡大画像指定。id="Bs"は必須-->
<div id="Mbox"></div><!--★サムネイル指定 id="Mbox"は必須-->
</div><!--■配置用の#wakuの終了。不要なら削除しても可-->

<script type="text/javascript"><!--
/*=====================================================================
フェードの同一画像サムネイル自動スライドtitle付：Slideshow with thumbnail gallery and zoom-effects（by Peter Gehrig）
Copyright (c) 2011 Peter Gehrig. All rights reserved.（http://www.fabulant.com on the webpage）★2016/09/16 ズーム削除フェード改造
即時関数のonclickの参考サイト：http://qiita.com/kyoshiro-obj/items/96890ffe973d3bec0547
=======================================================================*/
/*(function (){ var n=0;  //即時関数で囲んでグローバル変数を消すため、この行はこのままで

//★画像とtitleの同時指定。増減可能。["画像","title"];　の２個をこの順番で記述。最後の ] の前には ,(カンマ) 無し
var ga=[];
ga[n++]=["mo11.gif","塔の上のラプンツェル"];
ga[n++]=["fwa1b.gif","季節外れの赤い実"];
ga[n++]=["fwa6.gif","操り人形"];
ga[n++]=["fwa7.gif","風の顔"];
ga[n++]=["wh11.jpg","鳥の背に乗って&#13;&#10;海を飛ぶ"];/*■titleの改行には「&#13;&#10;」を使用*/

var myurl="";   //★画像パス。文書とは別のフォルダーなどに入っている時は指定。全画像共通部分
var spd=3000;   //★スライドショーの切替速度。1000=1秒
var Fspd=30;　　//★原本20。フェードの変化速度。小さいほど速い

//指定ここまで--------------------------------------------------------------------------
function $(id){return document.getElementById(id);}/*document.getElementByIdを簡略化*/

var i=0,j=0,fade=0;
var stopid,timer, pic,p_under;
var moveon=true;
var w=Bs.clientWidth, h=Bs.clientHeight;//同一画像サイズ
var cssB="position:absolute; top:0; left:0;width:"+w+"px; height:"+h+"px;";
var bbb="<div style='"+cssB+"' id='B_under'></div>";
bbb +="<div style='"+cssB+"' id='Bbox'>";
$("Bs").innerHTML=bbb;//拡大画像用
$("Bs").style.position="relative";//■追加。1セットにまとめるため
function ary() {
pic="<img  src="+myurl+ga[i][0]+" style='"+cssB+"'>";
$('Bbox').innerHTML=pic;
}
function setP() {
for (j=0;j<n;j++) {$(j).className="";}
$(i).className="act";
if (moveon) {
if (fade<=100) {
ary();
$('Bbox').style.opacity=(fade)/100;
fade+=5;
timer=setTimeout(setP,Fspd);
}
else {clearTimeout(timer);timer=setTimeout(finL,spd);}
}
else {clearTimeout(timer);stopA();}
}
function finL() {
if (moveon){
clearTimeout(timer);
fade=0;
p_under="<img src="+myurl+ga[i][0]+" style='"+cssB+"'>";//■追加
$('B_under').innerHTML=p_under;//■追加
i++; if (i>=n) {i=0}
timer=setTimeout(setP,Fspd);
}
else {clearTimeout(timer);stopA();}
}
function onmsover(mm) {
stopid=mm.id;
for (j=0;j<n;j++) {$(j).className="";}
$(stopid).className="act";
moveon=false;
}
function onmsout(mm){ moveon=true; i=mm.id; clearTimeout(timer); setP();}
function stopA() {
pic="<img src="+myurl+ga[stopid][0]+" style='"+cssB+" opacity:1;'>";
$('Bbox').innerHTML=pic;
fade=100;//■原本0だが停止時に消えないよう修正
}
var sss="";
for (j=0;j<n;j++) {sss +="<img src="+myurl+ga[j][0]+" title="+ga[j][1]+" id='"+j+"'>";}
$("Mbox").innerHTML=sss;//サムネイル用
var b=$("Mbox").getElementsByTagName("img");
function a(){
for (j=0; j<n; j++){
var fnc1=(function (j){ return function (){onmsover(this); }}(j));
var fnc2=(function (j){ return function (){onmsout(this); }}(j));
b[j].onmouseover=fnc1;b[j].onmouseout=fnc2;
}
setP();
}
a();
}());//即時関数終了
//--></script>
