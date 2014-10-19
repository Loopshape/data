# BASIC SETUP FOR TYPO3 by t3-developer.com
# Version: 1.1 build 10.3.2013

# INCLUDES #############################
# For MenuLib see also http://t3-developer.com/typoscript/typo3-menus/typoscript-navigation/
#
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/myTemplate/typoscript/ts_menu.txt">

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


#
# PAGE ##################
#
page = PAGE
page {
    typeNum = 0
    shortcutIcon = {$config.fileadminPath}{$config.shortcutIcon}
    insertClassesFromRTE = 1
    adminPanelStyles = 1

    headerData {
        # We use the Extension SEO Basic, if you don't like, remove this block
        776 < plugin.tx_seobasic
        #5 = TEXT 
        #5 {
        #    data = page:tx_seo_titletag // page:title
        #    trim = 1
        #    stdWrap.stdWrap.append = TEXT
        #    stdWrap.stdWrap.append.data = TSFE:tmpl|sitetitle
        #    stdWrap.stdWrap.append.trim = 1
        #    stdWrap.stdWrap.append.required = 1
        #    stdWrap.stdWrap.append.if.isTrue = {$plugin.tx_seo.titleWrapAppendSiteTitle}
        #    stdWrap.stdWrap.append.noTrimWrap = | - ||
        #    stdWrap.noTrimWrap = {$plugin.tx_seo.titleWrap}
        #    stdWrap.insertData = 1
        #    htmlSpecialChars = 1
        #    wrap (
        #        <title>|</title>
        #    )
        #}
        # The canonical Tag, important for double Content, depends on EXT Seo Basics!
        #75 = TEXT
        #75.cObject = USER
        #75.cObject.userFunc = tx_seobasics->getCanonicalUrl
        #75.cObject.useDomain = current
        #75.stdWrap >
        #75.wrap = <link rel="canonical" href="|" />
    }
    # The meta Tags for the page. Write here your own standards which were shown 
    # if no entrys on the single page exist. 
    meta {
        #description.data = page:description
        #description.ifEmpty.data  = My poor standard description

        #keywords.data = page:keywords
        #keywords.ifEmpty.data =  My poor standard keywords

        #title.data = page:tx_seo_titletag // page:title
        #title.stdWrap.stdWrap.append = TEXT
        #title.stdWrap.stdWrap.append.data = TSFE:tmpl|sitetitle
        #title.stdWrap.stdWrap.append.trim = 1
        #title.stdWrap.stdWrap.append.required = 1
        #title.stdWrap.stdWrap.append.if.isTrue = 1
        #title.stdWrap.stdWrap.append.noTrimWrap = | - ||

        date.data = page:SYS_LASTCHANGED // page:crdate;
        date.date = Y-m-d

        # The most important Tag for responsive Design is the viewport (Steve Jobs)
        #viewport = width = device-width, initial-scale=1.0
        robots = fileadmin/robots.txt
    }
    
    #includeCSS {
    #    # We use a standard Grid system based on the boilertemplate
    #    grid = fileadmin/myTemplate/css/sitestyle.css
    #    grid.media = screen
    #    grid.forceOnTop = 1
    #   
    #     # our own stylesheet
    #    styles = {fileadmin/myTemplate/css/styles.css
    #    styles.media = screen
    #    styles.forceOnTop = 1
    #
    #    # Add your own CSS here which are needed on more than one page!
    #    }
    
    # The modernizr lib to fix some IE stuff  
    #includeJSlibs {
    #    modernizr = fileadmin/myTemplate/javascript/libs/modernizr-2.6.1.min.js
    #    modernizr.forceOnTop   = 1    
    #}

    # We put the hole jQuery stuff in the footer for a faster pageload
    #includeJSFooterlibs  {
    #    jquery              = fileadmin/myTemplate/javascript/libs/jquery-1.8.0.min.js
    #    jquery.forceOnTop   = 1
    #    jquery-ui          = fileadmin/myTemplate/jquery-ui/js/jquery-ui-1.10.0.custom.min.js
    #}
    # now our own jQuery ("includeJSFooter" is rendered after "includeJSFooterlibs" !)
    #includeJSFooter {   
    #    t3dev               = fileadmin/myTemplate/javascript/t3dev.js
    #}

#    jsFooterInline {
#        8060 = HTML
#        8060.value (
#            #you can put your google analytics Script here or in the footer template which I prefer
#        )
#       8060.insertData = 1 
#    }

} # END Page object

#
# Sitemap from EXT Seo Basic
# We put the seo sitemap an typeNum 776 page
# 
#    includeLibs.tx_seobasics_sitemap = EXT:seo_basics/class.tx_seobasics_sitemap.php
#    tx_seo_xmlsitemaps = PAGE
#    tx_seo_xmlsitemaps {
#        typeNum = 776
#        config.disableAllHeaderCode = 1
#        config.renderCharset = UTF-8
#        config.xmlprologue = xml_10
#        config.additionalHeaders = Content-type: text/xml
#        config.xhtml_cleaning = 0
#        10 = USER
#        10.userFunc = tx_seobasics_sitemap->renderXMLSitemap
#        }

# 
# if you need own frames in content elements, define them here:
#
tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
key.field = section_frame
100 = TEXT
100 {
    value = <div id="c{field:uid}" class="csc-frame-frame1">|</div>
     insertData = 1 
   } 
}

