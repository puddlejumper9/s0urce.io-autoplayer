// ==UserScript==
// @name         s0urce.io-autoplayer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  play s0urce.io automatically
// @author       Nolan Shettle
// @match        http://s0urce.io/
// @grant        none
// ==/UserScript==

var wordlists =
{"e":["data","bytes","xml","emit","key","intel","pass","count","user","right","dir","stat","num","remove","status","socket","list","bit","url","http","info","get","type","call","signal","set","anon","temp","domain","cookies","log","join","write","event","ping","file","buffer","send","net","delete","ghost","poly","loop","part","port","add","point","client","com","left","system","size","val","init","reset","add","root","load","handle","upload","global","host",],
"m":["setping","hexagon","getid","encrypt","encryptfile","eventtype","decrypt","getping","gridwidth","sizeof","gridheight","response","getfile","disconnect","datatype","process","proxy","connect","getpass","newline","getkey","loadbytes","encode","newhost","urlcheck","username","serverproxy","writefile","setnewid","generate","responder","constructor","setstats","findpackage","decryptfile","channel","number","setport","hostserver","getlog","package","account","fillgrid","vector","export","module","userport","download","listconfig","getinfo","syscall","filedir","newserver","length","thread","command","accountname","setcookie","config","server","protocol","mysql","filetype","threat","password","userid",],
"h":["checkhttptype","uploaduserstats","disconnectserver","disconnectchannel","rootcookieset","getfirewallchannel","loadaltevent","mergesocket","getxmlprotocol","loadregisterlist","getpartoffile","tempdatapass","bufferpingset","removeoldcookie","unpacktmpfile","decryptdatabatch","systemgridtype","createnewpackage","httpbuffersize","joinnetworkclient","callmodule","createnewsocket","ghostfilesystem","create3axisvector","setnewproxy","includedirectory","encryptunpackedbatch","destroybatch","patcheventlog","loadloggedpassword","fileexpresslog","getdatapassword","dodecahedron","exportconfigpackage","sendintelpass","emitconfiglist","batchallfiles","encodenewfolder","create2axisvector","getmysqldomain","statusofprocess","blockthreat","removenewcookie","sizeofhexagon","deleteallids","changeusername","wordcounter","eventlistdir","hostnewserver","changepassword","createfilethread","respondertimeout","systemportkey","channelsetpackage","generatecodepack",],
};

window.setInterval(Autoplay, AutoplayDelay);
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
var cooldown = 0;

function Autoplay () {
  if(cooldown > 0){
    cooldown -= AutoplayDelay;
    return;
  }

  if(IsElementShown("login-page")){
    ClickElement("login-play");
    cooldown = 200;
    return;
  }

  var word = GetWord();

  if(SuccessWindowShown()){
    CloseSuccessWindow();
    return;
  }

  if(IsBlankWord()){

    if(HackButtonShown()){
      ClickHackButton();
      return
    }

    if(IsElementShown("window-other")){
      OpenNextPort();
      cooldown = 100;
      return;
    }
  }

  if(CanAuto()){
    // do not fill if word is unknown
    if(word != ""){
      FillWord(word);
      lastword = word;
    }
  }

  FocusWordInput();
}

function HackButtonShown() {
  return IsElementShown("window-other-button");
}

function ClickHackButton() {
  ClickElement("window-other-button");
}

function ClickElement(elementID) {
  document.getElementById(elementID).click();
}

function CloseSuccessWindow() {
  ClickElement("targetmessage-button-send");
}

function SuccessWindowShown() {
  return IsElementShown("topwindow-success");
}

function IsElementShown(elementID) {
  return document.getElementById(elementID).style.display != "none";
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

function ClickPortButton(port) {
  ClickElement("window-other-port"+port);
}

function OpenNextPort() {
  ClickPortButton(lastport+1);

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

  word = wordlists[d][wi];

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
