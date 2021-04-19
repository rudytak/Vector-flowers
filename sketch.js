var pdf;

var img;
var _json;

function setup() {
    // If we use SVG Renderer, then the PDF generated will be vector
    // Note that to use SVG Renderer, you must include p5.svg library
    var c = createCanvas(600, 600, SVG);
    pdf = createPDF();
    pdf.beginRecord();

    c.drop(fileDrop);
}

function fileDrop(file) {
    if (!img) {
        img = createImg(file.data, "").hide();
    }
}

function draw() {
    background(255);



    noLoop();
    pdf.save();
}