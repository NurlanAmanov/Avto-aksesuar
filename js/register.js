
const hideshow=document.getElementById('hideshow')
const agnshodimg=document.getElementById('agnshodimg')
const pass=document.getElementById('pass')
const passagn=document.getElementById('passagn')
function showpas(){

 if(pass.type==='password') {
  pass.type='text'
  hideshow.src="../img/password-show.svg"
 }else{
  pass.type==='text'
  pass.type='password'
  hideshow.src="../img/password-hide.svg"
 }
}
function showpas2(){

 if(passagn.type==='password') {
  passagn.type='text'
  agnshodimg.src="../img/password-show.svg"
 }else{
  passagn.type==='text'
  passagn.type='password'
  agnshodimg.src="../img/password-hide.svg"
 }
}
