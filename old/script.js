function openContent() {
  switchFrameContent();
  changeBackgroundImage();
}
function switchFrameContent() {
    var painting = document.getElementById("painting");
    var content = document.getElementById("content");
    if (painting.style.display === "none") {
      painting.style.display = "inline-block";
      content.style.display = "none";
    } else {
      painting.style.display = "none";
      content.style.display = "inline-block";
      
    }
  }
  
  function changeBackgroundImage(){
    //console.log(window.getComputedStyle(document.body, null).getPropertyValue('background'))
    //console.log(document.getElementById('painting').currentSrc);
    const path = (document.getElementById('painting').currentSrc).split("mariage/")[1];
    document.body.style.background = "url("+path+")"
    //console.log(document.body.style.background)
  }