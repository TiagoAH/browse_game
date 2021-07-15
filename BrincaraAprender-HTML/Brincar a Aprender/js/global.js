"use strict";
var contador_legendagem=0;
var contador_Reciclagem=0;
var contador_polimeros_certo=0;
var contador_polimeros_total=0;

jQuery(document).ready(function($){


  $('#janelaJogo').on('click', '#linkJogar', function(){
    $('#janelaJogo').load('jogar.html');
  });
 
  $('#janelaJogo').on('click', '#linkOpcoes', function(){
          $('#janelaJogo').load('opcoes.html');
  }); 

  $('#janelaJogo').on('click', '#linkVoltar', function(){

          $('#janelaJogo').load('index_conteudo.html');
  }); 

  $('#janelaJogo').on('click', '#linkVoltarJogar', function(){

          $('#janelaJogo').load('jogar.html');
  }); 

 $('#janelaJogo').on('click', '#linkSobre', function(){

          $('#janelaJogo').load('sobre.html');
  }); 
  $('#janelaJogo').on('click', '#linkSair', function(){

          $('#janelaJogo').load('sair.html');
  });
 $('#janelaJogo').on('click', '#linkLegendagem', function(){

          $('#janelaJogo').load('legendagem.html');
  }); 
 $('#janelaJogo').on('click', '#linkSolucoes', function(){

          $('#janelaJogo').load('solucoes.html');
  }); 
 $('#janelaJogo').on('click', '#linkReacoes', function(){

          $('#janelaJogo').load('reaccoes_quimicas.html');
  }); 
  $('#janelaJogo').on('click', '#linkCombustao', function(){

          $('#janelaJogo').load('combustao.html');
  }); 

   $('#janelaJogo').on('click', '#linkReaccoesAcidoBase', function(){

          $('#janelaJogo').load('reaccoes.html');
  }); 
    $('#janelaJogo').on('click', '#linkCatalisadores', function(){

          $('#janelaJogo').load('catalisadores.html');
  }); 
     $('#janelaJogo').on('click', '#linkPolimeros', function(){

          $('#janelaJogo').load('polimeros.html');
  }); 
      $('#janelaJogo').on('click', '#linkReciclagem', function(){

          $('#janelaJogo').load('reciclagem.html');
  }); 
       $('#janelaJogo').on('click', '#linkDesafio', function(){

          $('#janelaJogo').load('desafiofinal.html');
  }); 
  $('#janelaJogo').on('change', 'input', function(){
          var arrayPalavras = {};
          arrayPalavras["sopa1"] = "R";
          arrayPalavras["sopa2"] = "E";
          arrayPalavras["sopa3"] = "A";
          arrayPalavras["sopa4"] = "G";
          arrayPalavras["sopa5"] = "E";
          arrayPalavras["sopa6"] = "N";
          arrayPalavras["sopa7"] = "T";
          arrayPalavras["sopa8"] = "E";

          arrayPalavras["sopa9"] = "C";
          arrayPalavras["sopa10"] = "A";
          arrayPalavras["sopa11"] = "L";
          arrayPalavras["sopa12"] = "O";
          arrayPalavras["sopa13"] = "R";

          arrayPalavras["sopa14"] = "C";
          arrayPalavras["sopa15"] = "O";
          arrayPalavras["sopa16"] = "M";
          arrayPalavras["sopa17"] = "B";
          arrayPalavras["sopa18"] = "U";
          arrayPalavras["sopa19"] = "S";
          arrayPalavras["sopa20"] = "T";
          arrayPalavras["sopa21"] = "Ã";
          arrayPalavras["sopa22"] = "O";

          arrayPalavras["sopa23"] = "F";
          arrayPalavras["sopa24"] = "O";
          arrayPalavras["sopa25"] = "T";
          arrayPalavras["sopa26"] = "O";
          arrayPalavras["sopa27"] = "S";
          arrayPalavras["sopa28"] = "S";
          arrayPalavras["sopa29"] = "Í";
          arrayPalavras["sopa30"] = "N";
          arrayPalavras["sopa31"] = "T";
          arrayPalavras["sopa32"] = "E";
          arrayPalavras["sopa33"] = "S";
          arrayPalavras["sopa34"] = "E";

          arrayPalavras["sopa35"] = "P";
          arrayPalavras["sopa36"] = "R";
          arrayPalavras["sopa37"] = "O";
          arrayPalavras["sopa38"] = "D";
          arrayPalavras["sopa39"] = "U";
          arrayPalavras["sopa40"] = "T";
          arrayPalavras["sopa41"] = "O";

          arrayPalavras["sopa42"] = "S";
          arrayPalavras["sopa43"] = "A";
          arrayPalavras["sopa44"] = "L";

          arrayPalavras["sopa45"] = "O";
          arrayPalavras["sopa46"] = "X";
          arrayPalavras["sopa47"] = "I";
          arrayPalavras["sopa48"] = "D";
          arrayPalavras["sopa49"] = "A";
          arrayPalavras["sopa50"] = "Ç";
          arrayPalavras["sopa51"] = "Ã";
          arrayPalavras["sopa52"] = "O";    






          if( arrayPalavras[this.id] == this.value.toUpperCase()){
              jQuery('#'+this.id).css('background-color','rgb(0, 255, 128)');
          }else if (''== this.value.toUpperCase()){
              jQuery('#'+this.id).css('background-color','rgb(255, 255, 255)');
          }else{
            jQuery('#'+this.id).css('background-color','rgb(255, 102, 102)');
          }
    });

});


  function allowDrop(ev) {
      ev.preventDefault();
  }

  function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      var idPalavra = data.replace( /^\D+/g, '');
      var idImagem = ev.target.id.replace( /^\D+/g, '');
     
      if(idPalavra == idImagem){
        ev.target.appendChild(document.getElementById(data));
        var audio = document.getElementById("certo");
        jQuery('#'+data).addClass('palavraCerta');
        audio.play();
        contador_legendagem++;
      }else{
        var audio = document.getElementById("errado");
        audio.play();
      }
      if(contador_legendagem==12){
        alert("Parabéns! Legendou, corretamente, todas as imagens");
        contador_legendagem=0;
      }
   
  }




  function sol() {
    var string1 = 'Cristalização';
    var string2 = 'Destilação';
    var string3 = 'Filtração';
    var string4 = 'Decantação';
    var string5 = 'Separação magnética';
    var a = document.getElementById("Text1").value;
    var b = document.getElementById("Text2").value;
    var c = document.getElementById("Text3").value;
    var d = document.getElementById("Text4").value;
    var e = document.getElementById("Text5").value;
    var contagem=0;

    if(a==string1 || a=='cristalização' || a=='cristalizacao' || a=='cristalizaçao'){
      //alert('acertaste 1');
      contagem++;
    }
    if(b==string2 || b=='destilação' || b == 'destilaçao' || b == 'destilacao'){
      //alert('acertaste 2');
      contagem++;
    }
    if(c==string3 || c=='filtração' || c=='filtracao'|| c=='filtraçao'){
     // alert('acertaste 3')
      contagem++;
    }
    if(d==string4 || d=='decantação' || d=='decantaçao' || d=='decantacao' ||d=='Decantação líquido sólido' || d=='decantação líquido sólido' || d == 'decantaçao liquido solido' || d == 'decantação líquido-sólido' || d=='decantacao liquido solido' || d=='Decantação líquido-sólido' || d=='decantação sólido-líquido' || d=='Decantação sólido-líquido' || d=='decantação sólido líquido'){
      //alert('acertaste 4');
      contagem++;
    }
    if(e==string5 || e=='separação magnética' || e== 'separacao magnetica' || e=='separaçao magnetica' || e=='Separação Magnética'){
      //alert('acertaste 5');
      contagem++;
    }
    if(contagem==5){
      alert('Parabéns, acertaste tudo');
    }
    else{
      alert('Ainda não conseguiu! Respostas erradas: ' + (5-contagem));
    }


  }
  
  function completar(button_id){

    if(button_id==1 || button_id==4 || button_id==5 || button_id==8 || button_id==9 || button_id==12|| button_id==14){
      //alert('certo');
      document.getElementById(button_id).style.backgroundColor = "lightgreen";
      contador_polimeros_certo++;
      contador_polimeros_total++;
      var x=button_id;
      if(x%2==0){
        x--;
      }else{
        x++;
      }
      document.getElementById(x).disabled = true;
    }
    else if(button_id==2 || button_id==3|| button_id==6|| button_id==7 || button_id==10 || button_id==11 || button_id==13){
      //alert('errado');
      contador_polimeros_total++;
            var x=button_id;
      if(x%2==0){
        x--;
      }else{
        x++;
      }
      document.getElementById(x).disabled = true;
      document.getElementById(button_id).style.backgroundColor = "red";
    }
    if(contador_polimeros_total==7){
      alert("Acertou "+contador_polimeros_certo+" em 7!");
      contador_polimeros_total=0;
      contador_polimeros_certo=0;
    }
  }




  function submitQuiz() {
    console.log('submitted');

  // get each answer score
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

  // calc score with answerScore function
    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4')+ answerScore('q5') + answerScore('q6')+ answerScore('q7') + answerScore('q8'));
    console.log("CalcScore: " + calcScore); // it works!

  // function to return correct answer string
    function respostacorreta (correctStringNo, qNumber) {
      console.log("qNumber: " + qNumber);  // logs 1,2,3,4 5 6 7 8 after called below
      return ("A resposta correta para a pergunta " + qNumber + ": &nbsp;<strong>" +
        (document.getElementById(correctStringNo).innerHTML) + "</strong>");
      }

  // print correct answers only if wrong (calls respostacorreta function)
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

  // calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName('questao');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
      questionCounter++;
    }

  // show score as "score/possible score"
    var showScore = "Tua pontuação: " + calcScore +"/" + questionCounter;
  // if 4/4, "perfect score!"
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
$(document).ready(function () {
  
var questionNumber=0;
var questoes=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numeroquestoes;
var score=0;
     
    $.getJSON('PHperguntas.json', function(data) {

    for(var i=0;i<data.perguntas.length;i++){ 
      questoes[i]=new Array;
      questoes[i][0]=data.perguntas[i].question;
      questoes[i][1]=data.perguntas[i].option1;
      questoes[i][2]=data.perguntas[i].option2;
      questoes[i][3]=data.perguntas[i].option3;
      questoes[i][4]=data.perguntas[i].option4;
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
    
    $(stage).append('<div class="questionText">Finalizas-te o teu quiz!<br><br>Total questions: '+numeroquestoes+'<br>Respostas corretas: '+score+'</div>');
    
    }
  });

function MudaImagem (IDbotao) {
  var imagem=document.getElementById("imagemsPhEsquerda");
    if(IDbotao=='vinagre'){
      imagem.style.backgroundImage="url(images/gobele/rosa.png)";
    }else if(IDbotao=='limao'){
      imagem.style.backgroundImage="url(images/gobele/vermelho.png)";
    }else if(IDbotao=='pastaDentes'){
      imagem.style.backgroundImage="url(images/gobele/azul.png)";
    }else if(IDbotao=='detergentelouca'){
      imagem.style.backgroundImage="url(images/gobele/azul.png)";
    }else if(IDbotao=='detergenteVidros'){
      imagem.style.backgroundImage="url(images/gobele/verde.png)";
    }else if(IDbotao=='agua'){
      imagem.style.backgroundImage="url(images/gobele/roxo.png)";
    }else if(IDbotao=='reset'){
      imagem.style.backgroundImage="url(images/gobele/roxo.png)";

    }

    if(IDbotao!='reset'){
      document.getElementById('vinagre').disabled = true;
      document.getElementById('limao').disabled = true;
      document.getElementById('pastaDentes').disabled = true;
      document.getElementById('detergentelouca').disabled = true;
      document.getElementById('detergenteVidros').disabled = true;
      document.getElementById('agua').disabled = true;
      document.getElementById('reset').disabled = false;
    }else{
      document.getElementById('vinagre').disabled = false;
      document.getElementById('limao').disabled = false;
      document.getElementById('pastaDentes').disabled = false;
      document.getElementById('detergentelouca').disabled = false;
      document.getElementById('detergenteVidros').disabled = false;
      document.getElementById('agua').disabled = false;
      document.getElementById('reset').disabled = true;
    }
  }

  function dragReciclagem(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  }

  function dropReciclagem(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      var idLixo = data.replace( /^\D+/g, '');
      var idEcoPonto = ev.target.id.replace( /^\D+/g, '');

      var imagem=document.getElementById(data);
      if(idLixo == idEcoPonto){
        ev.target.appendChild(document.getElementById(data));
        var audio = document.getElementById("certo");
        jQuery('#'+data).addClass('lixoCerto');
        audio.play();
        imagem.style.display='none';
        contador_Reciclagem++;
      }else{
        var audio = document.getElementById("errado");
        audio.play();
      }
      if(contador_Reciclagem==12){
        alert("Parabéns! Separou, corretamente, o lixo todo!");
        contador_Reciclagem=0;
      }
   
  }