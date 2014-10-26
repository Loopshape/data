###
# These are the default TS-constants for tt_news
##

plugin.tt_news {

    # cat=plugin_tt_news_basic/file/1; type=text; label= LLL:EXT:tt_news/locallang.xml:tsce.templateFile
  file.templateFile = ./Template/Layout/news.html

    # cat=plugin_tt_news_basic/links/10; type=text; label= LLL:EXT:tt_news/locallang.xml:tsce.pid_list
  pid_list = 30
    # cat=plugin_tt_news_basic/links/12; type=int+; label= LLL:EXT:tt_news/locallang.xml:tsce.singlePid
  singlePid = 35
    # cat=plugin_tt_news_basic/links/20; type=int+; label= LLL:EXT:tt_news/locallang.xml:tsce.backPid
  backPid = 34
    # cat=plugin_tt_news_basic/links/30; type=text; label= LLL:EXT:tt_news/locallang.xml:tsce.archiveTypoLink.parameter
  archiveTypoLink.parameter = 34
      # cat=plugin_tt_news_basic//40; type=int+; label= LLL:EXT:tt_news/locallang.xml:tsce.limit
  limit = 7
    # cat=plugin_tt_news_basic//50; type=int+; label= LLL:EXT:tt_news/locallang.xml:tsce.latestLimit
  latestLimit = 3
    # cat=plugin_tt_news_basic//70; type=int+; label= LLL:EXT:tt_news/locallang.xml:tsce.recursive
  recursive = 2
    
    # cat=plugin_tt_news_advanced/enable/10; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.allowCaching
  allowCaching = 1
    # cat=plugin_tt_news_advanced/enable/15; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.useHRDates
  useHRDates = 1
    # cat=plugin_tt_news_advanced/enable/20; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.useSubCategories
  useSubCategories = 1
    # cat=plugin_tt_news_advanced/enable/30; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.showCatRootline
  showCatRootline = 0

  
    # cat=plugin_tt_news_advanced/enable/50; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.useBidirectionalRelations
  useBidirectionalRelations = 1
  # cat=plugin_tt_news_advanced/enable/60; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.usePagesRelations
  usePagesRelations = 1


    # cat=plugin_tt_news_advanced/enable/70; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.showRelatedNewsByCategory
  showRelatedNewsByCategory = 0
  # cat=plugin_tt_news_advanced/enable/80; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.displaySubCategories
  displaySubCategories = 0
    # cat=plugin_tt_news_advanced/enable/90; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.useSPidFromCategory
  useSPidFromCategory = 0

    # cat=plugin_tt_news_advanced/enable/91; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.useMultiPageSingleView
  useMultiPageSingleView = 0

    # cat=plugin_tt_news_advanced/enable/96; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.showTitleAsPrevNextLink
  showTitleAsPrevNextLink = 1
  
    # cat=plugin_tt_news_advanced/enable/98; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.noIconsInRelatedNews
  noIconsInRelatedNews = 0
  






  # cat=plugin_tt_news_advanced//50; type=int+; label= LLL:EXT:tt_news/locallang.xml:tsce.datetimeDaysToArchive
  datetimeDaysToArchive = 1
  # cat=plugin_tt_news_advanced//60; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.enableArchiveDate
  enableArchiveDate = 1

  
    # cat=plugin_tt_news_advanced//70; type=int; label= LLL:EXT:tt_news/locallang.xml:tsce.catTextMode
  catTextMode = 1
  # cat=plugin_tt_news_advanced//80; type=int; label= LLL:EXT:tt_news/locallang.xml:tsce.catImageMode
  catImageMode = 1








  # cat=plugin_tt_news_advanced/dims/10; type=int+; label= LLL:EXT:tt_news/locallang.xml:tsce.singleMaxW
  singleMaxW = 960
    # cat=plugin_tt_news_advanced/dims/20; type=int+; label= LLL:EXT:tt_news/locallang.xml:tsce.singleMaxH
  singleMaxH = 704

    # cat=plugin_tt_news_advanced/dims/30; type=int+; label= LLL:EXT:tt_news/locallang.xml:tsce.latestMaxW
  latestMaxW = 320
    # cat=plugin_tt_news_advanced/dims/40; type=int+; label= LLL:EXT:tt_news/locallang.xml:tsce.latestMaxH
  latestMaxH = 240

    # cat=plugin_tt_news_advanced/dims/50; type=int+; label= LLL:EXT:tt_news/locallang.xml:tsce.listMaxW
  listMaxW = 320
    # cat=plugin_tt_news_advanced/dims/60; type=int+; label= LLL:EXT:tt_news/locallang.xml:tsce.listMaxH
  listMaxH = 240


    # cat=plugin_tt_news_advanced/dims/70; type=options[resize2max,crop,resize]; label= LLL:EXT:tt_news/locallang.xml:tsce.listImageMode
  listImageMode = resize2max
    # cat=plugin_tt_news_advanced/dims/70; type=options[resize2max,crop,resize]; label= LLL:EXT:tt_news/locallang.xml:tsce.latestImageMode
  latestImageMode = resize2max




    # cat=plugin_tt_news_catmenu//10; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.displayCatMenu.showNewsCountForCategories
  displayCatMenu.showNewsCountForCategories = 1

    # cat=plugin_tt_news_catmenu//20; type=options[tree,ajaxtree,nestedWraps]; label= LLL:EXT:tt_news/locallang.xml:tsce.displayCatMenu.mode
  displayCatMenu.mode = nestedWraps
  
      # cat=plugin_tt_news_catmenu//30; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.displayCatMenu.expandable
  displayCatMenu.expandable = 1

      # cat=plugin_tt_news_catmenu//40; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.displayCatMenu.expandAll
  displayCatMenu.expandAll = 1
  
      # cat=plugin_tt_news_catmenu//50; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.displayCatMenu.expandFirst
  displayCatMenu.expandFirst = 1
    
    # cat=plugin_tt_news_catmenu//60; type=options[-1,0,1,2]; label= LLL:EXT:tt_news/locallang.xml:tsce.displayCatMenu.catmenuIconMode
  displayCatMenu.catmenuIconMode = 0

    # cat=plugin_tt_news_catmenu//70; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.displayCatMenu.catmenuNoRootIcon
  displayCatMenu.catmenuNoRootIcon = 0

    # cat=plugin_tt_news_catmenu//80; type=boolean; label= LLL:EXT:tt_news/locallang.xml:tsce.catmenuWithArchiveParams
  catmenuWithArchiveParams = 0




    # cat=plugin_tt_news_archivemenu//40; type=options[month,year,quarter]; label= LLL:EXT:tt_news/locallang.xml:tsce.archiveMode
  archiveMode = month

  # cat=plugin_tt_news_archivemenu//61; type=text; label= LLL:EXT:tt_news/locallang.xml:tsce.amenuStart
  amenuStart = -4 years

  # cat=plugin_tt_news_archivemenu//62; type=text; label= LLL:EXT:tt_news/locallang.xml:tsce.amenuEnd
  amenuEnd = now
 
   # cat=plugin_tt_news_archivemenu//70; type=text; label= LLL:EXT:tt_news/locallang.xml:tsce.amenuWithCatSelector
  amenuWithCatSelector = 1 
  
  
  
}

#  TSConstantEditor.plugin_tt_news_basic {
#   header = header
#   description = test
#  }

### CVS id ###
# $Id$
