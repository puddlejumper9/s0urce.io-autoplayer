// ==UserScript==
// @name         s0urce.io-autoplayer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  play s0urce.io automatically
// @author       Nolan Shettle
// @match        http://s0urce.io/
// @grant        none
// @require	     https://github.com/puddlejumper9/s0urce.io-autoplayer/raw/master/s0urce.io%20autoplayer.user.js
// ==/UserScript==

var diffe =
    ["ping","point","delete","temp","signal","domain","buffer","size","status","pass",
     "root","add","set","dir","ghost","client","com","url","list","val",
     "info","intel","global","handle","key","poly","loop","upload","http","left",
     "right","bit","get","host","remove","init","add","join","log","type",
     "net","num","count","emit","xml","write","bytes","anon","socket","cookies",
     "file","stat","user","load","event","port","call","reset","data","send",
     "system","part"];

var diffm =
    ["setping","process","urlcheck","syscall","getinfo","mysql","connect","download","proxy","getkey",
     "getfile","hostserver","encode","config","datatype","accountname","channel","thread","encrypt","gridheight",
     "encryptfile","eventtype","export","filetype","threat","getpass","command","userid","fillgrid","getid",
     "filedir","newhost","package","getping","setcookie","account","generate","constructor","response","server",
     "sizeof","gridwidth","decryptfile","protocol","findpackage","writefile","length","userport","responder","hexagon",
     "newline","module","setnewid","vector","decrypt","setport","setstats","username","listconfig","getlog",
     "number","serverproxy","newserver","loadbytes","password","disconnect"];

var diffh =
    ["loadaltevent","create2axisvector","getfirewallchannel","systemportkey","removeoldcookie","hostnewserver","bufferpingset","uploaduserstats","encodenewfolder","loadregisterlist",
     "sendintelpass","batchallfiles","changeusername","respondertimeout","channelsetpackage","getpartoffile","joinnetworkclient","ghostfilesystem","tempdatapass","unpacktmpfile",
     "disconnectserver","getdatapassword","emitconfiglist","getmysqldomain","decryptdatabatch","changepassword","createnewpackage","dodecahedron","encryptunpackedbatch","callmodule",
     "disconnectchannel","destroybatch","exportconfigpackage","deleteallids","systemgridtype","includedirectory","wordcounter","setnewproxy","removenewcookie","getxmlprotocol",
     "generatecodepack","sizeofhexagon","createfilethread","patcheventlog","createnewsocket","eventlistdir","httpbuffersize","loadloggedpassword","mergesocket","blockthreat",
     "statusofprocess","rootcookieset","checkhttptype","create3axisvector","fileexpresslog"];

console.log("hello, world");

window.setInterval(Autofill, 50);

var setupTimer = window.setInterval(Setup, 100);

function Setup () {
  if(document.getElementById("game-page").style.display=="none")
    return;

	var logwindow = document.getElementById("window-log");
  logwindow.children[1].style.height = "900px";

  clearInterval(setupTimer);
}

function Autofill () {
	var wordimg = document.getElementById("tool-type").firstElementChild;
  var wordinput = document.getElementById("tool-type-word");

  var src = wordimg.getAttribute("src").split("/");
  var d = src[4];
  var wi = src[5];

  var word = "";

  if(d=="e")
    word = diffe[wi];

  if(d=="m")
    word = diffm[wi];

  if(d=="h")
    word = diffh[wi];

  if(wordinput.length==0)
  	wordinput.value = word;
}
