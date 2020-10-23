REF_WIDTH = 1200
REF_HEIGHT = 800

SUPPORTED_WIDTHS = {
    1200: [1200, 800],
    1100: [1100, 800],
    1000: [1000, 666],
    750: [750, 500],
    500: [500, 333],
    375: [375, 250],
    370: [370, 246],
    287: [287, 192],
    250: [250, 166],
}

FONT_REDUCTION = {
    1200: 1,
    1100: 1,
    1000: 1,
    750: 1.5,
    500: 2,
    375: 3,
    370: 3,
    287: 3.5,
    250: 4,
}

function scalex(x, width){
    // x : REF_WIDTH == ? : width
    return x * width / REF_WIDTH;
}

function scaley(y, height){
    // y : REF_HEIGHT == ? : height
    return y * height / REF_HEIGHT;
}

function getdim(width){
    const keys_str = Object.keys(SUPPORTED_WIDTHS);
    var keys = [];
    for (var i = 0; i < keys_str.length; i++)
        keys.push(parseInt(keys_str[i]));

    for (var i = keys.length-1; i>= 0; i--){
        var k = keys[i];
        var v = SUPPORTED_WIDTHS[k];
        if (width > k)
            return v;
    }
}


function map_controller(){
    $.get("/data/map.json", function(data) {
//         data = JSON.parse(data);
        var svg = d3.select('svg');
        var mapDiv = document.getElementById("map-div");

        function redraw(){
            // Extract the width and height that was computed by CSS.
            var div_width = mapDiv.clientWidth;
            var div_height = mapDiv.clientHeight;
            console.log(div_width);
            dim = getdim(div_width);
            width = dim[0];
            height = dim[1];
            var reduct = FONT_REDUCTION[width];

            var padding_left = (div_width - width) / 2;
            $('#map-div').css('padding-left', padding_left);

            // Use the extracted size to set the size of an SVG element.
            svg
            .attr("width", width)
            .attr("height", height);

            var texts = svg.selectAll("text")
                .data(data)
                .enter();

            texts.append("text")
                .attr("x", function(d){return scalex(+d['x'], width)})
                .attr("y", function(d){return scaley(+d['y'], height)})
                .text(function(d) {return d['name']})
                .attr('class', function(d) {
                    var font = Math.ceil(parseInt(d['size'])/reduct);
                    return 'map-label pop ' + d['class'] + ' f' + font
                })
                .attr('id', function(d, i) { return 'map-label-' + i;});

//            var panZoomTiger = svgPanZoom('#map-svg', {});
            $(data).each(function(i, d){
                $('#map-label-' + i).popover(
                    {
                        title: d['pop']['title'],
                        content: d['pop']['content'],
                        html: true,
                        placement: "right",
                    }
                );
            });
            $('html').on('click', function(e) {
                if (typeof $(e.target).data('original-title') == 'undefined' && !$(e.target).parents().is('.popover.in')) {
                    $('[data-original-title]').popover('hide');
                }
            });
        }
        // Draw for the first time to initialize.
        redraw();
    });
}
