function submitQuiz() {
		console.log('submitted');

		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4')+ answerScore('q5') + answerScore('q6')+ answerScore('q7') + answerScore('q8'));
		console.log("CalcScore: " + calcScore); 

		function respostacorreta (correctStringNo, qNumber) {
			console.log("qNumber: " + qNumber); 
			return ("A respota correta para a pergunta " + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).innerHTML) + "</strong>");
			}

		if (answerScore('q1') === 0) {
			document.getElementById('respostacorreta1').innerHTML = respostacorreta('correctString1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('respostacorreta2').innerHTML = respostacorreta('correctString2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('respostacorreta3').innerHTML = respostacorreta('correctString3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('respostacorreta4').innerHTML = respostacorreta('correctString3', 4);
		}
		if (answerScore('q5') === 0) {
			document.getElementById('respostacorreta5').innerHTML = respostacorreta('correctString4', 5);
		}
		if (answerScore('q6') === 0) {
			document.getElementById('respostacorreta6').innerHTML = respostacorreta('correctString5', 6);
		}
		if (answerScore('q7') === 0) {
			document.getElementById('respostacorreta7').innerHTML = respostacorreta('correctString7', 7);
		}
		
		if (answerScore('q8') === 0) {
			document.getElementById('respostacorreta8').innerHTML = respostacorreta('correctString8', 8);
		}

		var questionCountArray = document.getElementsByClassName('questao');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

		var showScore = "Teu Score: " + calcScore +"/" + questionCounter;

		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Score perfeito</strong>"
		};
		document.getElementById('userScore').innerHTML = showScore;
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});