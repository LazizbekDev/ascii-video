const destinate = "N@#W$9876543~210?!         abc;:+=-,._";

let img;
let asciiDiv;

// function preload() {
//     img = createCapture(VIDEO)
// }

function setup() {
    noCanvas();
    img = createCapture(VIDEO)
    img.size(110, 90)
    asciiDiv = createDiv();
}

function draw() {
    img.loadPixels();
    let asciiImg= '';
    for (let j = 0; j < img.height; j++) {
        for (let i = 0; i < img.width; i++) {
            const pixelIndex = (i + j * img.width) * 4;
            const r = img.pixels[pixelIndex + 0]
            const g = img.pixels[pixelIndex + 1]
            const b = img.pixels[pixelIndex + 2]
            const avg = (r + g + b) / 3;
            const len = destinate.length;
            const charIndex = floor(map(avg, 0, 255,0, len ));
            // row += destinate.charAt(charIndex);
            const c = destinate.charAt(charIndex);
            if (c == ' ') asciiImg += '&nbsp;'//&#128514;
            else asciiImg += c

            //   fontSize(w);
            //   textAlign(CENTER,CENTER);
            //   text('G', i * w + w * 0.5, j * h + h * 0.5)


            // noStroke();
            // fill(avg);
            
            // //   square(i * w, j * h, w)
            // textSize(w);
            // textAlign(CENTER, CENTER);
            // text(destinate.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5)
        }
        asciiImg += '</br>'
        // console.log(row)
    }
    asciiDiv.html(asciiImg)
}