

var x;
x = 10;
document.write(x);
x = 10 * x;
document.write(x);

var images = ["../images/new1.jpg", "../images/new2.jpg", "../images/new3.jpg"]

document.write(images);

function load(){
  document.getElementByTagId("test").getElementByTagName("img")[0].src = images[0];
}
