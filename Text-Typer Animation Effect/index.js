/* const texts=["E","Ea","Eat","Eat","Ea","E","","C","Co","Cod","Code","Code","Cod","Co","C","","S","Sl","Sle","Slee","Sleep","Sleep","Slee","Sle","Sl","S","","R","Re","Rep","Repe","Repea","Repeat","Repeat","Repea","Repe","Rep","Re","R",""]; */
var text="";
const fullText = "I am not Tom Marvolo Riddle, I am LORD  VOLDEMORT";
const texts=[""];
for (let i = 1; i <= fullText.length; i++) {
    text=fullText.slice(0,i);
    texts.push(text);
}
for (let i = fullText.length; i >= 0; i=i-2) {
    text=fullText.slice(0,i);
    texts.push(text);
}
console.log(texts);
var i=0,j=0;
const arrayLen = texts.length;
function Screen() {
   setInterval(function () {
       if (i==arrayLen) {
           i=0;
       }
       text = texts[i++];
        document.getElementById("text").innerHTML=text;
   },100)
   setInterval(function(){
       if(j==0){
           document.getElementById("span").style.opacity=0;
       }
       if(j==1){
           document.getElementById("span").style.opacity=0.25;
       }
       if(j==2){
           document.getElementById("span").style.opacity=0.5;
       }
       if(j==3){
           document.getElementById("span").style.opacity=1;
       }
       if(j==4){
           document.getElementById("span").style.opacity=0.5;
       }
       if(j==5){
           document.getElementById("span").style.opacity=0.25;
       }
       if (j==6) {
          document.getElementById("span").style.opacity=0;
       }
       j++;
       if (j==7) {
        j=0;
       }
   },100);
}
Screen();