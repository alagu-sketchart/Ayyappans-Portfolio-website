var slider1, slider2, slider3;

function setup() { 
  createCanvas(900, 900);
	
	// create some sliders
	slider1 = createSlider(0, 255, 0);
  slider1.position(10, 910);

	slider2 = createSlider(0, 255, 0);
  slider2.position(10, 930);

	slider3 = createSlider(0, 255, 0);
  slider3.position(10, 950);

	// text color is white
	fill('white');
} 

function draw() { 

	// get value of sliders
	var r = slider1.value();
	var g = slider2.value();
	var b = slider3.value();
	
	// color screen with slider values
	background(r, g, b);
	
	// print text
	text('R: '+r,150,25);
	text('G: '+g,150,45);
	text('B: '+b,150,65);
	
}