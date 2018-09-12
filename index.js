function escolherMusica(){
	var soma = 0
	var selectSigno = document.getElementById("signo")
	var valueSigno = selectSigno.options[selectSigno.selectedIndex].value;
	var selectSentindo = document.getElementById("sentindo")
	var valueSentindo = selectSentindo.options[selectSentindo.selectedIndex].value;
	var valueIdade = document.getElementById("Idade").value
	var selectFilmes = document.getElementById("filmes")
	var valueFilmes = selectFilmes.options[selectFilmes.selectedIndex].value;




	soma = parseInt(valueSigno) + parseInt(valueSentindo) + parseInt(valueIdade) + parseInt(valueFilmes)
	console.log(soma)


	if(valueIdade < 18){
		alert("Ilariê")
	} else if(soma >30 && soma <60) {
		alert("Evidencias")
	}else if(soma > 60 && soma < 150){
		alert("Fear of the Dark")

	}else if(soma> 150 && soma<250){
		alert("Mansão thug Stronda")
	}else if(soma>250){
		alert("Metallica - Cheio de Manias")
	}

}