const products = ['1','']
const tableBody = document.querySelector('#product-table tbody')

function addProductToTable(product) {
    if (product.name.length != 0 && product.year.length != 0 && product.price.length != 0 && product.color.length != 0 && product.status.length != 0) {
      tableBody.innerHTML += `<tr>
      <td scope="row" id="tr">${product.id}</td>
      <td>${product.name}</td>
      <td>${product.year}</td>
      <td>${product.price}$</td>
      <td>${product.color}</td>
      <td>${product.status}</td>
  </tr>`;
    }
    else{
      alert('You did not enter some values. Check and than try again')
      products.pop()
    }
    
}

function readProduct() {
    const nameInput = document.getElementById('nameInput')
    const priceInput = document.getElementById('priceInput')
    const yearInput = document.getElementById('yearInput')
    const colorInput = document.getElementById('colorInput')
    const statusInput = document.getElementById('statusInput')

    return {
        id: products.length + 1,
        name: nameInput.value,
        year: yearInput.value,
        price: priceInput.value,
        color: colorInput.value,
        status: statusInput.value   
    }
}

const addBtn = document.getElementById('add-product-btn')
const searchBtn = document.getElementById('searchBtn')
const clearBtn = document.getElementById('clear-all-btn');

addBtn.onclick = () => {
    const newProduct = readProduct()

    products.push(newProduct)

    addProductToTable(newProduct)

}

function searchTable() {
  // Отримуємо значення поля введення
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  
  // Отримуємо таблицю і всі рядки
  var table = document.getElementById("product-table");
  var tbody = table.getElementsByTagName("tbody")[0];
  var rows = tbody.getElementsByTagName("tr");

  // Ітеруємося по кожному рядку і перевіряємо, чи містить модель введений текст
  for (var i = 0; i < rows.length; i++) {
    var cols = rows[i].getElementsByTagName("td");
    var model = cols[1].textContent.toUpperCase();

    if (model.indexOf(filter) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

searchBtn.onclick = () => {
  searchTable()
}

clearBtn.onclick = () => {
  tableBody.innerHTML = '';
  products.splice(0);
}