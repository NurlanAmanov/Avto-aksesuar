function passresetgo(){
    const resetle=document.getElementById('resetle')
    if(resetle.style.display==='none'||resetle.style.display===''){
        resetle.style.display="block"
    } 
}
function closreset(){
    const resetle=document.getElementById('resetle')
    if(resetle.style.display==='block'){
        resetle.style.display="none"
    } 
    
}

function profduzelis(){
    let profiduzlt = document.getElementById('profiduzlt');
    let unvankitab = document.getElementById('unvankitab'); // unvankitab elementini əldə edirik
    if(profiduzlt.style.display === 'flex'){
        profiduzlt.style.display = 'none'; // Bağlayır
    } else {
        profiduzlt.style.display = 'flex'; // Açır
        unvankitab.style.display = 'none'; // Digər elementi gizlədir
    }
}

function openumav(){
    let unvankitab=document.getElementById('unvankitab')
    if(unvankitab.style.display==='none'  || unvankitab.style.display===''){
        unvankitab.style.display='flex' ,
         profiduzlt.style.display='none'
    }
}