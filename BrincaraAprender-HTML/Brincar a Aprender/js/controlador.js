$(document).ready(function () {
	
var questionNumber=0;
var questoes=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numeroquestoes;
var score=0;
		 
 		$.getJSON('js/PHperguntas.json', function(data) {
			for(i=0;i<data.perguntas.length;i++){ 
				questoes[i]=new Array;
				if(i==0){
					questoes[i][0]="Um dos fatores pelos quais a floresta é responsável é: ";
					questoes[i][1]="Manutenção da biodiversidade.";
					questoes[i][2]="Aumento dos gases de efeito de estufa.";
					questoes[i][3]="Aumento da erosão dos solos.";
					questoes[i][4]="Produção de dióxido de carbono.";
				}
				else if(i==1){
					questoes[i][0]="A destruição da floresta conduz:";
					questoes[i][1]="Sedimentação dos rios e aumento dos gases do efeito de estufa.";
					questoes[i][2]="Aumento do número de espécies animais e vegetais.";
					questoes[i][3]="Maior produção de oxigénio.";
					questoes[i][4]="Regularização do ciclo da água e do clima.";
				}
				else if(i==2){
					questoes[i][0]="A combustão é uma reação química:";
					questoes[i][1]="Muito energética que origina luz e calor.";
					questoes[i][2]="Onde o gás consumido é o dióxido de carbono.";
					questoes[i][3]="Pouco energética que origina luz e calor.";
					questoes[i][4]="Reversível.";
				}
				else if(i==3){
					questoes[i][0]="Numa reação de combustão autossustentada é necessário:";
					questoes[i][1]="Calor, combustível e comburente";
					questoes[i][2]="Comburente, combustível e oxigénio";
					questoes[i][3]="Calor, combustível e dióxido de carbono.";
					questoes[i][4]="Material que arda, oxigénio e combustível.";
				}
			}
			 numeroquestoes=questoes.length; 			 
			displayQuestion();
		})
 
function displayQuestion(){
 var rnd=Math.random()*4;
rnd=Math.ceil(rnd);
var q1;
var q2;
var q3;
var q4;

if(rnd==1){q1=questoes[questionNumber][1];q2=questoes[questionNumber][2];q3=questoes[questionNumber][3];q4=questoes[questionNumber][4];}
if(rnd==2){q2=questoes[questionNumber][1];q3=questoes[questionNumber][2];q4=questoes[questionNumber][3];q1=questoes[questionNumber][4];}
if(rnd==3){q3=questoes[questionNumber][1];q4=questoes[questionNumber][2];q1=questoes[questionNumber][3];q2=questoes[questionNumber][4];}
if(rnd==4){q4=questoes[questionNumber][1];q1=questoes[questionNumber][2];q2=questoes[questionNumber][3];q3=questoes[questionNumber][4];}

$(stage).append('<div class="questionText">'+questoes[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div><div id="4" class="option">'+q4+'</div>');

 $('.option').click(function(){
  if(questionLock==false){questionLock=true;	
  //correct answer
  if(this.id==rnd){
   $(stage).append('<div class="feedback1">CORRETO</div>');
   score++;
   }
  //wrong answer	
  if(this.id!=rnd){
   $(stage).append('<div class="feedback2">ERRADO</div>');
  }
  setTimeout(function(){changeQuestion()},1000);
 }})
}

	
	
	
	
	
	function changeQuestion(){	
		questionNumber++;
	
	if(stage=="#game1"){stage2="#game1";stage="#game2";}
		else{stage2="#game2";stage="#game1";}

	if(questionNumber<numeroquestoes){displayQuestion();}else{displayFinalSlide();}
		$(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
		$(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
	}//change question
	

	
	
	function displayFinalSlide(){	
		$(stage).append('<div class="questionText"><br>Terminou o seu quiz!<br><br>Total de perguntas: '+numeroquestoes+'<br>Respostas corretas: '+score+'</div>');	
	}
	});