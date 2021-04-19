var pdf;

function setup() {
    // If we use SVG Renderer, then the PDF generated will be vector
    // Note that to use SVG Renderer, you must include p5.svg library
    createCanvas(600, 200, SVG);
    pdf = createPDF();
    pdf.beginRecord();
}

function draw() {
    background(255);


    noLoop();
    pdf.save();
}