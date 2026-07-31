var size = 0;
var placement = 'point';

var style_152_quartiericopy_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "286.0px \'Segoe UI\', sans-serif";
    var labelFill = "#4e1f6c";
    var bufferColor = "#ffffff";
    var bufferWidth = 270.0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("nomequart") !== null) {
        labelText = String(feature.get("nomequart"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(78,31,108,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: m2px(20)}),fill: new ol.style.Fill({color: 'rgba(141,90,153,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
