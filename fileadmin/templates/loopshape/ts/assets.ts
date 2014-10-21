config {
 
    no_cache             = 1
 
    googleTracking       = 
 
    brandName            = loopshape
    openGraphPageTitle   = devarea
 
    meta {
        viewport         = width=device-width,minimal-ui
        robots           = index,follow
        apple-mobile-web-app-capable = no
        compatible       = IE=edge,chrome=1
    }
    
    headerComment        = Website constructed by: Arjuna Noorsanto

    #apple {
        #touch-icon       = fileadmin/templates/loopshape/img/icons/apple-touch-icon-precomposed.png
        #touch-icon-72    = fileadmin/templates/loopshape/img/icons/apple-touch-icon-72x72-precomposed.png
        #touch-icon-114   = fileadmin/templates/loopshape/img/icons/apple-touch-icon-114x114-precomposed.png
        #startup          = fileadmin/templates/loopshape/img/icons/apple-startup.png
    #}
}

config.baseUrl = http://loopshape.org/
#[globalString = ENV:HTTP_HOST=localhost:8888]
#    config.baseUrl = http://localhost:8888/loopshapetest/
#[global]

config.removeDefaultJS = external

# CLEAN UP CONTENT RENDERING
config.disableImgBorderAttr = 1
lib.stdheader.stdWrap {
    dataWrap = |
    prefixComment >
}
tt_content{
    stdWrap{
        innerWrap.cObject.default >
        dataWrap >
        prefixComment >
        prepend.dataWrap >
    }
    header.20{
        dataWrap >
        prefixComment >
    }
    html.prefixComment >
    default.prefixComment >
    text{
        stdWrap.prefixComment >
        20.prefixComment >
    }
    textpic.20.stdWrap.prefixComment >
    table.20.stdWrap.prefixComment >
    mailform.20.stdWrap.wrap >
    menu.20.stdWrap.prefixComment >
    image.20.stdWrap.prefixComment >
    list.20.stdWrap.prefixComment >
    stdWrap.prepend.dataWrap >
}
#DELETE DEFAULT ATTRIBUTES (z.B. class="bodytext")
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes >

config.no_cache = 1

config.doctype = html5
config.doctypeSwitch = 1
config.xhtml_cleaning = all

config.bodyTag = <body id="cms">

#FAVICON
page.shortcutIcon = Templates/img/favicon.ico
 
#META
page.meta.author = Arjuna Noorsanto
page.meta.robots = index,follow
 
#CSS
page.includeCSS{
    global = Templates/css/main.css
}
page.CSS_inlineStyle >

page.includeJSlibs.jquery.external = 1
#page.includeJSlibs.jquery = //ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js
 
#JAVASCRIPT
page.includeJS{
  
    html5 = //html5shiv.googlecode.com/svn/trunk/html5.js
    html5.external = 1
    html5.allWrap = <!--[if IE]>|<![endif]-->
  
    #jquery = //ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
    #jquery.external = 1
    #page = Templates/js/main.js
    
    login {
        <script>
            (function() {
              var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
              po.src = 'https://apis.google.com/js/client:plusone.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
            })();
        </script>
    }
    
    googlebox {
      <script src="https://apis.google.com/js/platform.js" async defer>{lang: 'en-GB'}</script>
    }
    
}

#
# Responsive Design Optimization
# See also http://t3-developer.com/typo-3/responsive-webdesign-mit-typo3/einfuehrung-responsive-webdesign-mit-typo3/
#
tt_content.image.20 {
     imageStdWrap.dataWrap = <div class="csc-textpic-imagewrap"> | </div>
     imageColumnStdWrap.dataWrap = <div class="csc-textpic-imagecolumn"> | </div>
    }
tt_content.image.20 {
    rendering {
         dl {
            imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow"> | </div>
            imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow csc-textpic-imagerow-last"> | </div>
            oneImageStdWrap.dataWrap = <dl class="csc-textpic-image###CLASSES###" > | </dl>
            }
        ul {
            imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow"><ul> | </ul></div>
            imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow csc-textpic-imagerow-last"><ul> | </ul></div>
            oneImageStdWrap.dataWrap = <li class="csc-textpic-image###CLASSES###"> | </li>
            }
        div {
            imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow"> | </div>
            imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow csc-textpic-imagerow-last"> | </div>
            oneImageStdWrap.dataWrap = <div class="csc-textpic-image###CLASSES###"> | </div>
          }
         simple {
             imageStdWrap.dataWrap = <div class="csc-textpic-imagewrap csc-textpic-single-image"> | </div>
          }
     }
}
 
tt_content.image.20 {
    renderMethod = figure
        rendering {
            figure {
                imageRowStdWrap.dataWrap = <div class="csc-textpic-imagerow"> | </div>
                imageLastRowStdWrap.dataWrap = <div class="csc-textpic-imagerow csc-textpic-imagerow-last"> | </div>
                noRowsStdWrap.wrap = 
                oneImageStdWrap.dataWrap = <figure class="csc-textpic-image"> | </figure>
                imgTagStdWrap.wrap =   |  
                editIconsStdWrap.wrap = <div> | </div>
                caption.wrap = <figcaption> | </figcaption>
                caption.required = 1
               }
     }
}

tt_content.image.20.1.sourceCollection {
  # max width of the image for the 'small' viewport
  small.maxW = 320
  # width descriptor of the 'small' srcset attribute
  # in this case at viewport width of 400px
  small.srcsetCandidate = 960w
 
  # max width of the image for the 'middle' viewport
  middle.maxW = 480
  # width descriptor of the 'middle' srcset attribute
  # in this case at viewport width of 600px
  middle.srcsetCandidate = 640w 
}

page.headerData  {
    3890 = TEXT
    3890.value = <meta http-equiv="X-UA-Compatible" content="IE=edge">
    3900 = TEXT
    3900.value = <!--[if lt IE 9]><script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script><![endif]-->
}