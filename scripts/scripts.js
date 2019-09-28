//funcoes para pegar os valores dos elementos de cada questão do questionário. Haverá também um alert caso a pessoa não selecione algum campo


	 function Simulacao() {
			
			var form = document.forms("formSimulador");
			var faturamento = 0;
			//var respostas = getSelectedValues();
			var dinheiroPerdido = 0;

			dinheiroPerdido += calcularMaquinas();

			alert(dinheiroPerdido);
			return dinheiroPerdido;
		}

		function calcularMaquinas(){
			var maquinasValores = new Array();
			var form = document.forms("formSimulador");
			var faturamento = form.elements["faturamento"];
			
			maquinasValores[1] = 0.1 / 100;
			maquinasValores[2] = 0.2 / 100;
			maquinasValores[3] = 0.3 / 100;
			maquinasValores[4] = 0.4 / 100;
			maquinasValores[5] = 0.5 / 100;

			var maquinaSelecionada = form.elements["maquinas"];
			var dinheiroMaq = maquinasValores[maquinaSelecionada];
			alert("Dinheiro perdido com máquina: "+dinheiroMaq);
			return faturamento * dinheiroMaq;
		}

		
		


    function getSelectedValues(){

            var selectedFaturamento = document.getElementById("faturamento").value;
            var selectedAdquirintes= document.getElementById("adquirintes").value;
            var selectedMaquinas= document.getElementById("maquinas").value;
            var selectedConferenciaVendas = document.getElementById("conferenciaVendas").value;
            /*
            if(selectedFaturamento == 0 || selectedMaquinas == 0 || selectedConferenciaVendas == 0 || selectedAdquirintes == 0)
              alert("erro! Algum dos valores não foi selecionado.");
            else
              alert(selectedFaturamento + selectedAdquirintes + selectedMaquinas + selectedConferenciaVendas);
				*/
				var retorno = {
					fat: selectedFaturamento,
					adq: selectedAdquirintes,
					maq: selectedMaquinas,
					conf: selectedConferenciaVendas
				};
				alert(retorno.fat);
				return retorno;
		  }

	function escreverPerda(){
			var perda = Simulacao();
			alert("Perda: "+perda);
			//alert("Cheguei na funcao de escrever perda");
			document.getElementsById("textoPlaceholder").value =  "Você está perdendo "+perda + " reais.";

			alert("Você está perdendo "+perda + " reais.");
		}

