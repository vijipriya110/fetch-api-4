var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=`<div class="col-md-4">
        <div class="card" style="width: 18rem;">
  <img src="${data1[i].flag}" class="card-img-top" alt="country flag">
  <div class="card-body">
    <p class="card-text">${data1[i].name}<br>capital: ${data1[i].capital}<br>population: ${data1[i].population}.</p>
  </div>
</div>
</div>`
    }
    document.body.append(container);
}
