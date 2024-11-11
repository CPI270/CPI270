var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_GranEscalaCPIkW_1 = new ol.format.GeoJSON();
var features_GranEscalaCPIkW_1 = format_GranEscalaCPIkW_1.readFeatures(json_GranEscalaCPIkW_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranEscalaCPIkW_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranEscalaCPIkW_1.addFeatures(features_GranEscalaCPIkW_1);
var lyr_GranEscalaCPIkW_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranEscalaCPIkW_1, 
                style: style_GranEscalaCPIkW_1,
                popuplayertitle: "Gran Escala CPI (kW)",
                interactive: true,
    title: 'Gran Escala CPI (kW)<br />\
    <img src="styles/legend/GranEscalaCPIkW_1_0.png" /> 26000 - 28000<br />\
    <img src="styles/legend/GranEscalaCPIkW_1_1.png" /> 28000 - 33000<br />\
    <img src="styles/legend/GranEscalaCPIkW_1_2.png" /> 33000 - 34000<br />'
        });
var format_BajaEscalaCPI_2 = new ol.format.GeoJSON();
var features_BajaEscalaCPI_2 = format_BajaEscalaCPI_2.readFeatures(json_BajaEscalaCPI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BajaEscalaCPI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BajaEscalaCPI_2.addFeatures(features_BajaEscalaCPI_2);
var lyr_BajaEscalaCPI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BajaEscalaCPI_2, 
                style: style_BajaEscalaCPI_2,
                popuplayertitle: "Baja Escala CPI (%)",
                interactive: true,
    title: 'Baja Escala CPI (%)<br />\
    <img src="styles/legend/BajaEscalaCPI_2_0.png" /> 0 - 33<br />\
    <img src="styles/legend/BajaEscalaCPI_2_1.png" /> 33 - 67<br />\
    <img src="styles/legend/BajaEscalaCPI_2_2.png" /> 67 - 100<br />'
        });
var group_GRANESCALA = new ol.layer.Group({
                                layers: [lyr_GranEscalaCPIkW_1,],
                                fold: "open",
                                title: "GRAN ESCALA"});
var group_CostaRica = new ol.layer.Group({
                                layers: [lyr_GoogleRoad_0,],
                                fold: "open",
                                title: "Costa Rica"});

lyr_GoogleRoad_0.setVisible(true);lyr_GranEscalaCPIkW_1.setVisible(true);lyr_BajaEscalaCPI_2.setVisible(true);
var layersList = [group_CostaRica,group_GRANESCALA,lyr_BajaEscalaCPI_2];
lyr_GranEscalaCPIkW_1.set('fieldAliases', {'LINEA': 'LINEA', 'begin': 'begin', 'end': 'end', 'GRAN ESCALA _Capacidad alojamiento DER [kW]': 'Capacidad Alojamiento DER (kW)', 'GRAN ESCALA _COORD.X': 'GRAN ESCALA _COORD.X', 'GRAN ESCALA _COORD.Y': 'GRAN ESCALA _COORD.Y', 'GRAN ESCALA _Circuito': 'Circuito', });
lyr_BajaEscalaCPI_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'porc': 'porc', 'Potencia n': 'Potencia Nominal (kVA)', 'Capacidad': 'Capacidad Alojamiento DER (kW) ', 'CRI.INCUMP': 'CRI.INCUMP', 'CAP,NOM': 'CAP,NOM', 'COORD.X': 'COORD.X', 'COORD.Y': 'COORD.Y', 'CAP.LIBRE': 'CAP.LIBRE', 'CIRCUITO': 'Circuito', });
lyr_GranEscalaCPIkW_1.set('fieldImages', {'LINEA': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'GRAN ESCALA _Capacidad alojamiento DER [kW]': 'Range', 'GRAN ESCALA _COORD.X': 'TextEdit', 'GRAN ESCALA _COORD.Y': 'TextEdit', 'GRAN ESCALA _Circuito': 'TextEdit', });
lyr_BajaEscalaCPI_2.set('fieldImages', {'NOMBRE': 'TextEdit', 'porc': 'TextEdit', 'Potencia n': 'TextEdit', 'Capacidad': 'TextEdit', 'CRI.INCUMP': 'TextEdit', 'CAP,NOM': 'TextEdit', 'COORD.X': 'TextEdit', 'COORD.Y': 'TextEdit', 'CAP.LIBRE': 'TextEdit', 'CIRCUITO': 'TextEdit', });
lyr_GranEscalaCPIkW_1.set('fieldLabels', {'LINEA': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'GRAN ESCALA _Capacidad alojamiento DER [kW]': 'header label - always visible', 'GRAN ESCALA _COORD.X': 'hidden field', 'GRAN ESCALA _COORD.Y': 'hidden field', 'GRAN ESCALA _Circuito': 'header label - always visible', });
lyr_BajaEscalaCPI_2.set('fieldLabels', {'NOMBRE': 'hidden field', 'porc': 'hidden field', 'Potencia n': 'header label - always visible', 'Capacidad': 'header label - always visible', 'CRI.INCUMP': 'hidden field', 'CAP,NOM': 'hidden field', 'COORD.X': 'hidden field', 'COORD.Y': 'hidden field', 'CAP.LIBRE': 'hidden field', 'CIRCUITO': 'header label - always visible', });
lyr_BajaEscalaCPI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});