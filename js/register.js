
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
const slider=document.getElementById('slider')
const leftbtn=document.getElementById('leftbtn')
const rghtbtn=document.getElementById('rghtbtn')
leftbtn.addEventListener('click', () => {
    slider.scrollLeft -= 100; 
  });
  rghtbtn.addEventListener('click', () => {
    slider.scrollLeft += 100; 
  });
