console.log("test");
	$(function() {
		// Definerer variablen canvas med referanse til objekt (i DOM) med id my_canvas
		var canvas = $('#my_canvas');

		// Beregner (x,y) posisjon til canvas DOM-element på siden
		var canvasPosition = {
			x: canvas.offset().left,
			y: canvas.offset().top
		};

		// Her "fanges" click hendelse opp med jQuery metoden
		// e refererer til hendelse (event) som da gir mulighet til å kalle tilgjengelige metoder
		canvas.on('click', function(e) {

		// Setter inn denne metode for å unngå standardrespons på standardhendelser til mus
			//e.preventDefault();

		// Bruker pageX og pageY for å få posisjonen til mus i forhold til hele siden (ikke my_canvas)
			var mouse = {
				x: e.pageX - canvasPosition.x,
				y: e.pageY - canvasPosition.y
			}

		/*
		   nå har du lokale koordinater mouse.x og mouse.y
		   som er beregnet i forhold til det lokale 
		   koordinatsystemet i my_canvas 
		   med (0,0) i den øverste venstre hjørne
		*/
			// Skriv koordinatene ut til console basert på lab3_v2
			// Kopier fra lab2_v2

			// Her bare kopieres lignende løsning fra lab3_v2
			// for å skrive ut til <span> elementnoden

			// Dette er kode for deloppgave 2
			// Her er to metoder kalt opp etter hverandre og begge tilhører objektet canvas
			canvas.clearCanvas({
				x: 0, y: 0,
				width: canvas.width,
				height: canvas.height
			})
			.drawText({
				// Her besvares deloppgave 2 (se lenken til jCanvas dokumentasjon i oppgaveteksten)
			});

			return false;
		});
	}); 
	</script>
</head>
<body>
	<p>Testside for å "fange" hendelser fra mus.</p>
	<p>
		<ul>
			<li>[1]Beregne (x,y) posisjon til Canvas DOM element på siden</li> 
			<li>[2]Finne den globale posisjonen til mus-kursøren i forhold til hele dokumentet</li> 
			<li>[3]For å lokalisere koordinatsenteret (0,0) til Canvas elementet i det øverste venstre hjørnet, og transformere globale koordinater til lokale koordinater, ta differansen mellom den globale museposisjonen beregnet i [2] og Canvas posisjonen fra [1] </li>
		</ul>
	</p>
	<canvas id="my_canvas" width="200" height="200"></canvas>
	<!-- Oppgaveløsning skal implementeres her -->
</body>
</html>
