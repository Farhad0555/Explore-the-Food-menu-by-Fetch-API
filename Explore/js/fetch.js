const fetchapi=(search)=>{
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
  .then(res => res.json())
  .then(datas=>autoloadapi(datas.meals))
}

const autoloadapi=(datas)=>{
  const mainapidiv = document.getElementById('mainapidiv');
  mainapidiv.innerHTML=``;
  datas.forEach(data=>{
    const newdiv=document.createElement('div');
    newdiv.innerHTML=`
          <div class="col" onclick="viewapimeal(${data.idMeal})">
                  <div class="card h-100" >
                    <div class="card" >
                        <img src="${data.strMealThumb}" class="card-img-top" alt="">
                         <div class="card-body">
                           <h5 class="card-title">${data.strMeal}</h5>
                           <p class="card-text">${data.strInstructions.slice(0,200)}</p>
                           <a href="#" class="btn btn-primary">Product Detail</a>
                         </div>         
                       </div> 
                  </div>  
    `
    mainapidiv.appendChild(newdiv);

  })

}

const searchbtn=()=>{
  const inputfield = document.getElementById('input-field');
  const inputfieldText = inputfield.value;
  //console.log('searching',inputfieldText);
  fetchapi(inputfieldText);
  inputfield.value=``;
}
fetchapi('');

const viewapimeal =(idMeal)=>{  
  const url01 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url01)
  .then( res => res.json())
  .then( meal =>loadviewdetalapi(meal.meals[0]))
}

const loadviewdetalapi=(idMeal)=>{
  const DeatilViewofMenu = document.getElementById('DeatilViewofMenu');
  DeatilViewofMenu.innerHTML=``;
  const newviewdetail = document.createElement('div');
  newviewdetail.innerHTML=`
  <div class="col">
                  <div class="card h-100" >
                    <div class="card" >
                        <img src="${idMeal.strMealThumb}" class="card-img-top" alt="">
                         <div class="card-body">
                           <h5 class="card-title">${idMeal.strMeal}</h5>
                           <p class="card-text">${idMeal.strInstructions.slice(0,200)}</p>
                           
                         </div>         
                       </div> 
                  </div>  
  `
  DeatilViewofMenu.appendChild(newviewdetail);

}
