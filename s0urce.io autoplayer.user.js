// ==UserScript==
// @name         s0urce.io-autoplayer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  play s0urce.io automatically
// @author       Nolan Shettle
// @match        http://s0urce.io/
// @grant        none
// ==/UserScript==

var diffe =
   ["data","part","loop","xml","list","load","user","port","emit","intel",
    "socket","get","bytes","ghost","delete","send","anon","add","type","point",
    "event","net","add","client","status","system","val","join","poly","init",
    "num","domain","url","log","dir","count","remove","upload","handle","ping",
    "temp","reset","write","key","info","cookies","right","left","pass","http",
    "file","buffer","set","global","signal","call","bit","host","com","root",
    "size","stat"];

var diffm =
   ["syscall","threat","encryptfile","setcookie","userid","eventtype","findpackage","password","encrypt","response",
    "getlog","number","accountname","package","setport","getpass","connect","listconfig","filetype","protocol",
    "getinfo","command","module","config","userport","process","encode","filedir","datatype","setping",
    "newserver","username","writefile","getkey","urlcheck","serverproxy","newline","thread","server","getping",
    "setstats","gridwidth","decrypt","fillgrid","channel","generate","download","mysql","proxy","loadbytes",
    "gridheight","account","newhost","sizeof","vector","length","getid","responder","export","setnewid",
    "constructor","disconnect","hostserver","decryptfile","getfile","hexagon"];

var diffh =
   ["setnewproxy","blockthreat","removeoldcookie","fileexpresslog","removenewcookie","deteleallids","create2axisvector","uploaduserstats","encryptunpackedbatch","generatecodepack",
    "getxmlprotocol","statusofprocess","ghostfilesystem","wordcounter","sizeofhexagon","checkhttptype","emitconfiglist","systemgridtype","unpacktmpfile","loadloggedpassword",
    "respondertimeout","getmysqldomain","createnewpackage","decryptdatabatch","loadregisterlist","callmodule","encodenewfolder","eventlistdir","sendintelpass","patcheventlog",
    "includedirectory","mergesocket","systemportkey","channelsetpackage","batchallfiles","disconnectchannel","create3axisvector","getpartoffile","createfilethread","getfirewallchannel",
    "bufferpingset","hostnewserver","joinnetworkclient","loadaltevent","createnewsocket","tempdatapass","exportconfigpackage","disconnectserver","changeusername","rootcookieset",
    "getdatapassword","dodecahedron","destroybatch","httpbuffersize","changepassword"]

window.setInterval(Autofill, 50);

var lastword = "";

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

  if(wordinput.value.length==0 || wordinput.value == lastword){
  	wordinput.value = word;
    lastword = word;
  }
}
