var angle = 0;
var slider;
var stroke_val = 8;
// var color = 255;

function setup() {
	createCanvas(1200, 840);
    // slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

var colour = 255;
var inc = 0;
var above = true;
var num = 255;

function draw() {
    // angle = slider.value();
    var height_ = height;
    angle += 0.05;

	num1 = (num + random(150))%255;
	num2 = (num + random(150))%255;
	num3 = (num + random(150))%255;
	
    col1 = num1;
    col2 = num2;
    col3 = num3;
    stroke(col1, col2, col3);
	background(51);
    strokeWeight(stroke_val);
    translate(600, height_ - inc); //shifting the origin to bottom-mid
    branch(250 - inc, stroke_val);
    if(inc < 250 && above) {
        inc += 1;
    }
    else if(inc >= 250 || !above) {
        inc -= 1;
        above = false;
        if(inc == 0) {
            above = true;
        }
    }

    num = (num - 1)%255;
}

function branch(len, s_val) {
    // stroke(255);
    strokeWeight(s_val);
    line(0, 0, 0, -len);
    translate(0, -len);
    if(len>4) {
        
        push();
        rotate(angle);
        branch(len*0.65, s_val*0.8);
        pop();
        push();
        rotate(-angle);
        branch(len*0.65, s_val*0.8);
        pop();
    }
}