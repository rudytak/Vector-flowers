var pdf;
var c, pg;
var tf = new Transformer();

var done = false;

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
    pg = createGraphics(100, 100);
}

function keyPressed() {
    if (keyCode == 80) {
        pdf.save();
    }
}

function mousePressed() {
    draw();
}

function draw() {
    tf.push();

    pdf.beginRecord();

    background(255, 255, 255, 255);
    pg.background(255)

    strokeWeight(1.5);
    image(pg, 0, 0, width, height);
    //image(img, 0, 0, width, height);

    tf.translate(width / 2, height / 2)

    var r_ang = 2 * PI / (_json.branches.length)
    var randomisation = 2 * PI / ((_json.branches.length) ** 2)
    var total = PI;

    for (var b = 0; b < _json.branches.length; b++) {
        var bran = _json.branches[b];

        var ang = (r_ang + random(-randomisation, randomisation));
        total += ang;

        tf.rotate(total);
        tf.translate(bran.length, 0);

        stroke(getCol(tf.x, tf.y));
        line(0, 0, -bran.length, 0);

        drawBranch(bran, 1);

        tf.translate(-bran.length, 0);
        tf.rotate(-total);
    }

    noLoop();

    tf.pop();
}

function drawBranch(bJSON, depth) {
    if (bJSON.branches.length == 0) return

    var randomisation = PI / (3 * depth)

    for (var b = 0; b < bJSON.branches.length; b++) {
        var bran = bJSON.branches[b];

        var ang = random(-randomisation, randomisation);

        tf.rotate(ang);
        tf.translate(bran.length, 0);

        stroke(getCol(tf.x, tf.y));
        line(0, 0, -bran.length, 0);

        drawBranch(bran, depth + 1);

        tf.translate(-bran.length, 0);
        tf.rotate(-ang);
    }
}

function getCol(x, y) {
    var _x = map(x, 0, width, 0, img.width);
    var _y = map(y, 0, height, 0, img.height);

    var im = img.get(_x, _y);
    return ([im[0], im[1], im[2]]);
}