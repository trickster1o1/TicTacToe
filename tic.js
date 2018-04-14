$(document).ready(()=>{
	var boxZero = document.getElementById('Zero');
	var boxZero1 = document.getElementById('Zero1');
	var boxZero2 = document.getElementById('Zero2');
	var boxOne0 = document.getElementById('one0');
	var boxOne1 = document.getElementById('one1');
	var boxOne2 = document.getElementById('one2');
	var boxTwo0 = document.getElementById('two0');
	var boxTwo1 = document.getElementById('two1');
	var boxTwo2 = document.getElementById('two2');

	var Zero = document.getElementById('OZero');
	var Oone = document.getElementById('Oone');
	var Otwo = document.getElementById('Otwo');
	var oneZero = document.getElementById('oneO');
	var oneOne = document.getElementById('oneOne');
	var oneTwo = document.getElementById('oneTwo');
	var twoZero = document.getElementById('twoO');
	var twoOne = document.getElementById('twoOne');
	var twoTwo = document.getElementById('twoTwo');
	var won = document.getElementById('win');
	var butO = document.getElementById('o');
	var butX = document.getElementById('x');
	var choic = document.getElementById('urChoice');

	var g = [Zero,Oone,Otwo,oneZero,oneOne,oneTwo,twoZero,twoOne,twoTwo];


	butO.addEventListener('click',function(){
	for(var c = 0;c<9;c++){
			g[c].innerHTML = "";
		}
	choic.innerHTML = "<strong>You Chose O</strong>";

		boxZero.addEventListener('click',function(){
			if(g[0].innerHTML == ""){
			g[0].innerHTML = "O";
		
				var m = g[Math.floor((Math.random()*9)+0)];
				while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
				
					m.innerHTML = "X"; 
			
			}
			winner();
			looser();
				
			
				
			
		});
		boxZero1.addEventListener('click',function(){
			if(g[1].innerHTML == ""){

			g[1].innerHTML = "O";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "X"; 
			}
					winner();
					looser();
				
				
				
			
		});
		 boxZero2.addEventListener('click',function(){
			if(g[2].innerHTML == ""){

			g[2].innerHTML = "O";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "X"; 
			}		
				winner();
				looser();
				
			
				
				
		});
		boxOne0.addEventListener('click',function(){
			if(g[3].innerHTML == ""){

			g[3].innerHTML = "O";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "X"; 
			}
				winner();
				looser();
				
			
			
				
		});
		boxOne1.addEventListener('click',function(){
			if(g[4].innerHTML == ""){

			g[4].innerHTML = "O";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "X"; 
			}
				winner();
				looser();

				
				
			
				
		});
		boxOne2.addEventListener('click',function(){
			if(g[5].innerHTML == ""){
			g[5].innerHTML = "O";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "X"; 
			}

						winner();
						looser();
				
			
			
				
		});
		boxTwo0.addEventListener('click',function(){
			if(g[6].innerHTML == ""){
			g[6].innerHTML = "O";
			
			var m = g[Math.floor((Math.random()*9)+0)];
				while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "X"; 
			}
			
						winner();
						looser();
				

			
				
		});
		boxTwo1.addEventListener('click',function(){
			if(g[7].innerHTML == ""){
				g[7].innerHTML = "O";
				var m = g[Math.floor((Math.random()*9)+0)];
				while(m.innerHTML !=="" ){
						m = g[Math.floor((Math.random()*9)+0)];
					}
						m.innerHTML = "X"; 
			}
							winner();
							looser();
				
		});
		boxTwo2.addEventListener('click',function(){
			if(g[8].innerHTML == ""){
			g[8].innerHTML = "O";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "X"; 
			}	
				winner();
				looser();
			
				
			
			
		});


		function winner(){
				if(g[0].innerHTML==="O" && g[0].innerHTML===g[4].innerHTML && g[4].innerHTML===g[8].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[0].innerHTML = "|O|";
				g[4].innerHTML = "|O|";
				g[8].innerHTML = "|O|";
			}

					else if(g[0].innerHTML==="O" && g[0].innerHTML===g[3].innerHTML && g[3].innerHTML===g[6].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[0].innerHTML = "|O|";
				g[3].innerHTML = "|O|";
				g[6].innerHTML = "|O|";
			}
					else if(g[0].innerHTML==="O" && g[0].innerHTML===g[1].innerHTML && g[1].innerHTML===g[2].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[0].innerHTML = "|O|";
				g[1].innerHTML = "|O|";
				g[2].innerHTML = "|O|";
			}
					else if(g[1].innerHTML==="O" && g[1].innerHTML===g[4].innerHTML && g[4].innerHTML===g[7].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[1].innerHTML = "|O|";
				g[4].innerHTML = "|O|";
				g[7].innerHTML = "|O|";
			}
				else if(g[2].innerHTML==="O" && g[2].innerHTML===g[4].innerHTML && g[4].innerHTML===g[6].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[2].innerHTML = "|O|";
				g[4].innerHTML = "|O|";
				g[6].innerHTML = "|O|";
			}
				else if(g[6].innerHTML==="O" && g[6].innerHTML===g[7].innerHTML && g[7].innerHTML===g[8].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[6].innerHTML = "|O|";
				g[7].innerHTML = "|O|";
				g[8].innerHTML = "|O|";
			}
				else if(g[3].innerHTML==="O" && g[3].innerHTML===g[4].innerHTML && g[4].innerHTML===g[5].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[3].innerHTML = "|O|";
				g[4].innerHTML = "|O|";
				g[5].innerHTML = "|O|";
			}
				else if(g[2].innerHTML==="O" && g[2].innerHTML===g[5].innerHTML && g[5].innerHTML===g[8].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[2].innerHTML = "|O|";
				g[5].innerHTML = "|O|";
				g[8].innerHTML = "|O|";
			}

		}


		function looser(){
				if(g[0].innerHTML==="X" && g[0].innerHTML===g[4].innerHTML && g[4].innerHTML===g[8].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[0].innerHTML = "|X|";
				g[4].innerHTML = "|X|";
				g[8].innerHTML = "|X|";
			}

					else if(g[0].innerHTML==="X" && g[0].innerHTML===g[3].innerHTML && g[3].innerHTML===g[6].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[0].innerHTML = "|X|";
				g[3].innerHTML = "|X|";
				g[6].innerHTML = "|X|";
			}
					else if(g[0].innerHTML==="X" && g[0].innerHTML===g[1].innerHTML && g[1].innerHTML===g[2].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[0].innerHTML = "|X|";
				g[1].innerHTML = "|X|";
				g[2].innerHTML = "|X|";
			}
					else if(g[1].innerHTML==="X" && g[1].innerHTML===g[4].innerHTML && g[4].innerHTML===g[7].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[1].innerHTML = "|X|";
				g[4].innerHTML = "|X|";
				g[7].innerHTML = "|X|";
			}
				else if(g[2].innerHTML==="X" && g[2].innerHTML===g[4].innerHTML && g[4].innerHTML===g[6].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[2].innerHTML = "|X|";
				g[4].innerHTML = "|X|";
				g[6].innerHTML = "|X|";
			}
				else if(g[6].innerHTML==="X" && g[6].innerHTML===g[7].innerHTML && g[7].innerHTML===g[8].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[6].innerHTML = "|X|";
				g[7].innerHTML = "|X|";
				g[8].innerHTML = "|X|";
			}
				else if(g[3].innerHTML==="X" && g[3].innerHTML===g[4].innerHTML && g[4].innerHTML===g[5].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[3].innerHTML = "|X|";
				g[4].innerHTML = "|X|";
				g[5].innerHTML = "|X|";
			}
				else if(g[2].innerHTML==="X" && g[2].innerHTML===g[5].innerHTML && g[5].innerHTML===g[8].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[2].innerHTML = "|X|";
				g[5].innerHTML = "|X|";
				g[8].innerHTML = "|X|";
			}
			
		}
	});

	//second  main function.........................................

	butX.addEventListener('click',function(){

		for(var c = 0;c<8;c++){
			g[c].innerHTML = "";
		}

		choic.innerHTML="<strong>You Choose X</strong>";

		boxZero.addEventListener('click',function(){
			if(g[0].innerHTML == ""){
			g[0].innerHTML = "X"
				var m = g[Math.floor((Math.random()*9)+0)];
				while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
				
					m.innerHTML = "O"; 
			}

			winner();
			looser();
		
		});
		boxZero1.addEventListener('click',function(){
			if(g[1].innerHTML == ""){
			g[1].innerHTML = "X";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "O"; 
			}
					winner();
					looser();
		
		});
		 boxZero2.addEventListener('click',function(){
			if(g[2].innerHTML == ""){
			g[2].innerHTML = "X";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "O"; 
			}
				winner();
				looser();
			
		});
		boxOne0.addEventListener('click',function(){
			if(g[3].innerHTML == ""){
			g[3].innerHTML = "X";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "O"; 
			}
				winner();
				looser();
			
		});
		boxOne1.addEventListener('click',function(){
			if(g[4].innerHTML == ""){
			g[4].innerHTML = "X";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "O"; 
			}
				winner();
				looser();
			
		});
		boxOne2.addEventListener('click',function(){
			if(g[5].innerHTML == ""){
			g[5].innerHTML = "X";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "O"; 
			}

						winner();
						looser();
			
		});
		boxTwo0.addEventListener('click',function(){
			if(g[6].innerHTML == ""){
			g[6].innerHTML = "X";
			var m = g[Math.floor((Math.random()*9)+0)];
				while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "O"; 
			}
						winner();
						looser();
				
		});
		boxTwo1.addEventListener('click',function(){
			if(g[7].innerHTML == ""){
			g[7].innerHTML = "X";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "O"; 
			}
						winner();
						looser();
			
		});
		boxTwo2.addEventListener('click',function(){
			if(g[8].innerHTML == ""){
			g[8].innerHTML = "X";
			var m = g[Math.floor((Math.random()*9)+0)];
			while(m.innerHTML !=="" ){
					m = g[Math.floor((Math.random()*9)+0)];
				}
					m.innerHTML = "O"; 
			}
				winner();
				looser();
			
		});


		function winner(){
				if(g[0].innerHTML==="X" && g[0].innerHTML===g[4].innerHTML && g[4].innerHTML===g[8].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[0].innerHTML = "|X|";
				g[4].innerHTML = "|X|";
				g[8].innerHTML = "|X|";
			}

					else if(g[0].innerHTML==="X" && g[0].innerHTML===g[3].innerHTML && g[3].innerHTML===g[6].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[0].innerHTML = "|X|";
				g[3].innerHTML = "|X|";
				g[6].innerHTML = "|X|";
			}
					else if(g[0].innerHTML==="X" && g[0].innerHTML===g[1].innerHTML && g[1].innerHTML===g[2].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[0].innerHTML = "|X|";
				g[1].innerHTML = "|X|";
				g[2].innerHTML = "|X|";
			}
					else if(g[1].innerHTML==="X" && g[1].innerHTML===g[4].innerHTML && g[4].innerHTML===g[7].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[1].innerHTML = "|X|";
				g[4].innerHTML = "|X|";
				g[7].innerHTML = "|X|";
			}
				else if(g[2].innerHTML==="X" && g[2].innerHTML===g[4].innerHTML && g[4].innerHTML===g[6].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[2].innerHTML = "|X|";
				g[4].innerHTML = "|X|";
				g[6].innerHTML = "|X|";
			}
				else if(g[6].innerHTML==="X" && g[6].innerHTML===g[7].innerHTML && g[7].innerHTML===g[8].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[6].innerHTML = "|X|";
				g[7].innerHTML = "|X|";
				g[8].innerHTML = "|X|";
			}
				else if(g[3].innerHTML==="X" && g[3].innerHTML===g[4].innerHTML && g[4].innerHTML===g[5].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[3].innerHTML = "|X|";
				g[4].innerHTML = "|X|";
				g[5].innerHTML = "|X|";
			}
				else if(g[2].innerHTML==="X" && g[2].innerHTML===g[5].innerHTML && g[5].innerHTML===g[8].innerHTML ){
				alert("You won!");
				won.innerHTML = "<strong>YOU WIN!</strong>";
				g[2].innerHTML = "|X|";
				g[5].innerHTML = "|X|";
				g[8].innerHTML = "|X|";
			}

		}


		function looser(){
				if(g[0].innerHTML==="O" && g[0].innerHTML===g[4].innerHTML && g[4].innerHTML===g[8].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[0].innerHTML = "|O|";
				g[4].innerHTML = "|O|";
				g[8].innerHTML = "|O|";
			}

					else if(g[0].innerHTML==="O" && g[0].innerHTML===g[3].innerHTML && g[3].innerHTML===g[6].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[0].innerHTML = "|O|";
				g[3].innerHTML = "|O|";
				g[6].innerHTML = "|O|";
			}
					else if(g[0].innerHTML==="O" && g[0].innerHTML===g[1].innerHTML && g[1].innerHTML===g[2].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[0].innerHTML = "|O|";
				g[1].innerHTML = "|O|";
				g[2].innerHTML = "|O|";
			}
					else if(g[1].innerHTML==="O" && g[1].innerHTML===g[4].innerHTML && g[4].innerHTML===g[7].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[1].innerHTML = "|O|";
				g[4].innerHTML = "|O|";
				g[7].innerHTML = "|O|";
			}
				else if(g[2].innerHTML==="O" && g[2].innerHTML===g[4].innerHTML && g[4].innerHTML===g[6].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[2].innerHTML = "|O|";
				g[4].innerHTML = "|O|";
				g[6].innerHTML = "|O|";
			}
				else if(g[6].innerHTML==="O" && g[6].innerHTML===g[7].innerHTML && g[7].innerHTML===g[8].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[6].innerHTML = "|O|";
				g[7].innerHTML = "|O|";
				g[8].innerHTML = "|O|";
			}
				else if(g[3].innerHTML==="O" && g[3].innerHTML===g[4].innerHTML && g[4].innerHTML===g[5].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[3].innerHTML = "|O|";
				g[4].innerHTML = "|O|";
				g[5].innerHTML = "|O|";
			}
				else if(g[2].innerHTML==="O" && g[2].innerHTML===g[5].innerHTML && g[5].innerHTML===g[8].innerHTML ){
				alert("You Loose!");
				won.innerHTML = "<strong>YOU LOOSE!</strong>";
				g[2].innerHTML = "|O|";
				g[5].innerHTML = "|O|";
				g[8].innerHTML = "|O|";
			}
			
		}
	});


	$('#info').hide();
	$('#discHeader').on('click',function(){
		$('#info').toggle(500);
	});
});