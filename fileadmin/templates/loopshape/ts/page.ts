page = PAGE
page.typeNum = 0

config {
  
    xmlprologue = none
    htmlTag_langKey = de_DE
    xhtml_cleaning = all
    no_cache = 0

    cObject = COA
    cObject {
      
       10 = LOAD_REGISTER
       10 {
            newLine.char = 10
            tagEnd {
                current = 1
                split.max = 2
                split.token = <html
                split.returnKey = 1
            }
        }
       
        20 = TEXT
        20.value = <!--[if lt IE 7]> <html class="no-js ie6 oldie"{register:tagEnd} <![endif]-->
        20.wrap = |{register:newLine}
        20.insertData = 1
        30 < .20
        30.value = <!--[if IE 7]> <html class="no-js ie7 oldie"{register:tagEnd} <![endif]-->
        40 < .20
        40.value = <!--[if IE 8]> <html class="no-js ie8 oldie"{register:tagEnd} <![endif]-->
        50 < .20
        50.value = <!--[if IE 9]> <html class="no-js ie9 "{register:tagEnd} <![endif]-->
        60 < .20    
        60.value = <!--[if gt IE 9]> <!--><html class="no-js"{register:tagEnd} <!--<![endif]-->
 
        90 = RESTORE_REGISTER
    }
    
    meaningfulTempFilePrefix = 40
    disableImgBorderAttr = 1
    index_enable = 1
 
    removeDefaultJS                     = external
    inlineStyle2TempFile                = 1
 
    sys_language_uid                    = 0
    sys_language_overlay                = hideNonTranslated
    sys_language_mode                   = content_fallback
    language                            = de
    locale_all                          = de_DE.UTF-8
    htmlTag_langKey                     = de
 
    admPanel                            = 0
    debug                               = 0
 
    cache_period                        = 43200
    cache_clearAtMidnight               = 1
    sendCacheHeaders                    = 1

    tx_realurl_enable                   = 1
    simulateStaticDocuments             = 0

    intTarget                           =
    extTarget                           =

    disablePrefixComment                = 1
    
}

page.meta {
   
   description = Main Website of Loopshape
   description.override.field = description
   keywords = web,development,media,design
   keywords.override.field = keywords
   author = Arjuna Noorsanto
   robots = index, follow
   MSSmartTagsPreventParsing = true
   imagetoolbar  = false
    
}
 
#CHARSET
config.metaCharset = utf-8
config.renderCharset = utf-8
 
#COOLURI
config.baseURL = http://loopshape.org/
config.tx_cooluri_enable = 0
 
#EMAIL SPAMPROTECTION
config.spamProtectEmailAddresses = 1
config.spamProtectEmailAddresses_atSubst = (at)
 
#COMMON PAGE CONFIGURATION
page.config.admPanel = 0
config{
    intTarget = _self
    minifyJS = 1
}
 
#LANGUAGE
config {
    linkVars = L(0-1)
    sys_language_mode = content_fallback
    sys_language_overlay = hideNonTranslated
    #sys_language_overlay = 1
    htmlTag_langKey = de
    sys_language_uid = 0
    language = de
    locale_all = de_DE
}
page.meta{
    language = de
    keywords.field = keywords
    keywords.ifEmpty (
        WEB,DEVELOPMENT,MEDIA,DESIGN
    )
    description.field = description
    description.ifEmpty (
        LOOPSHAPE Development Area
    )
}
 
#ENGLISH
#[globalVar=GP:L=1]
#   config {
#       htmlTag_langKey = en
#       sys_language_uid = 1
#       language = en
#       locale_all = en_EN
#   }
#   page.meta{
#       author = PAGE AUTHOR GOES HERE
#       language = en
#       keywords.field = keywords
#       keywords.ifEmpty (
#           FALLBACK, KEYWORDS, GO, HERE
#       )
#        description.field = description
#        description.ifEmpty (
#            FALLBACK DESCRIPTION GOES HERE
#        )
#    }
#[global]