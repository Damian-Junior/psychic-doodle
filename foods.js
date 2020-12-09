let price = document.getElementById('unit_price');
let total = document.getElementById('total');
let selectTag = document.querySelector('select');
let media = window.matchMedia('(min-width: 300px) and (max-width: 800px)');
   
  document.getElementById('addCart').addEventListener('click', ()=>{
  document.getElementById('form').style.display = 'block';
  document.getElementById('main_container').style.opacity = '0.3';
  document.getElementById('main_container').style.transform = 'scale(0.9)';
  window.scrollTo(0, 1100);

});

document.getElementById('submit').addEventListener('click', (event)=>{
	event.preventDefault();
    document.getElementById('submit_response').style.display = 'block';
    document.getElementById('submit').style.transform = 'scale(0.9)';
    window.scrollTo(0, 0);
});

document.getElementById('submit_response').addEventListener('click', ()=>{
document.getElementById('form').style.display = 'none';
document.getElementById('submit_response').style.display = 'none';
document.getElementById('main_container').style.opacity = '1';
document.getElementById('main_container').style.transform = 'scale(1)';
});
total.innerHTML = 15000;
selectTag.addEventListener('change', ()=>{
	total.innerHTML = selectTag.value * 15000;
});

/*code section ofr te media sceen at max-width 800px */
document.getElementById('show').addEventListener('click', ()=>{
  
 if(media.matches){
    let link = document.querySelectorAll('.links');
        link.forEach((a)=>{
        a.style.display = 'block';
    });
    document.getElementById('show').style.display = 'none';
    document.getElementById('changed').style.display = 'block';  
   }
  
});


document.getElementById('changed').addEventListener('click', ()=>{
  if(media.matches){
    let link = document.querySelectorAll('.links');
    link.forEach((a)=>{
      a.style.display = 'none';
    });
    document.getElementById('show').style.display = 'block';
    document.getElementById('changed').style.display = 'none'; 
  }
  
});

/*end of the media screen of the screeen less then 800px*/

