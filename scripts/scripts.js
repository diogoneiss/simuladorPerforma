//funcoes para pegar os valores dos elementos de cada questão do questionário. Haverá também um alert caso a pessoa não selecione algum campo



var maquinasValores = [];
maquinasValores[1] = 0.02 / 100;
maquinasValores[2] = 0.03 / 100;
maquinasValores[3] = 0.05 / 100;
maquinasValores[4] = 0.07 / 100;


var adquirintesValores = [];
adquirintesValores[1] = 0.02 / 100;
adquirintesValores[2] = 0.03 / 100;
adquirintesValores[3] = 0.04 / 100;
adquirintesValores[4] = 0.05 / 100;



var cartaoBeneficioValores = [];
cartaoBeneficioValores[1] = 0.25 / 100;
cartaoBeneficioValores[2] = 0;



var conferenciaVendasValores = [];
conferenciaVendasValores[1] = 0.09 / 100;
conferenciaVendasValores[2] = 0.07 / 100;
conferenciaVendasValores[3] = 0.05 / 100;
conferenciaVendasValores[4] = 0.03 / 100;


var antecipacaoValores = [];
antecipacaoValores[1] = 0.5 / 100;
antecipacaoValores[2] = 0.85 / 100;
antecipacaoValores[3] = 1 / 100;

var cobrancaAlugueisValores = [];
cobrancaAlugueisValores[1] = 0;
cobrancaAlugueisValores[2] = 0.1 / 100;

// funcao principal do codigo
function Simulacao() {
	////console.log("Abri a funcao de simulacao de funcoes corretamente.");

	var dinheiroPerdido = 0;
	dinheiroPerdido += calcularMaquinas();
	dinheiroPerdido += calcularConferenciaVendas();
	dinheiroPerdido += calcularAdquirintes();
	dinheiroPerdido += calcularAntecipacaoValores();
	dinheiroPerdido += calcularCartaoBeneficio();
	dinheiroPerdido += calcularAluguelMaquinas();




	return dinheiroPerdido;
}

//calcular quanto dinheiro foi perdido com a maquina selecionada em específico.
function calcularMaquinas() {

	var faturamento = calcularFaturamento();
	//console.log("Faturamento: " + faturamento);
	var form = document.forms.formSimulador;

	var maquinaSelecionada = form.elements.maquinas.value;
	//console.log("Maquina selecionada: " + maquinaSelecionada);

	var dinheiroMaq = maquinasValores[maquinaSelecionada];

	dinheiroMaq *= faturamento;
	//console.log("Dinheiro perdido aqui: "+dinheiroMaq);
	return dinheiroMaq;
}

function calcularAdquirintes() {

	var faturamento = calcularFaturamento();

	var form = document.forms.formSimulador;

	var adquirinteSelecionada = form.elements.adquirintes.value;
	//console.log("Adquirintes selecionadas: " + adquirinteSelecionada);

	var dinheiroMaq = adquirintesValores[adquirinteSelecionada];

	dinheiroMaq *= faturamento;
	//console.log("Dinheiro perdido aqui: "+dinheiroMaq);
	return dinheiroMaq;
}

//funcao precisa de radios pra funcionar
function calcularCartaoBeneficio() {

	var faturamento = calcularFaturamento();
	var cartaoBeneficio;

	var form = document.forms.formSimulador;

	if (form.elements.cartaobeneficio0.checked == true) {
		cartaoBeneficio = form.elements.cartaobeneficio0.value;
		//console.log("Cartao beneficio selecionado: " + cartaoBeneficio);
	} else {
		cartaoBeneficio = form.elements.cartaobeneficio1.value;
		//console.log("Cartao beneficio selecionado: " + cartaoBeneficio);
	}

	var dinheiroMaq = cartaoBeneficioValores[cartaoBeneficio];

	dinheiroMaq *= faturamento;
	//console.log("Dinheiro perdido aqui: "+dinheiroMaq);
	return dinheiroMaq;
}

function calcularAluguelMaquinas() {

	var faturamento = calcularFaturamento();
	var aluguelMaquinas;

	var form = document.forms.formSimulador;

	if (form.elements.aluguelMaquinas0.checked == true) {
		aluguelMaquinas = form.elements.aluguelMaquinas0.value;
		//console.log("AluguelMaquinas selecionado: " + aluguelMaquinas);
	} else {
		aluguelMaquinas = form.elements.aluguelMaquinas1.value;
		//console.log("AluguelMaquinas selecionado: " + aluguelMaquinas);
	}

	var dinheiroMaq = cobrancaAlugueisValores[aluguelMaquinas];

	dinheiroMaq *= faturamento;
	//console.log("Dinheiro perdido aqui: "+dinheiroMaq);
	return dinheiroMaq;
}

function calcularConferenciaVendas() {

	var faturamento = calcularFaturamento();

	var form = document.forms.formSimulador;

	var conferenciaSelecionada = form.elements.conferenciaVendas.value;
	//console.log("ConferenciaVendas selecionada: " + conferenciaSelecionada);

	var dinheiroMaq = conferenciaVendasValores[conferenciaSelecionada];

	dinheiroMaq *= faturamento;
	//console.log("Dinheiro perdido aqui: "+dinheiroMaq);
	return dinheiroMaq;
}

function calcularAntecipacaoValores() {

	var faturamento = calcularFaturamento();

	var form = document.forms.formSimulador;

	var antecipacaoSelecionada = form.elements.antecipacao.value;
	//console.log("antecipacaoSelecionada selecionada: " + antecipacaoSelecionada);

	var dinheiroMaq = antecipacaoValores[antecipacaoSelecionada];

	dinheiroMaq *= faturamento;
	//console.log("Dinheiro perdido aqui: "+dinheiroMaq);
	return dinheiroMaq;
}

function calcularFaturamento() {
	var form = document.forms.formSimulador;
	var faturamento = form.elements.faturamento.value;

	////console.log("Faturamento na funcao: " + faturamento);
	return faturamento;
}

//verificar se todas os campos foram preenchidos
function tudoPreenchido() {
	var tudoCertinho = true;
	var form = document.forms.formSimulador;

	if (form.elements.antecipacao.value == 0)
		tudoCertinho = false;
	if (form.elements.faturamento.value == 0)
		tudoCertinho = false;
	if (form.elements.conferenciaVendas.value == 0)
		tudoCertinho = false;
	if (form.elements.adquirintes.value == 0)
		tudoCertinho = false;
	if (form.elements.maquinas.value == 0)
		tudoCertinho = false;
	if (form.elements.cartaobeneficio0.checked == false && form.elements.cartaobeneficio1.checked == false)
		tudoCertinho = false;
	if (form.elements.aluguelMaquinas0.checked == false && form.elements.aluguelMaquinas1.checked == false)
		tudoCertinho = false;

	return tudoCertinho;
}

function escreverPerda() {
	// so vai executar se tudo estiver preenchido corretamente.
	if (tudoPreenchido()) {
		var perda = Simulacao();
		//arredondar
		perda = Math.round(perda);
		//alert("Perda: "+perda);
		//alert("Cheguei na funcao de escrever perda");
		document.getElementById("outputSimulador").innerHTML = "Você pode estar perdendo aproximadamente R$ " + perda + ",00 	";
		document.getElementById("botaoPreencher").style = "display: inline-block";
	} else
		document.getElementById("outputSimulador").innerHTML = "Você não respondeu todos os campos necessários..";
}

function validarForm() {
	document.getElementById('status').innerHTML = "Sending...";

    formData = {
        'name'     : $('input[name=name]').val(),
        'email'    : $('input[name=email]').val(),
        'Telefone'  : $('textarea[name=Telefone]').val()
    };


   $.ajax({
    url : "mailResposta.php",
    type: "POST",
    data : formData,
    success: function(data, textStatus, jqXHR)
    {

        $('#status').text(data.message);
        if (data.code){//If mail was sent successfully, reset the form.
        	$('#contact-form').closest('form').find("input[type=text], textarea").val("");
			document.getElementById(simuladorCompleto).style = "visibility: visible;";
		}
		},
	
    error: function (jqXHR, textStatus, errorThrown)
    {
        $('#status').text(jqXHR);
    }
});


}
