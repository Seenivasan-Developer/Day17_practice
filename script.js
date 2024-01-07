//var f1 =fetch("https://data.covid19india.org/v4/min/data.min.json");
var f1 = fetch("https://restcountries.com/v3.1/all")
f1.then((data)=>data.json()).then((data1)=>foo(data1));

// write the code to print all the country names in console
var container = document.createElement("div");
container.className="container";
var row =document.createElement("div");
row.className="row"

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++)
    {
        var col=document.createElement("div");
        col.className="col-md-4";
       /* col.innerHTML=`
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${data1[i].name.common}</div>
        <div class="card-body text-primary">
          <h5 class="card-title">${data1[i].capital}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>`*/
      col.innerHTML=`
      <div class="card" style="width: 18rem;">
  <img src="${data1[i].flags.svg}" class="card-img-top" alt="${data1[i].flags.alt}">
  <div class="card-body">
  <h5 class="card-title">Country Name: ${data1[i].name.common}</h5>
    <p class="card-text">Capital: ${data1[i].capital}</p>
  </div>
</div>`
      row.append(col);
    }
    container.append(row);
    document.body.append(container);
}