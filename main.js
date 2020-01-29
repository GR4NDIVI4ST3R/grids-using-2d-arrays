var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var colors = [];

// Create 2D array of randomized gradient values
function draw(size, cols, rows) {
    canvas.width = size;
    canvas.height = size;

    for (var i = 0; i < cols; i++) {
        colors[i] = [];
        for (var j = 0; j < rows; j++) {
            colors[i][j] = Math.random() * 255;
        }
    }

    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            var x = i * (size/cols);
            var y = j * (size/rows);

            var style = 'rgba(' + colors[i][j] + ',' +
            colors[i][j] + ',' +
            colors[i][j] + ',' + '1)';

            ctx.fillStyle = style;
            ctx.fillRect(x, y, (size/cols), (size/rows));
        }
    }
}
draw(400, 16, 16);