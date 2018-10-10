const { createCanvas, registerFont } = require('canvas')
registerFont(__dirname + '/assets/futura_bold_italic.otf', {family: 'Futura Bold Italic'});

const marginHorizontal = 0.2;
const marginVertical = 0.14;

class Bogo {

  constructor(text, backgroundColor, textColor) {
    this.text = text;
    this.backgroundColor = backgroundColor || "red"
    this.textColor = textColor || "white"
  }

  generate(size) {
    const canvas = createCanvas(0, size)
    const ctx = canvas.getContext('2d')

    ctx.font = `${size}px Futura Bold Italic`;
    const { width } = ctx.measureText(this.text);
    canvas.width = width + (size * marginHorizontal * 2);

    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = this.backgroundColor;
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = this.textColor;
    ctx.fillText(this.text, size * marginHorizontal, size * (1 - marginVertical));

    return canvas.pngStream();
  }

}

module.exports = Bogo;