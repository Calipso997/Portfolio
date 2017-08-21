window.onscroll = function () {
   scrollFunction()
};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";}
   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
//      document.getElementById("gora").classList.add("fixed-top");
      document.getElementById("gora").classList.add("trans");
   } else {
      document.getElementById("myBtn").style.display = "none";
//      document.getElementById("gora").classList.remove("fixed-top");
      document.getElementById("gora").classList.remove("trans");
   }
};
// function CValert() {
//     document.getElementById("CVclick")
//      alert("Cv przesyłam po kontakcie meilowym marekkamzol@tlen.pl");
// }
