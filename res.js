

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
let media = window.matchMedia('(min-width: 300px) and (max-width: 800px)');
var arr = [];

/*end of the varaible declaration*/

formContainer.addEventListener('submit', loadJson);


/*function for the fetching of the foods from the json file*/

function loadJson(event) {
  event.preventDefault();
  let userChoice = searchInput.value;
  fetch('photoInfo.json')
    .then(response => response.json())
    .then((data) => {
      let genHTML = '';

       data.filter((choice) => {
         if (choice.Food_Type.toLowerCase() == userChoice.toLowerCase() && userChoice != '')
             return choice;      // this filter fuction helps to select the file that has the food type that mathceswith user selection and returns the new array;
      }).map((result) => {
      
             genHTML +=
                  `<div class="foods">
                        <img src="${result.url}" class= "foodimages">
                        <div class="food_info">
                            <p class="title">${result.title}</p>
                          
                        <a href = "items.html" id="${result.id}" class="view_button">View Recipe</a>
                        </div>
                        <p class="item_data">Calory: ${result.calory}</p>
                        <p class="item_data">Diet_Label: 1</p>
                        <p class="item_data">Health_Label: ${result.health_label}</p>   
                    </div>
                    `;
        arr.push(result)

      });
      foodContainer.innerHTML = genHTML;
      // function to handle the updating of the items.html
      
      let click = document.querySelectorAll("a");
            click.forEach((b) => {
            b.addEventListener("click", () => {
              arr.forEach((items) => {
                if (items.id == b.id){
                  var data = JSON.parse(localStorage.getItem('rawData'));
                   data[0] = items.title;
                   data[1] = items.url;
                  localStorage.setItem('EditedData',JSON.stringify(data));
                }
                   
              });
          //console.log(arr)
        });
      });
    }).catch((error) => {
      alert('food not found: Reason:' + error);
    })
  autoDiv.innerHTML = '';

}




/*end of the fetch function of the form on submit*/
/*function to add click*/


/*function for the autofill action of the form elemeent*/

searchInput.addEventListener('keyup', () => {
  let inputValue = searchInput.value;
  autoDiv.innerHTML = '';
  let searchResult = allFoods.filter((element) => {
    return element.toLowerCase().startsWith(inputValue.toLowerCase());
  });

  searchResult.forEach((result) => {
    let divElement = document.createElement('div');
    divElement.innerHTML = result;
    divElement.addEventListener('click', () => { search_input.value = divElement.innerHTML; searchInput.focus(); });
    autoDiv.appendChild(divElement);
    if (search_input.value == '')
      autoDiv.innerHTML = '';
  });
});

/*end of the auto fill fucntion of the form element*/


/*code section ofr te media sceen at max-width 800px */
document.getElementById('show').addEventListener('click', () => {

  if (media.matches) {
    let link = document.querySelectorAll('.links');
    link.forEach((a) => {
      a.style.display = 'block';
    });
    document.getElementById('show').style.display = 'none';
    document.getElementById('changed').style.display = 'block';
  }

});


document.getElementById('changed').addEventListener('click', () => {
  if (media.matches) {
    let link = document.querySelectorAll('.links');
    link.forEach((a) => {
      a.style.display = 'none';
    });
    document.getElementById('show').style.display = 'block';
    document.getElementById('changed').style.display = 'none';
  }

});


/*end of the media screen of the screeen less then 800px*/

/*section for the background slider*/
setInterval(slider, 8000);

function slider() {
  let slid = document.querySelector('#slider');
  slid.style.width = '-200%';
  setInterval(slider2, 8500);
}

function slider2() {
  let slid = document.querySelector('#slider');
  slid.style.width = '100%';
  setInterval(slider, 8400);
}

/* end of the section for slider  */
