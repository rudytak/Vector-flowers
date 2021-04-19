var pdf;
var c;

var img;
var _json;

function preload() {
    img = loadImage("img.png");
    _json = loadJSON("branches.json")
}

function setup() {
    // If we use SVG Renderer, then the PDF generated will be vector
    // Note that to use SVG Renderer, you must include p5.svg library
    c = createCanvas(600, 600, SVG);
    pdf = createPDF();
}

function draw() {
    pdf.beginRecord();

    background(255);



    noLoop();
    pdf.save();

}

function drawBranch(bJSON) {

}