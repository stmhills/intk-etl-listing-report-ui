/****************************************
 jQuery extension to dynamically load script files and
 create a link tag in the 'head'section.
 Notes:
 Setting the debug variable (appDebug) to true will call this 
 method and place the link in the header to verify files are
 loaded and show the file in the 'sources' chrome debugger 
 with ctrl + o
 ************************************************************/
 func=(function($){
 	var import_css_imported = [];
 	$.extend(true, {

 		import_css : function(script){

 			var found = false;
 			for(var i = 0; i < import_css_imported.length; i++){
 				if(import_css_imported[i] == script) {
 					found = true;
 					break;
 				}
 			}

 			if(found == false){
			    //type="text/javascript"
			    //<link rel="stylesheet" href='/css/bootstrap.css'>
			    $("head").append('<link rel="stylesheet" href="' + script + '">');
			    import_css_imported.push(script);
			}
		}
	});

 })(jQuery);
 /*************************************************************
 Setting the debug variable (appDebug) to false will call this 
 method and will NOT show in the header as a link but will
 show the file in the 'sources' chrome debugger with ctrl + o
 Notes:
 method used to dyanamically load script files (css/js) into
 the html document. Does NOT create a script tag in the 'head'
 of the document.
 ************************************************************/
 require_prod_css = function (script, doCache) {
    // we will default to a 'cached' call in order to avoid
    // making a call each time...
    if (doCache === null) {
    	doCache = true;
    }
    $.ajax({
    	url: script,
    	dataType: "css",
        async: false, // we want to load these scripts sync since we're relying on them
        cache: doCache,
        success: function () {
        	console.log('loaded css file: ' + script);
        },
        error: function (xhr, status, error) {
        	var err = eval("(" + xhr.responseText + ")");
        	console.log('error loading script ' + script + ': ' + err);
        	throw new Error('error loading script ' + script + ': ' + err);
        }
    });
};
/****************************************
 File to dynamically load script files 
 **************************************/
 requireCSS = function (script, doCache) {
 	$.import_css(script);
 }
/****************************************
 jQuery extension to dynamically load script files and
 create a script tag in the 'head'section.
 Notes:
 Setting the debug variable (appDebug) to true will call this 
 method and place the link in the header to verify files are
 loaded and show the file in the 'sources' chrome debugger 
 with ctrl + o
 ************************************************************/
 func=(function($){
 	var import_js_imported = [];
 	$.extend(true, {

 		import_js : function(script){

 			var found = false;
 			for(var i = 0; i < import_js_imported.length; i++){
 				if(import_js_imported[i] == script) {
 					found = true;
 					break;
 				}
 			}

 			if(found == false){
                //type="text/javascript"
                $("head").append('<script src="' + script + '"></script>');
                import_js_imported.push(script);
            }
        }
    });

 })(jQuery);
 /*************************************************************
 Setting the debug variable (appDebug) to false will call this 
 method and will NOT show in the header as a link but will
 show the file in the 'sources' chrome debugger with ctrl + o
 Notes:
 method used to dyanamically load script files (css/js) into
 the html document. Does NOT create a script tag in the 'head'
 of the document.
 ************************************************************/
 require_prod = function (script, doCache) {
    // we will default to a 'cached' call in order to avoid
    // making a call each time...
    if (doCache === null) {
    	doCache = true;
    }
    $.ajax({
    	url: script,
    	dataType: "script",
        async: false, // we want to load these scripts sync since we're relying on them
        cache: doCache,
        success: function () {
        	console.log('loaded js file: ' + script);
        },
        error: function (xhr, status, error) {
        	var err = eval("(" + xhr.responseText + ")");
        	console.log('error loading script ' + script + ': ' + err);
        	throw new Error('error loading script ' + script + ': ' + err);
        }
    });
}
/****************************************
 extension to dynamically load script files and
 create a script tag in the 'head'section.
 Notes:
 Setting the will place the link in the header to verify files are
 loaded and show the file in the 'sources' chrome debugger 
 with ctrl + o
 ************************************************************/
 asyncLoad = function (script) {

 	if (!script) {
 		return false;
 	}

 	var scr = document.createElement('script');
 	scr.type = 'text/javascript';
 	scr.async = false;
 	scr.src = script;

 	var s = document.getElementsByTagName('script')[0];
 	s.parentNode.insertBefore(scr, s);

 	return true;
 }
/****************************************
 Script to dynamically load script files 
 Notes:
 Debug will put in head, prod will just
 load file into memory.
 **************************************/
 require = function(script, doCache) {
 	$.import_js(script);
 }
 /****************************************
 Script to extend array functionality using
 ECMA5 approach.
 **************************************/
 Array.prototype.clear = function () {
 	while (this.length > 0) {
 		this.pop();
 	}
 };