let mls = 0
let _s = 0
let _min = 0
let _hrs = 0
let _flg = 0
let _intvs
let _MlSeconds = document.getElementById("MlSeconds")
let _Seconds = document.getElementById("Seconds")
let _Minutes = document.getElementById("Minutes")
let _Hours = document.getElementById("Hours")
function _start(){

if(mls < 100){
if(mls < 10){
   _MlSeconds.innerHTML = "0" + mls
}
else{
   _MlSeconds.innerHTML = mls
}
mls++

if(mls == 100){
   _s++
   if(_s < 10){
   _Seconds.innerHTML = "0" + _s
}
else{
   _Seconds.innerHTML = _s
}
   
   
if(_s >= 59){
_s = 0
_min++
if(_min<10){
_Minutes.innerHTML ="0" + _min
}
else{
_Minutes.innerHTML = _min
}


if(_min>=59){
_min = 0
_hrs++
if(_hrs<10){
_Hours.innerHTML = "0" + _hrs
}
else{
_Hours.innerHTML = _hrs 
}
}
}
}
}
else{
mls = 0
}


}
function _start1(){
if(_flg == 0){
_intvs = setInterval(_start, 10)
_flg++
}
}
function _stop(){
clearInterval(_intvs)
_flg = 0
}
function _reset(){
 mls = 0
 _s = 0
 _min = 0
 _hrs = 0
_flg = 0
_Hours.innerHTML ="0" + _hrs 
_Minutes.innerHTML ="0" + _min
_Seconds.innerHTML ="0" + _s
_MlSeconds.innerHTML = "0" + mls
clearInterval(_intvs)
document.getElementById("parcham").innerHTML = ""
}
function _parch() {
let _p = document.createElement("p")
document.getElementById("parcham").appendChild(_p).innerHTML = " H : "+ _hrs + " M : " + _min + " S : " + _s + " Ms : " + mls +" "
}

