var wms_layers = [];

var format_155_verdepubblico_30000copy_0 = new ol.format.GeoJSON();
var features_155_verdepubblico_30000copy_0 = format_155_verdepubblico_30000copy_0.readFeatures(json_155_verdepubblico_30000copy_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_155_verdepubblico_30000copy_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_155_verdepubblico_30000copy_0.addFeatures(features_155_verdepubblico_30000copy_0);
var lyr_155_verdepubblico_30000copy_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_155_verdepubblico_30000copy_0, 
                style: style_155_verdepubblico_30000copy_0,
                popuplayertitle: '155_verdepubblico_>30000 copy',
                interactive: true,
                title: '<img src="styles/legend/155_verdepubblico_30000copy_0.png" /> 155_verdepubblico_>30000 copy'
            });
var format_153_aree_statistichecopycopy_1 = new ol.format.GeoJSON();
var features_153_aree_statistichecopycopy_1 = format_153_aree_statistichecopycopy_1.readFeatures(json_153_aree_statistichecopycopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_153_aree_statistichecopycopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_153_aree_statistichecopycopy_1.addFeatures(features_153_aree_statistichecopycopy_1);
var lyr_153_aree_statistichecopycopy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_153_aree_statistichecopycopy_1, 
                style: style_153_aree_statistichecopycopy_1,
                popuplayertitle: '153_aree_statistiche copy copy',
                interactive: true,
                title: '<img src="styles/legend/153_aree_statistichecopycopy_1.png" /> 153_aree_statistiche copy copy'
            });
var format_152_quartiericopy_2 = new ol.format.GeoJSON();
var features_152_quartiericopy_2 = format_152_quartiericopy_2.readFeatures(json_152_quartiericopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_152_quartiericopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_152_quartiericopy_2.addFeatures(features_152_quartiericopy_2);
var lyr_152_quartiericopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_152_quartiericopy_2, 
                style: style_152_quartiericopy_2,
                popuplayertitle: '152_quartieri copy',
                interactive: true,
                title: '<img src="styles/legend/152_quartiericopy_2.png" /> 152_quartieri copy'
            });
var format_55_limiti_comunecopy_3 = new ol.format.GeoJSON();
var features_55_limiti_comunecopy_3 = format_55_limiti_comunecopy_3.readFeatures(json_55_limiti_comunecopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_55_limiti_comunecopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_55_limiti_comunecopy_3.addFeatures(features_55_limiti_comunecopy_3);
var lyr_55_limiti_comunecopy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_55_limiti_comunecopy_3, 
                style: style_55_limiti_comunecopy_3,
                popuplayertitle: '55_limiti_comune copy',
                interactive: true,
                title: '<img src="styles/legend/55_limiti_comunecopy_3.png" /> 55_limiti_comune copy'
            });
var group_00_base_top = new ol.layer.Group({
                                layers: [lyr_155_verdepubblico_30000copy_0,lyr_153_aree_statistichecopycopy_1,lyr_152_quartiericopy_2,lyr_55_limiti_comunecopy_3,],
                                fold: 'open',
                                title: '00_base_top'});

lyr_155_verdepubblico_30000copy_0.setVisible(true);lyr_153_aree_statistichecopycopy_1.setVisible(true);lyr_152_quartiericopy_2.setVisible(true);lyr_55_limiti_comunecopy_3.setVisible(true);
var layersList = [group_00_base_top];
lyr_155_verdepubblico_30000copy_0.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid0': 'ogc_fid0', 'area': 'area', 'perimeter': 'perimeter', 'denominazi': 'denominazi', 'tipologia': 'tipologia', 'quartiere': 'quartiere', 'via': 'via', });
lyr_153_aree_statistichecopycopy_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cod_areast': 'cod_areast', 'nomeareast': 'nomeareast', 'numquart': 'numquart', 'nomequart': 'nomequart', 'codzona': 'codzona', 'nomezona': 'nomezona', 'cod_area_s': 'cod_area_s', });
lyr_152_quartiericopy_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'area': 'area', 'numquart': 'numquart', 'nomequart': 'nomequart', 'download_tabella_data_zona': 'download_tabella_data_zona', 'download_tabella_data_sesso': 'download_tabella_data_sesso', 'download_tabella_data_note': 'download_tabella_data_note', 'download_tabella_data_residenti': 'download_tabella_data_residenti', });
lyr_55_limiti_comunecopy_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'fid': 'fid', 'fid_1': 'fid_1', 'shape_area': 'shape_area', 'cod_com': 'cod_com', 'comune': 'comune', 'cod_unione': 'cod_unione', 'unione': 'unione', 'unione_com': 'unione_com', 'cod_dissan': 'cod_dissan', 'distr_san': 'distr_san', 'coddis_rer': 'coddis_rer', });
lyr_155_verdepubblico_30000copy_0.set('fieldImages', {'ogc_fid': 'TextEdit', 'ogc_fid0': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'denominazi': 'TextEdit', 'tipologia': 'TextEdit', 'quartiere': 'TextEdit', 'via': 'TextEdit', });
lyr_153_aree_statistichecopycopy_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'cod_areast': 'Range', 'nomeareast': 'TextEdit', 'numquart': 'TextEdit', 'nomequart': 'TextEdit', 'codzona': 'TextEdit', 'nomezona': 'TextEdit', 'cod_area_s': 'TextEdit', });
lyr_152_quartiericopy_2.set('fieldImages', {'ogc_fid': 'TextEdit', 'area': 'TextEdit', 'numquart': 'TextEdit', 'nomequart': 'TextEdit', 'download_tabella_data_zona': 'TextEdit', 'download_tabella_data_sesso': 'TextEdit', 'download_tabella_data_note': 'TextEdit', 'download_tabella_data_residenti': 'TextEdit', });
lyr_55_limiti_comunecopy_3.set('fieldImages', {'ogc_fid': 'TextEdit', 'fid': 'TextEdit', 'fid_1': 'TextEdit', 'shape_area': 'TextEdit', 'cod_com': 'Range', 'comune': 'TextEdit', 'cod_unione': 'Range', 'unione': 'TextEdit', 'unione_com': 'TextEdit', 'cod_dissan': 'Range', 'distr_san': 'TextEdit', 'coddis_rer': 'TextEdit', });
lyr_155_verdepubblico_30000copy_0.set('fieldLabels', {'ogc_fid': 'no label', 'ogc_fid0': 'no label', 'area': 'no label', 'perimeter': 'no label', 'denominazi': 'no label', 'tipologia': 'no label', 'quartiere': 'no label', 'via': 'no label', });
lyr_153_aree_statistichecopycopy_1.set('fieldLabels', {'ogc_fid': 'no label', 'cod_areast': 'no label', 'nomeareast': 'no label', 'numquart': 'no label', 'nomequart': 'no label', 'codzona': 'no label', 'nomezona': 'no label', 'cod_area_s': 'no label', });
lyr_152_quartiericopy_2.set('fieldLabels', {'ogc_fid': 'no label', 'area': 'no label', 'numquart': 'no label', 'nomequart': 'no label', 'download_tabella_data_zona': 'no label', 'download_tabella_data_sesso': 'no label', 'download_tabella_data_note': 'no label', 'download_tabella_data_residenti': 'no label', });
lyr_55_limiti_comunecopy_3.set('fieldLabels', {'ogc_fid': 'no label', 'fid': 'no label', 'fid_1': 'no label', 'shape_area': 'no label', 'cod_com': 'no label', 'comune': 'no label', 'cod_unione': 'no label', 'unione': 'no label', 'unione_com': 'no label', 'cod_dissan': 'no label', 'distr_san': 'no label', 'coddis_rer': 'no label', });
lyr_55_limiti_comunecopy_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});