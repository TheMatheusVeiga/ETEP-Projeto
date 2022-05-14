//criando a tabela
function setList(list){
	var table = '<thead><tr><td>Produto</td><td>Quantidade</td><td>Preço</td><td>Ação</td></tr></thead><tbody>';
	for(var key in list){
		table += '<tr><td>'+ formatProduct(list[key].product) +'</td><td>'+ formatStock(list[key].stock) +'</td><td>'+ formatPrice(list[key].price) + '</td><td>'+ formatType(list[key].type) + '</td><td><button class="btn btn-default" onclick="setUpdate('+key+');">Editar</button> <button class="btn btn-default" onclick="deleteData('+key+');">Excluir</button></td></tr>';
	}
	table += '</tbody>';

	document.getElementById('listTable').innerHTML = table;
	getTotal(list);
	saveListStorage(list);
}

//Função para adicionar uma nova linha na tabela
function addToTable() {

    //Definindo as variaveis e recebendo os dados
    let name = document.getElementById('product').value;
    let email = document.getElementById('price').value;
    let phone = document.getElementById('type').value;
    let work = document.getElementById('stock').value;
    let table = document.getElementById("myTable");

    let tableSize = table.rows.length; //Calculando o tamanho da Tabela
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    row.id = tableSize; //Adicionando o id no elemento a ser criado

    //Criando o codigo do botão para remover a linha
    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Remover | Editar</button>";

    //formatando o nome do produto
    function formatProduct(product){
	    var str = desc.toLowerCase();
	    str = str.charAt(0).toUpperCase() + str.slice(1);
	    return str;
    }

    //formatando a quantidade
    function formatStock(stock){
	    return parseInt(stock);
    }

    //formatando o preço
    function formatValue(value){
	    var str = parseFloat(value).toFixed(2) + "";
	    str = str.replace(".",",");
	    str = "$ " + str;
	    return str;
    }


    //Preenchendo as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = phone;
    cell5.innerHTML = work;
    cell6.innerHTML = btnCode;

    //Limpando os campos de inserção de dados
    document.getElementById('product').value = "";
    document.getElementById('price').value = "";
    document.getElementById('type').value = "";
    document.getElementById('stock').value = "";

    //Retornando 'false' para impedir o reload da pagina
    return false;
}

//Função para remover uma linha
function removeToTable(id) {

    let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
    row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
    row.parentNode.removeChild(row); //Removendo a linha

    //Retornando 'false' para impedir o reload da pagina
    return false;
}

//Função para editar a linha 
function updateData(){
	if(!validation()){
		return;
	}
	var id = document.getElementById("idUpdate").value;
	var produto = document.getElementById("product").value;
	var preco = document.getElementById("price").value;
	var tipo = document.getElementById("type").value;
    var estoque = document.getElementById("stock").value;

	list[id] = {"product":produto, "stock":estoque, "price":preco, "type":tipo};
	resetForm();
	setList(list);
}

//botões de editar
function setUpdate(id){
	var obj = list[id];
	document.getElementById("product").value = obj.produto;
	document.getElementById("stock").value = obj.estoque;
	document.getElementById("price").value = obj.preco;
    document.getElementById("type").value = obj.tipo;
	document.getElementById("btnUpdate").style.display = "inline-block";
	document.getElementById("btnAdd").style.display = "none";

	document.getElementById("inputIDUpdate").innerHTML = '<input id="idUpdate" type="hidden" value="'+id+'">';
}

//limpa os campos de editar
function resetForm(){
	document.getElementById("product").value = "";
	document.getElementById("stock").value = "";
	document.getElementById("price").value = "";
    document.getElementById("type").value = "";
	document.getElementById("btnUpdate").style.display = "none";
	document.getElementById("btnAdd").style.display = "inline-block";
	
	document.getElementById("inputIDUpdate").innerHTML = "";
	document.getElementById("errors").style.display = "none";
}

$(function(){
    $(".button-collapse").sideNav();
});