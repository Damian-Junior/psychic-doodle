/*variable declaratoion*/
let searchInput = document.querySelector('#search_input');
let navContainer = document.querySelector('.nav_container');
let link = document.querySelectorAll('.links');
let formContainer = document.querySelector('form');
let foodImage = document.querySelectorAll('.foodimages');
let autoDiv = document.querySelector('.autofill');
let foodContainer = document.querySelector('.food_container');
let index = 0;
let allFoods = ['chicken', 'bread', 'pizza', 'rice', 'beans', 'yam']; 
let viewButtom = document.querySelectorAll('.view_button');
/*end of the varaible declaration*/


/*function for the fetching of the foos from the json file*/ 
formContainer.addEventListener('submit', (event)=>{
	event.preventDefault();
   let userChoice = searchInput.value;
	fetch('photoInfo.json')
	.then(response => response.json())
	.then((data) =>{
		let genHTML = '';

	 data.filter((choice) =>{
		if(choice.Food_Type.toLowerCase() == userChoice.toLowerCase() && userChoice != '')
		return choice;  // this filter fuction helps to select the file that has the food type that mathceswith user selection and returns the new array
	}).map((result) =>{
            genHTML += 
            `<div class="foods">
                 <img src="${result.url}" class= "foodimages">
                 <div class="food_info">
                     <p class="title">This is a recipe</p>
                     <a href="${result.foodUrl}" target="_blank " class="view_button">View recipe</a>
                 </div>
                 <p class="item_data">Calory: 12kg</p>
                 <p class="item_data">Diet_Label: 1</p>
                 <p class="item_data">Health_Label: Sugar, peanut, vitamins, and all minerals</p>   
             </div>
            `
		 });
		 foodContainer.innerHTML = genHTML;
	      
		 })
	autoDiv.innerHTML = '';
});
/*end of the fetch function of the form on submit*/


/*function for the autofill action of the form elemeent*/

searchInput.addEventListener('keyup', ()=>{
	let inputValue = searchInput.value;
  autoDiv.innerHTML = '';
  let searchResult = allFoods.filter((element)=>{
  	return element.toLowerCase().startsWith(inputValue.toLowerCase());
  });

    searchResult.forEach((result)=>{
  	let divElement = document.createElement('div');
  	divElement.innerHTML = result;
  	divElement.addEventListener('click', ()=>{search_input.value = divElement.innerHTML; searchInput.focus();});
  	autoDiv.appendChild(divElement);
  	if(search_input.value== '')
  	autoDiv.innerHTML='';
  });
});

/*end of the auto fill fucntion of the form element*/



/* this is the code to make the nav bar appear and disapperf at screen size 800px*/

let media = window.matchMedia('(max-width:800px)');

navContainer.addEventListener('click', ()=>{

	if(media.matches){
		 link.forEach((aTag)=>{
  		aTag.style.display = 'block';
});

}
});

navContainer.addEventListener('dblclick', ()=>{
   
    if (media.matches) {
    	link.forEach((aTag)=>{
    		aTag.style.display = 'none';
    	});
    }
    else{
    	link.forEach((aTag)=>{
    		aTag.style.display = 'block';
    	});
    }

});

/* end of the code section ofr the nav bar*/ 

/*code section ofr te media sceen at max-width 800px */
document.getElementById('burger').addEventListener('click', ()=>{
  
 if(media.matches){
    let link = document.querySelectorAll('.links');
        link.forEach((a)=>{
        a.style.display = 'block';
      
      
  
    });
    document.getElementById('burger').innerHTML = '&#10005';  
   }
  
});


document.getElementById('burger').addEventListener('dblclick', ()=>{
  if(media.matches){
    let link = document.querySelectorAll('.links');
    link.forEach((a)=>{
      a.style.display = 'none';
    });
    document.getElementById('burger').innerHTML = '&#9776;';
    document.getElementById('burger').style.color = 'tomatoes'; 
  }
  
});

/*end of the media screen of the screeen less then 800px*/