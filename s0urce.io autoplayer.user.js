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
   ["setnewproxy","blockthreat","removeoldcookie","fileexpresslog","removenewcookie","deleteallids","create2axisvector","uploaduserstats","encryptunpackedbatch","generatecodepack",
    "getxmlprotocol","statusofprocess","ghostfilesystem","wordcounter","sizeofhexagon","checkhttptype","emitconfiglist","systemgridtype","unpacktmpfile","loadloggedpassword",
    "respondertimeout","getmysqldomain","createnewpackage","decryptdatabatch","loadregisterlist","callmodule","encodenewfolder","eventlistdir","sendintelpass","patcheventlog",
    "includedirectory","mergesocket","systemportkey","channelsetpackage","batchallfiles","disconnectchannel","create3axisvector","getpartoffile","createfilethread","getfirewallchannel",
    "bufferpingset","hostnewserver","joinnetworkclient","loadaltevent","createnewsocket","tempdatapass","exportconfigpackage","disconnectserver","changeusername","rootcookieset",
    "getdatapassword","dodecahedron","destroybatch","httpbuffersize","changepassword"]

window.setInterval(Autoplay, 100);
var setupTimer = window.setInterval(SetupDelay, 100);

function SetupDelay () {
    if(document.getElementById("game-page").style.display=="none")
      return;

    window.setTimeout(Setup, 100);
    clearInterval(setupTimer);
}

function Setup () {
  var listwindow = document.getElementById("window-list");
  listwindow.style.top = "90px";
  listwindow.style.left = "260px";

  var targetwindow = document.getElementById("window-other");
  targetwindow.style.top = "90px";
  targetwindow.style.left = "540px";

  var cdmwindow = document.getElementById("window-tool");
  cdmwindow.style.top = "90px";
  cdmwindow.style.left = "860px";

  var logwindow = document.getElementById("window-log");
  logwindow.children[1].style.height = "900px";
  logwindow.style.top = "90px";
  logwindow.style.left = "1430px";

  var chatwindow = document.getElementById("window-chat");
  chatwindow.style.top = "660px";
  chatwindow.style.left = "100px";
  chatwindow.style.display = "";

  var pcwindow = document.getElementById("window-computer");
  pcwindow.style.top = "660px";
  pcwindow.style.left = "480px";
  pcwindow.style.display = "";

  var minerwindow = document.getElementById("window-miner");
  minerwindow.style.top = "550px";
  minerwindow.style.left = "1080px";
  minerwindow.style.display = "";
}

var lastword = "";
var lastport = 0;

function Autoplay () {
  var word = GetWord();

  if(CanAuto()){
    if(IsBlankWord()){
      OpenNextPort();
    }

    // do not fill if word is unknown
    if(word != ""){
      FillWord(word);
      lastword = word;
    }
  }
}

function IsBlankWord() {
  return GetWordSrcStr() == "../client/img/words/template.png";
}

function CanAuto() {
  var filledword = GetFilledWord();
         // only if input is blank
                             // or if the word is the last automatically filled word
  return filledword == "" || filledword == lastword;
}

function OpenNextPort() {
  var portButton = document.getElementById("window-other-port"+(lastport+1));
  portButton.click();

  FocusWordInput();

  lastport = (lastport + 1) % 3;
}

function GetWordSrcStr () {
  var wordimg = document.getElementById("tool-type").firstElementChild;
  return wordimg.getAttribute("src");
}

function GetWord () {
  var srcparts = GetWordSrcStr().split("/");
  var d = srcparts[4];
  var wi = srcparts[5];

  var word = "";

  if(d=="e")
    word = diffe[wi];

  if(d=="m")
    word = diffm[wi];

  if(d=="h")
    word = diffh[wi];

  return word;
}

function FocusWordInput() {
  GetWordInput().focus();
}

function GetWordInput() {
  return document.getElementById("tool-type-word");
}

function GetFilledWord() {
  return GetWordInput().value;
}

function FillWord(word) {
  GetWordInput().value = word;
}

function SubmitWord() {
  var wordform = document.getElementById("tool-type-form");

  // TODO make work
}
