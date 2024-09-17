
const hideshow=document.getElementById('hideshow')
const hideshow2=document.getElementById('hideshow2')
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
    hideshow2.src="../img/password-show.svg"
 }else{
    passagn.type==='text'
    passagn.type='password'
    hideshow2.src="../img/password-hide.svg"
 }
}
