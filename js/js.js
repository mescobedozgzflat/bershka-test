let open = false;
var handler = function() {
  open = !open;
  if(open){
  	$('.header__searchMobile').addClass('prueba');
  	$('#modal_buscador').addClass('prueba');
  	$('body').addClass('prueba');
  	
  }else{
  	$('.header__searchMobile').removeClass('prueba');
  	$('#modal_buscador').removeClass('prueba');
  	$('body').addClass('prueba');
  }
  
};



//$('#ico-close-thick').unbind('click');



$('body').append('<div id="modal_buscador" class="inline-search-container" ng-if="$root.searchVisible" ng-controller="ItxSearchPageCtrl" bsk-body-overflow="" bsk-fixed-with-menu="">'+
	'<div class="overlay-loader ng-hide" ng-show="searchService.isLoading &amp;&amp; searchService.skip==0">'+
		'<div>'+
			'<span></span><span></span><span></span><span></span><span></span>'+
		'</div>'+
	'</div>'+
	'<div class="inline-search-bar">'+
		'<i id="ico-close-thick" class="ico ico-close-thick close-search" ng-click="closeSearch()"></i>'+
		'<search-bar><div class="ixtSearchBar search-bar-header"><div class="searchBar__inputContainer"><i class="ico ico-big ico-search-big"></i><input class="search-field hide-mobile ng-pristine ng-valid ng-empty ng-touched" ng-model="$ctrl.query" type="search" ng-enter="$ctrl.search()" ng-change="$ctrl.update()" itx-placeholder="" placeholder="Busca aquí: ropa, zapatos..." bsk-focus-input=""><input class="search-field is-mobile ng-pristine ng-untouched ng-valid ng-empty" ng-model="$ctrl.query" type="search" ng-enter="$ctrl.search()" ng-change="$ctrl.update()" itx-placeholder="" placeholder="Buscar" bsk-focus-input=""><div class="searchBar__predictionContainer search-field ng-hide" ng-show="searchService.prediction"><span class="searchBar__cloneInput"></span><span class="searchBar__prediction"></span></div></div><!----></div></search-bar>'+
		'<bsk-grid-size size="6" storage-key="SEARCH_GRID_COLUMNS" change="updateGridColumns(columns)" ng-show="$root.device!=\'mobile\' &amp;&amp; hasProducts()" class="grid-product-header-element view ng-hide"><div class="grid-size-selector"><ul><li class="view-element grid-size-text"><span>Ver</span></li><li data-ng-click="$ctrl.setGridCols(2)" class="view-2-link greyHover view-element"><a href="javascript:;" class="view-element-link selected" ng-class="{selected : $ctrl.gridCols == 2}">2</a></li><li data-ng-click="$ctrl.setGridCols(3)" class="view-3-link greyHover view-element"><a href="javascript:;" class="view-element-link" ng-class="{selected : $ctrl.gridCols == 3}">3</a></li><li data-ng-click="$ctrl.setGridCols(6)" class="view-6-link greyHover view-element"><a href="javascript:;" class="view-element-link" ng-class="{selected : $ctrl.gridCols == 6}">6</a></li><li class="grid-product-grid-size view-mobile-toggle" ng-switch="$ctrl.gridCols"><!----><!----><div ng-click="$ctrl.setGridCols(1)" ng-switch-when="2"><i class="ico ico-square-empty"></i><i class="ico ico-multi-square-black"></i></div><!----></li></ul></div></bsk-grid-size>'+
		'<!---->'+
	'</div>'+
	'<div id="searchResults" class="searchResults clearfix grid-cols-2">'+
  		'<!-- Resultados -->'+
        '<div id="resultsList" class="resultsList search-empty" ng-class="{\'search-empty\':!hasProducts()}" infinite-scroll="loadMoreResults()" infinite-scroll-distance="scrollDistance" infinite-scroll-disabled="searchService.loading" infinite-scroll-immediate-check="false" infinite-scroll-container="\'#searchResults\'">'+
			'<div class="empty-search-query ng-hide" ng-show="showEmptyQuery">'+
				'<!-- BEGIN SPOT=BK3_ESpot_Empty_Query -->'+
'<!-- END SPOT=BK3_ESpot_Empty_Query -->'+
			'</div>'+
	        '<div class="ng-hide" ng-show="searchService.currentSearch &amp;&amp; !hasProducts()">'+
'<!-- BEGIN SPOT=BK3_ESpot_Search_Empty -->'+
'<div class="noResults ng-hide" ng-show="searchService.currentSearch.docs.length == 0">'+
    		'<h2>¡Inténtalo de nuevo!</h2>'+
    		'<p>No se encontró ningún producto en la búsqueda de:</p>'+
    		'<h4 ng-bind="searchService.query"></h4>'+
    		'<p>Inténtalo otra vez siguiendo estos consejos:</p>'+
    		'<p>Revisa la ortografía. Inténtalo cambiando alguna letra.</p>'+
    		'<p>Algún término más general puede conducirte a productos similares.</p>'+
    	'</div>'+
'<!-- END SPOT=BK3_ESpot_Search_Empty -->'+
	        '</div>'+
			'<div class="productGrid clearfix">'+
				'<!----></div>'+
			'<!---->'+
        '</div>'+
    	'<!-- Menu Lateral -->'+
		'<!----><search-facets ng-if="$root.device!=\'mobile\'"><!----></search-facets><!---->'+
	'</div>'+
'</div>');


$('.header__searchMobile').unbind('click');
$('.header__searchMobile').bind('click',handler);



$('#ico-close-thick').bind('click',function(){
	$('.header__searchMobile').removeClass('prueba');
  	$('#modal_buscador').removeClass('prueba');
  	$('body').addClass('prueba');
  	open = !open;
});