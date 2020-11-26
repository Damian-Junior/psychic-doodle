let price = document.getElementById('unit_price');
let total = document.getElementById('total');
let selectTag = document.querySelector('select');

   

  document.getElementById('addCart').addEventListener('click', ()=>{
  document.getElementById('form').style.display = 'block';
  document.getElementById('main_container').style.opacity = '0.3';
  document.getElementById('main_container').style.transform = 'scale(0.9)';
   
});

document.getElementById('submit').addEventListener('click', (event)=>{
	event.preventDefault();
document.getElementById('submit_response').style.display = 'block';
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