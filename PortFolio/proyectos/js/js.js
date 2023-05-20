const header = document.querySelector('header');
const section = document.querySelector('section');

const requestURL = './json/productosf.json'

const request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const productosf = request.response;
    populateHeader(productosf);
    showProductos(productosf);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['titulotienda'];
    header.appendChild(myH1);
    const myPara = document.createElement('p');
    header.appendChild(myPara);
}



function showProductos(jsonObj) {
    const productos = jsonObj['productos'];
  
    for (var i = 0; i < productos.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myPara4 = document.createElement('p');
      const myPara5 = document.createElement('img');
      const myPara6 = document.createElement('p');
      const myPara7 = document.createElement('p');
  
      myH2.textContent = productos[i].nombre;
      myPara1.textContent = productos[i].link;
      myPara5.src = productos[i].imagen;

  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myPara5);
      myArticle.appendChild(myPara6);
      myArticle.appendChild(myPara7);
  
      section.appendChild(myArticle);
    }
}
  
  