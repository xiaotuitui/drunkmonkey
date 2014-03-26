$(window).load(function() {    

    var theWindow        = $(window),
        $bg              = $(".page-background"),
        aspectRatio      = $bg.width() / $bg.height();
                                
    function resizeBg() {
        
        if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
            $bg
                .removeClass('full-width')
                .addClass('full-height');
        } else {
            $bg
                .removeClass('full-height')
                .addClass('full-width');
        }
                    
    }
                                
    theWindow.resize(resizeBg).trigger("resize");
});