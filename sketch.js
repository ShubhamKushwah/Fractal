var angle = 0;
var slider;
var stroke_val = 8;

function setup() {
	createCanvas(1000, 700);
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
    angle = slider.value()
	background(51);
    strokeWeight(stroke_val);
    translate(500, height); //shifting the origin to bottom-mid
    branch(175, stroke_val);
}

function branch(len, s_val) {
    stroke(255);
    strokeWeight(s_val);
    line(0, 0, 0, -len);
    translate(0, -len);
    if(len>4) {
        
        push();
        rotate(angle);
        branch(len*0.67, s_val*0.8);
        pop();
        push();
        rotate(-angle);
        branch(len*0.67, s_val*0.8);
        pop();
    }
}