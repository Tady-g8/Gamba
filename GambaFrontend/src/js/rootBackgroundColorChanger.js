export default function rootBackgroundColorChanger(money) {
    console.log(money);
    var root = document.querySelector(':root');
    money = money.toString();
    while (money.length < 9) {
        money = '0' + money;
    }

    console.log(money);
    
    var r = Math.floor(parseInt(money.slice(0, 3)) / 3.917);
    var g = Math.floor(parseInt(money.slice(3, 6)) / 3.917);
    var b = Math.floor(parseInt(money.slice(6, 9)) / 3.917);

    console.log("Red: " + r + " Green: " + g + " Blue: " + b);

    var compR = 255 - r;
    var compG = 255 - g;
    var compB = 255 - b;

    root.style.setProperty('--color-secondary-darker', RGBToHSL(r, g, b, 1, 8));
    root.style.setProperty('--color-secondary-main', RGBToHSL(r, g, b, 1, 2));
    root.style.setProperty('--color-primary-darker', RGBToHSL(r, g, b, 1, 25));
    root.style.setProperty('--color-accent', RGBToHSL(compR, compG, compB, 0, 0));
}

function RGBToHSL(r,g,b, sat, light) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
  
    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
    
    // Calculate hue
    // No difference
    if (delta == 0)
      h = 0;
    // Red is max
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
      h = (b - r) / delta + 2;
    // Blue is max
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
      
    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;
    
    // Calculate lightness
    l = (cmax + cmin) / 2;
  
    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return "hsl(" + h + "," + (s/sat) + "%," + (l/light) + "%)";
}