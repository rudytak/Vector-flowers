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

    translate(width / 2, height / 2)
    drawBranch(_json);

    noLoop();
    pdf.save();

}

function drawBranch(bJSON) {
    if (bJSON.branches.length == 0) return

    var r_ang = 2 * PI / (bJSON.branches.length + 0.5)
    var randomisation = 2 * PI / ((bJSON.branches.length + 1) ** 2)
    var total = PI;

    for (var b = 0; b < bJSON.branches.length; b++) {
        var bran = bJSON.branches[b];

        var ang = (r_ang + random(-randomisation, randomisation));
        total += ang;

        rotate(total);
        translate(bran.length, 0)

        line(0, 0, -bran.length, 0)

        drawBranch(bran)

        translate(-bran.length, 0)
        rotate(-total);
    }
}