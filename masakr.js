let type = 1;
let size = 1;
let alph = 100;
let numb = 5000;
let offset = 0;
let increm = 0.001;
let a = 2.3;
let b = 2.3;
let c = 20.0;
let zoom = 70;
let n = 0;
let x, y, offsetx, offsety;
let i = 0;
let p = 1;
let r = 125;
let g = 125;
let bl = 125;

function setup() {
  let w = windowHeight;
  if (windowWidth < windowHeight) {
    w = windowWidth;
  }
  createCanvas(w, w);
  angleMode(DEGREES);
  background(0);
}
function draw() {
  if (p > 0) {
    a = a + random(-0.01, 0.025);
    b = b + random(-0.02, 0.01);
    c = c + random(-0.025, 0.015);
    r = r + random(-10, 22);
    g = g + random(-24, 10);
    bl = bl + random(-10, 15);

    if ((type = 1)) {
      if (a > 20) {
        a = 1.5;
      }
      if (a < 1.5) {
        a = 20;
      }
      if (b > 20) {
        b = 1.5;
      }
      if (b < 1.5) {
        b = 20;
      }
      if (c < 1) {
        c = 20;
      }
      if (c > 20) {
        c = 1;
      }
    }
    if ((type = 2)) {
      if (a > 20) {
        a = 2.0;
      }
      if (a < 2.0) {
        a = 20;
      }
      if (b > 20) {
        b = 2.0;
      }
      if (b < 2.0) {
        b = 20;
      }
      if (c < 8) {
        c = 20;
      }
      if (c > 20) {
        c = 8;
      }
    }
    if (r > 256) {
      r = 0;
    }
    if (r < 0) {
      r = 256;
    }
    if (g < 0) {
      g = 256;
    }
    if (g > 256) {
      g = 0;
    }
    if (bl > 256) {
      bl = 0;
    }
    if (bl < 0) {
      bl = 256;
    }
    let max = 0;
    offsetx = noise(i) * offset - offset / 2;
    offsety = noise(i + 10000) * offset - offset / 2;
    beginShape();
    for (var n = 0; n < numb; n++) {
      if (type == 1) {
        x = (a - b) * cos(n) + c * cos((a / b - 1) * n);
        y = (a - b) * sin(n) - c * sin((a / b - 1) * n);
      } else if (type == 2) {
        x = (a + b) * cos(n) - c * cos((a / b + 1) * n);
        y = (a + b) * sin(n) - c * sin((a / b + 1) * n);
      }
      noFill();
      stroke(r, g, bl, alph);
      strokeWeight(size);
      if (x > max) {
        max = x;
      }
      vertex(width / 2 + offsetx + x * zoom, height / 2 + offsety + y * zoom);
    }
    endShape();
    zoom = (width / 2 - 30) / max;
    i = i + increm;
  }
}
function mousePressed() {
  p = p * -1;
}
