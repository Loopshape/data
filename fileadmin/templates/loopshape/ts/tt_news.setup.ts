###
# This is the default TS-setup for the new tt_news standard html template: EXT:tt_news/pi/res/tt_news_v3_template.html
#
# (see Section Reference in the manual for more options & parameters)
#
# tt_news v 3.0.0
###

# Includes the newsLib:
includeLibs.ts_news = EXT:tt_news/pi/class.tx_ttnews.php

# Fix for TYPO3 4.6:
tt_content.list.20.9 = CASE
tt_content.list.20.9 {
    key.field = layout
    0 = < plugin.tt_news
}


plugin.tt_news = USER
plugin.tt_news {

  # stdWrap for the complete plugin output
  stdWrap.wrap =

  # template file
  templateFile = ./Templates/Layout/news.html

  # page(s) where the news articles are stored -> "Starting point"
  pid_list = 32

  # extend "pid_list" by the number of recursive levels.
  recursive = 3

  # ignore "pid_list" and "recursive". This saves a lot of processing time in huge pagetrees, but it has the disadvantage that the "enable fields" (hidden, start, stop ...) of the pages with news are ignored, too.
  dontUsePidList = 0

  # exclude news from display in a plugin, if they've been displayed already by another plugin on the same page.
  excludeAlreadyDisplayedNews = 0


  # page for the Single view
  singlePid = 35


  # decides which template part is taken for displaying news
  code = 

  # maximum number of news all lists but latest
  limit = 25

  # maximum number of news in "latest"
  latestLimit = 25

  # page where the "back to list" link in single view links to
  backPid = 34

  # don't add plugin GETvars to the singleview link
  dontUseBackPid = 1

  # enable optionSplit for parameters in displayList and displayLatest
  enableOptionSplit = 1

  # int/optionSplit of the template part number(s)
  altLayoutsOptionSplit =

  # number of alternating template parts (is ignored if altLayoutsOptionSplit is set)
  alternatingLayouts = 3

  # typolink configuration for news with type "internal link" or "external URL"
  pageTypoLink.parameter.current = 1


  # allow news plugins to be cached
  allowCaching = 1

  ignoreEnableFields {
    starttime = 0
    endtime = 0
  }

  /********************************************************************************
   *    SINGLE news settings:
   */

  # divide the singleview to multiple pages
  useMultiPageSingleView = 0

  # insert pagebreaks to the singleview after a certain number of words
  maxWordsInSingleView = 0

  appendSViewPBtoContent = 0
  useParagraphAsPagebreak = 0

  displaySingle {
    age_stdWrap.age = 1
    age_stdWrap.wrap = |<br />
    textNewsAge_stdWrap.wrap =
    date_stdWrap.strftime= %d.%m.%Y
    time_stdWrap.strftime= %H:%M
    title_stdWrap.wrap =

    author_stdWrap.typolink.parameter.field = author_email
    author_stdWrap.wrap = |<br />
    preAuthor_stdWrap.noTrimWrap = || |
    author_stdWrap.required = 1

    category_stdWrap.wrap = |<br />
    email_stdWrap.setContentToCurrent = 1
    email_stdWrap.typolink.parameter.current = 1

  subheader_stdWrap {
    wrap = <h2>|</h2>
      trim = 1
      required = 1
      parseFunc < lib.parseFunc_RTE
      parseFunc.nonTypoTagStdWrap.encapsLines.nonWrappedTag >
    }

    content_stdWrap.parseFunc < lib.parseFunc_RTE
    content_stdWrap.parseFunc.nonTypoTagStdWrap.encapsLines.addAttributes.P >


    # stdWrap for "additional info" (links, files, related news)
    addInfo_stdWrap.wrap = <div class="news-single-additional-info"> | </div>

    links_stdWrap.wrap = <dl class="news-single-links">|</dl>
    linksHeader_stdWrap.wrap = <dt>|</dt>
    linksItem_stdWrap >
    linksItem_stdWrap {
      parseFunc < lib.parseFunc_RTE
      parseFunc.nonTypoTagStdWrap.encapsLines {
        nonWrappedTag >
        innerStdWrap_all.wrap = <dd>|</dd>
      }
    }

    nextPrevRecSortingField = datetime
    reversePrevNextOrder = 0

    showTitleAsPrevNextLink = {$plugin.tt_news.showTitleAsPrevNextLink}
    
    prevLinkTitle_stdWrap.wrap =
    prevLinkLabel_stdWrap.wrap = &lt;&nbsp;|
    prevLink_stdWrap.wrap =

    nextLinkTitle_stdWrap.wrap =
    nextLinkLabel_stdWrap.wrap = |&nbsp;&gt;
    nextLink_stdWrap.wrap = <div style="float:right;">|</div>


    imageCount = 10
    imgAltTextField = imagecaption
    imageWrapIfAny = <div class="news-single-img"> | </div>
    imageMarkerOptionSplit =

    caption_stdWrap {
      trim = 1
      required =
      wrap =
      dataWrap = <p class="news-single-imgcaption" style="width:{TSFE:lastImageInfo|0}px;">|</p>
    }

  }


  displaySingle.image {
  
    file.maxW = 960
    file.maxH = 704

#   altText = TEXT
# altText {
#   field = imagealttext
#   stripHtml = 1
#   split.token.char = 10
#   split.token.if.isTrue = {$styles.content.imgtext.imageTextSplit}
#   split.returnKey.data = register : IMAGE_NUM_CURRENT
# }

# titleText < .altText
# titleText.field = imagetitletext


    wrap =
    imageLinkWrap = 1
    imageLinkWrap {
      enable = 1
      bodyTag = <body bgColor="#ffffff" style="margin:0;">
      wrap = <a href="javascript:close();"> | </a>
      width = 960m
      height = 720
      JSwindow = 1
      JSwindow.newWindow = 1
      JSwindow.expand = 0,0
    }
  }





  /********************************************************************************
   *    LIST news settings:
   */

  displayList {
    age_stdWrap.age = 1
    textNewsAge_stdWrap.wrap =
    date_stdWrap.strftime= %d.%m.%Y
    time_stdWrap.strftime= %H:%M

    # Don't display caption in List view
    caption_stdWrap.if.directReturn = 0

    title_stdWrap.wrap =


  subheader_stdWrap {
      stripHtml = 1
      crop = 230 | ... | 1
      ifEmpty.field = bodytext

    # the "more" link is directly appended to the subheader
    append = TEXT
    append.data = register:newsMoreLink
    append.wrap = <span class="news-list-morelink">|</span>
    # display the "more" link only if the field bodytext contains something
    append.if.isTrue.field = bodytext

    outerWrap = <p>|</p>
  }


    author_stdWrap.wrap =
    preAuthor_stdWrap.noTrimWrap = || |
    imageCount=1
    imageWrapIfAny =

    category_stdWrap.wrap = <div class="news-list-category"> | </div>
    imgAltTextField = imagecaption

    linkTitleField = title
    linkTitleField.wrap =
    linkAltField = short
    linkAltField.wrap =
    
    listImageMode = {$plugin.tt_news.listImageMode}
  }
  displayList.image {
    file.maxW = 320
    file.maxH = 240
    imageLinkWrap = 1

    # stdWrap which is used when there's no image at all
    noImage_stdWrap.wrap =
  }









  /********************************************************************************
   *    LATEST news settings:
   */

  # if set, a LATEST plugin changes its contents when a category is selected in the category menu
  latestWithCatSelector = 0
  # display archived news in LATEST
  displayArchivedInLatest = 0

  displayLatest {
    age_stdWrap.age = 1
    date_stdWrap.strftime= %d.%m.%Y
    time_stdWrap.strftime= %H:%M
    caption_stdWrap.if.directReturn = 0
    subheader_stdWrap {
      stripHtml = 1
      crop = 100 | ... | 1
      ifEmpty.field = bodytext
      outerWrap = <p>|</p>
    }
    imageCount = 1
    imgAltTextField = imagecaption
    imageWrapIfAny =
    category_stdWrap.wrap = <div class="news-latest-category"> | </div>
    categoryItem_stdWrap.wrap =

    linkTitleField = title
    linkTitleField.wrap =
    linkAltField = short
    linkAltField.wrap =
    
    latestImageMode = {$plugin.tt_news.latestImageMode}
 
  }
  displayLatest.image {
    file.maxW = 320
    file.maxH = 240
    imageLinkWrap = 1

    stdWrap.spaceAfter = 0
  }








  /********************************************************************************
   *    Pagebrowser settings:
   */

  # use the extended pagebrowser
  usePiBasePagebrowser = 1

  pageBrowser {
    maxPages = 7
    showResultCount = 1
    showPBrowserText = 0
    dontLinkActivePage = 1

    showFirstLast = 1
    pagefloat = center
    showRange = 1
    hscText = 1

    showResultsNumbersWrap = |
    browseBoxWrap = <div class="news-list-browse">|</div>
    showResultsWrap = <div class="showResultsWrap">|</div>
    browseLinksWrap = <div class="browseLinksWrap">|</div>
    disabledLinkWrap = <span class="disabledLinkWrap">|</span>
    inactiveLinkWrap = |
    activeLinkWrap = <span class="activeLinkWrap">|</span>
    activeLinkWrap.stdWrap.wrap = <span class="activeLinkWrap">|</span>


  }


  singleViewPageBrowser {
    maxPages = 10
    showResultCount = 0
    showPBrowserText = 0
    dontLinkActivePage = 1

    showFirstLast = 1
    pagefloat = center
    showRange = 0
    hscText = 1

    showResultsNumbersWrap = |
    browseBoxWrap = <div class="news-single-browse">|</div>
    showResultsWrap = <div class="showResultsWrap">|</div>
    browseLinksWrap = <div class="browseLinksWrap">|</div>
    disabledLinkWrap = <span class="disabledLinkWrap">|</span>
    inactiveLinkWrap = |
    activeLinkWrap = <span class="activeLinkWrap">|</span>
    activeLinkWrap.stdWrap.wrap = <span class="activeLinkWrap">|</span>


  }
  

  /********************************************************************************
   *    settings for categories:
   */


  # Configures how news are selected by category:
  # 2 = Show news which have all selected categories assigned (AND)
  # 1 = Show news which have at least one of the selected categories assigned (OR)
  # 0 = Show all. Don't care about category selections
  # -1 = Show news which not have all of the selected categories assigned (AND)
  # -2 = Show news which have none of the selected categories assigned (OR)
  categoryMode = 0

  # show only news with selected categories
  categorySelection = 0

  # extend categorySelection by subcategories
  useSubCategories = 0

  # disables "useSubCategories" for plugins with categoryMode = 2
  ignoreUseSubcategoriesForAndSelection = 1

  # display subcategories of assigned categories in news articles
  displaySubCategories = 0

  # show a list of news belonging to the same category in single view
  showRelatedNewsByCategory = 0

  # use singlePid from category record instead of global singlePid
  useSPidFromCategory = 0

  # go up in the category "rootline" until a singlePid has been found
  useSPidFromCategoryRecusive = 1

  # divider for categories in news articles
  categoryDivider = 

  # stdWrap for the category divider
  categoryDivider_stdWrap.noTrimWrap = || |

  # Category Text mode: posible values are: 0 = don't display, 1 = display but no link, 2 = link to category shortcut, 3 = act as category selector.
  catTextMode = 3
  # Category Image mode: same values as catTextMode.
  catImageMode = 3

  # maximum width for category images
  catImageMaxWidth = 148

  # maximum heihgt for category images
  catImageMaxHeight = 148

  # maximum number of displayed category images in a news article
  maxCatImages = 10

  # maximum number of displayed category titles in a news article
  maxCatTexts = 10

  # order categories by this field.
  catOrderBy = 



  /********************************************************************************
   *    setting for the category menu (CATMENU):
   */

  # page where the category menu links point to. If not set the current page is taken.
  catSelectorTargetPid =

  # if set, the currently selected archive period (year & month) is added to the catmenu links (requires useHRDates=1)
  catmenuWithArchiveParams = 0

  displayCatMenu {
    # list of page IDs where the categories for the menu are stored (overrides GRSP if given)
    catPidList = 32
    # extend "catPidList" by the number of recursive levels
    recursive = 3

    # catmenu rendermode:
    # nestedWraps = make a catmenu with nested wraps
    # tree = use TYPO3 class treeview to build an expandable menu
    # ajaxtree = expandable menu with ajax (requires TYPO3 >= 4.1)

    mode = ajaxtree

    # include prototype js library (required for catmenu mode "ajaxtree")
    includePrototypeJS = 1
    
    
    showNewsCountForCategories = 1

    # enable expand/collapse for the category menu
    expandable = 1
    # completely expand the category menu on first load
    expandAll = 1
    # keep the first level of the category menu expanded
    expandFirst = 1

    # stdWrap for the complete category menu
    catmenu_stdWrap.wrap = <div class="news-catmenu">|</div>

    # stdWrap for the category menu header in "nestedWraps" mode
    catmenuHeader_stdWrap.wrap = <p class="news-catmenu-header">|</p>
    
    # if set, the category menu header will not be displayed at all
    hideCatmenuHeader = 0
    
    # which icons to use for the category menu
    # 1 = icon from cat record
    # 2 = own icons
    # 0 = default icon
    # -1 = no icon
    catmenuIconMode = 1

    # if "catmenuIconMode" = "2" all catmenu images (join, line ...) are expected in this path (relative)
    catmenuIconPath =

    # icon for all categories if "catmenuIconMode" = 2
    catmenuIconFile = EXT:tt_news/res/arrow.gif


    catmenuIconFile {
      # icon size for "catmenuIconMode" 1 & 2
      width = 18
      height = 16
    }

    # disables the "root" icon of the category tree
    catmenuNoRootIcon = {$plugin.tt_news.displayCatMenu.catmenuNoRootIcon}

    # insert the category description as title attribute in catmenu links
    insertDescrAsTitle = 1

    # userdefined root icon
    catmenuRootIconFile =


    catmenuRootIconFile {
      # size of userdefined root icon
      width = 18
      height = 16
    }

    # wraps for active category links in the tree (only in mode "nestedWraps")
    catmenuItem_ACT_stdWrap.wrap = <div class="news-catmenu-ACT">|</div>

    # wraps for inactive category links in the tree (only in mode "nestedWraps")
    catmenuItem_NO_stdWrap.wrap = <div class="news-catmenu-NO">|</div>

    # wraps for each menu level (only in mode "nestedWraps")
    catmenuLevel1_stdWrap.wrap = <div class="level1">|</div>
    catmenuLevel2_stdWrap.wrap = <div class="level2">|</div>
    catmenuLevel3_stdWrap.wrap = <div class="level3">|</div>
    catmenuLevel4_stdWrap.wrap = <div class="level4">|</div>
  }






  # settings for the category rootline
  catRootline {
    # render the category rootline to the marker ###NEWS_CATEGORY_ROOTLINE###
    showCatRootline = {$plugin.tt_news.showCatRootline}

    # stdWrap for the category rootline
    catRootline_stdWrap.wrap = <div class="news-catRootline">|</div>

  # link the category title to the page which is configured as category shortcut
  linkTitles = 1

  # stdWrap for a single category title in the category rootline
  title_stdWrap.wrap =

  # divider for category titles in the category rootline
  divider = &nbsp;&gt;&nbsp;
  }




  /********************************************************************************
   *    Archive settings (AMENU):
   */


  archiveMode = {$plugin.tt_news.archiveMode}
  archive = 0 
  emptyArchListAtStart = 0 

  # This enables the use of the GETvars "year" and "month" for the archive links instead of "pS", "pL" and "arc".
  useHRDates = 1

  # add "year", "month" and "day" to links pointing to the single view
  useHRDatesSingle = 1

  # add only "year" and "month" to links pointing to the single view
  useHRDatesSingleWithoutDay = 0


  # page id for the archive link in "LATEST" template
  archiveTypoLink.parameter = 30

  # If this is set, elements are automatically in the archive, after the given number of days has passed.
  datetimeDaysToArchive = 31

  # If this is set, the archive-menu selects news by their archivedate - otherwise by their datetime.
  enableArchiveDate = {$plugin.tt_news.enableArchiveDate}


  # start date for the archive menu (php strtotime() syntax. e.g.: 1.1.2002, -3 months, -10 years, now
  amenuStart = 1.10.2014

  # end date for the archive menu (php strtotime() syntax. e.g.: 1.1.2002, -3 months, -10 years, now
  amenuEnd = now

  # if set, newer archive menu items are displayed first
  reverseAMenu = 1

  # don't display empty periods in archive menu
  archiveMenuNoEmpty = 1

  # news with zero datetime will cause the amenu to search all periods starting from 1970. Disabling this is not recommanded.
  ignoreNewsWithoutDatetimeInAmenu = 1

  # never add the currently selected categories to archive links
  disableCategoriesInAmenuLinks = 0

  # if set, the archive menu changes its contents when a category is selected in the category menu and the currently selected category is added to the amenu links
  amenuWithCatSelector = 1

  # divide the archive menu to yearly periods
  showYearHeadersInAmenu = 1

  # stdWrap for the year in the archive menu
  archiveYear_stdWrap.wrap = <li class="news-amenu-item-year">|</li>

  # CObject for a single archive menu item
  archiveTitleCObject = COA
  archiveTitleCObject {
    10 = TEXT
    10 {
       field = start
       strftime = %B %Y
       wrap =
     }
  }

  # content which is filled to the marker ###ARCHIVE_ACTIVE### for the selected archive period
  archiveActiveMarkerContent = class="amenu-act"





  /********************************************************************************
   *    Settings for attached files:
   */

  newsFiles_stdWrap.wrap = <dl class="news-single-files">|</dl>
  newsFilesHeader_stdWrap.wrap = <dt>|</dt>
  newsFiles {
    path = uploads/media/
    icon = 1
    size = 1
    size.bytes = 1
    jumpurl = 0
    stdWrap.wrap = <dd>|</dd>
  }













  /********************************************************************************
   *    Settings for Related News:
   */



  # automagically display the source article as related in the related article
  useBidirectionalRelations = 0

  # display pages as related news
  usePagesRelations = 0

  # stdWrap for the list of related news and the relatedHeader

  related_stdWrap.wrap =  <dl class="news-single-related">|</dl>
  # stdWrap for the relatedHeader
  relatedHeader_stdWrap.wrap = <dt>|</dt>

  # icon for related news
  tmp.5 = IMAGE
  tmp.5 {
    file = EXT:tt_news/ext_icon.gif
    file.width = 18
    file.height = 16
    wrap = | &nbsp;
  }

  # end-wrap for the getRelated objects
  tmp.20 = TEXT
  tmp.20 {
    field = datetime
    strftime = %d.%m.%Y %H:%M
    wrap = &nbsp;-&nbsp; |
  }

  # CObject for a single related item
  getRelatedCObject = COA
  getRelatedCObject {
    groupBy =
    orderBy = datetime desc

    10 = CASE
    10.key.field = type
    # settings for 'normal' related news
    10.default = COA
      10.default {
        wrap = <dd> | </dd>
        5 < plugin.tt_news.tmp.5
        10 = TEXT
        10.field = title
        10.typolink.parameter = {$plugin.tt_news.singlePid}
        10.typolink.additionalParams.data=register:newsAddParams
        10.typolink.useCacheHash = 1
        20 < plugin.tt_news.tmp.20
      }
  # settings for related news, that point to internal pages
    10.1 = COA
    10.1 {
      wrap = <dd> | </dd>
      5 < plugin.tt_news.tmp.5
      5.file=EXT:tt_news/res/tt_news_article.gif
      10 = TEXT
      10.field = title
      10.typolink.parameter.field = page
      20 < plugin.tt_news.tmp.20
    }
    # settings for related news, that point to external URLs
    10.2 = COA
    10.2 {
      wrap = <dd> | </dd>
      5 < plugin.tt_news.tmp.5
      5.file=EXT:tt_news/res/tt_news_exturl.gif
      10 = TEXT
      10.field = title
      10.typolink.parameter.field = ext_url
      20 < plugin.tt_news.tmp.20
    }
  }




  
  displayRelated {
    noPageBrowser = 1
    limit = 15
    

    noNewsToListMsg_stdWrap.wrap = 
    displayList {
     age_stdWrap.age = 1
      date_stdWrap.strftime= %d.%m.%Y
      time_stdWrap.strftime= %H:%M
      caption_stdWrap.if.directReturn = 0
      subheader_stdWrap {
        stripHtml = 1
        crop = 100 | ... | 1
        ifEmpty.field = bodytext
        outerWrap = <p>|</p>
      }
      imageCount = 1
      imgAltTextField = imagecaption
      imageWrapIfAny =
      category_stdWrap.wrap = <div class="news-latest-category"> | </div>
      categoryItem_stdWrap.wrap =
  
      linkTitleField = title
      linkTitleField.wrap =
      linkAltField = short
      linkAltField.wrap =
      
      latestImageMode = {$plugin.tt_news.latestImageMode}
   
    }
    displayList.image {
      file.maxW = 320
      file.maxH = 240
      imageLinkWrap = 1
  
      stdWrap.spaceAfter = 0
    }

    
    _LOCAL_LANG {
      de.noNewsToListMsg = 
      en.noNewsToListMsg = 
    }
  }






  /********************************************************************************
   *    other settings:
   */

  userFunc = tx_ttnews->main_news



  # Example for overriding values from locallang.php with other values
  _LOCAL_LANG.de {
    # more = [weiterlesen...]
  }

  # Alters behavior of tt_news to be compatible with certain previous versions. See manual for details.
  compatVersion = 3.0.0


  # stdWrap for the list of related news by category
  relatedByCategory_stdWrap.wrap =  <dl class="news-single-related">|</dl>
  relatedByCategoryHeader_stdWrap.wrap = <dt>|</dt>
  # globalwrap 2 is used to wrap the list of related news by category
  wrap2.wrap = <dd>|</dd>
  
  
  relNewsByCategory {
    code = list
    categoryMode = 1
    noPageBrowser = 1
    limit = 15

    noNewsToListMsg_stdWrap.wrap = 
    displayList {
      time_stdWrap.strftime= %H:%M
      date_stdWrap.strftime= %d.%m.%Y
      title_stdWrap.crop = 55|...
    }
    _LOCAL_LANG {
      de.noNewsToListMsg = 
      en.noNewsToListMsg = 
    }

    altMainMarkers.TEMPLATE_LIST = TEMPLATE_CAT_RELATED
    altMainMarkers.TEMPLATE_LIST.wrap = ### | ###

  }



  # target page for the search form
  searchPid = 1
  # show only the search form when the search is displayed without searching anything
  emptySearchAtStart = 1

  # parse the 'back to list' link through htmlspecialchars()
  hscBackLink = 1

  # substitute pagetitle in single view with title of news article
  substitutePagetitle = 1

  # validate some configuration values and display a message if errors have been found
  enableConfigValidation = 1

  # stdWrap for the "no news to list" message
  noNewsToListMsg_stdWrap.wrap = <p>|</p>
  # stdWrap for the "no archive items" message
  archiveEmptyMsg_stdWrap.wrap =
  # stdWrap for the "no search results" message
  searchEmptyMsg_stdWrap.wrap =
  # stdWrap for the "no news ID" message
  noNewsIdMsg_stdWrap.wrap =

  # stdWrap for the version preview message
  versionPreviewMessage_stdWrap.wrap = <div style="border:2px solid red;padding:10px;margin:10px 0px 10px 0px;"><img src="t3lib/gfx/icon_note.gif" class="absmiddle" alt="" height="16" width="18">&nbsp;<strong>|</strong></div>
  versionPreviewMessageLinkToOriginal_stdWrap.wrap = &nbsp;<span style="font-weight:normal;">|</span>



  # render language label of current article to the marker ###NEWS_LANGUAGE###
  showLangLabels = 0

  # render language flag of current article to the marker ###NEWS_LANGUAGE### (appended to lang label)
  showFlags = 0

  # label for the default language (language uid = 0)
  defLangLabel = English

  # flag for the default language (language uid = 0)
  defLangImage = uk.gif

  # path/prefix for flag images
  flagPath = media/flags/flag_

  flagImage {
    # flag image configuration
    file.maxW = 16
  }

  # Rendering of news items. re-use the RTE parseFunc configuration for normal content
  # general_stdWrap {
  #   parseFunc < tt_content.text.20.parseFunc
  # }

}





# This enables the "insert records" element and the TypoScript RECORDS object item to display news
tt_news >
tt_news = < plugin.tt_news
tt_news.displayCurrentRecord = 1



[globalVar = LIT:1 = {$plugin.tt_news.noIconsInRelatedNews}]
  plugin.tt_news.getRelatedCObject.10.default.5 >
  plugin.tt_news.getRelatedCObject.10.1.5 >
  plugin.tt_news.getRelatedCObject.10.2.5 >
[global]

[globalVar = LIT:year = {$plugin.tt_news.archiveMode}]
    plugin.tt_news.archiveTitleCObject.10.strftime = %Y
   
[global]

[globalVar = LIT:quarter = {$plugin.tt_news.archiveMode}]
    plugin.tt_news.archiveTitleCObject >
    plugin.tt_news.archiveTitleCObject = COA
    plugin.tt_news.archiveTitleCObject {
      10 = COA
      10 {
        10= TEXT
        10 {
          field = start
          strftime = %b -&nbsp;
          wrap = 
        }
        11 = TEXT
        11 {
          field = stop
          strftime = %b %Y
          wrap = 
        }
      }
    }

[global]


### CVS id ###
# $Id$
