const API = `https://restcountries.com/v2/all`;

const responseApi = (apiresponse) => {
    return apiresponse.json();


};

const createFlagCard = (item) => {

    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const column = document.createElement("div");
    column.setAttribute('class', 'col-3');
    card.innerHTML = `
        <img src="${item.flags?.svg}" class="card-img-top" />
        <div class="card-body">
          <h5>${item.nativeName}</h5>

          <p class ="fst-italic bg-info">ISO Alpha-2: <span class="fw-light">${item.alpha2Code}</span></p>
          <p class="fst-italic bg-info">ISO Alpha-3: <span class="fw-light">${item.alpha2Code}</span></p>
          <p class="fst-italic bg-info">UN Code: <span class=""fw-light">${item.numericCode}</span></p>
          <button class=" btn btn-primary btn-sm px-4 rounded-pill">click</button>
                     
        </div>
    `

    column.appendChild(card);
    document.querySelector(".row").appendChild(column);

}









const otherresponseApi = (data = []) => {
    console.log("::onDataReceived::", data);
    data.forEach(createFlagCard)
}




fetch(API)
    .then(responseApi)
    .then(otherresponseApi)









