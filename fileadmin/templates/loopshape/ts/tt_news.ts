# cat=basic/11; type=boolean; label=LLL:EXT:tt_news/locallang.xml:extmng.useStoragePid
useStoragePid=32

  # cat=basic/enable/100; type=boolean; label=LLL:EXT:tt_news/locallang.xml:extmng.requireCategories
requireCategories = 1

  # cat=basic/enable/150; type=boolean; label=LLL:EXT:tt_news/locallang.xml:extmng.useInternalCaching
useInternalCaching = 1

  # cat=basic/enable/155; type=options[normal,lifetime,static]; label=LLL:EXT:tt_news/locallang.xml:extmng.cachingMode
cachingMode = normal

  # cat=basic/enable/157; type=int; label=LLL:EXT:tt_news/locallang.xml:extmng.cacheLifetime
cacheLifetime = 0

  # cat=basic/enable/170; type=options[internal,cachingFramework]; label=LLL:EXT:tt_news/locallang.xml:extmng.cachingEngine
cachingEngine = internal


  # cat=basic//15; type=options[title,uid]; label=LLL:EXT:tt_news/locallang.xml:extmng.treeOrderBy
treeOrderBy = uid

  # cat=basic//20; type=boolean; label=LLL:EXT:tt_news/locallang.xml:extmng.prependAtCopy
prependAtCopy = 1

  # cat=basic//30; type=options[title,short,author]; label=LLL:EXT:tt_news/locallang.xml:extmng.label
label = title

  # cat=basic//40; type=options[,datetime,title,short,author,tstamp,category]; label=LLL:EXT:tt_news/locallang.xml:extmng.label_alt
label_alt = 

  # cat=basic//45; type=options[,datetime,title,short,author,tstamp,category]; label=LLL:EXT:tt_news/locallang.xml:extmng.label_alt2
label_alt2 = 

  # cat=basic//50; type=boolean; label=LLL:EXT:tt_news/locallang.xml:extmng.label_alt_force
label_alt_force = 0

  # cat=basic/dims/60; type=int [0-600]; label=LLL:EXT:tt_news/locallang.xml:extmng.categorySelectedWidth
categorySelectedWidth = 

  # cat=basic/dims/70; type=int [0-600]; label=LLL:EXT:tt_news/locallang.xml:extmng.categoryTreeWidth
categoryTreeWidth = 

  # cat=basic/language/130; type=boolean; label=LLL:EXT:tt_news/locallang.xml:extmng.l10n_mode_prefixLangTitle
l10n_mode_prefixLangTitle = 1

  # cat=basic/language/140; type=boolean; label=LLL:EXT:tt_news/locallang.xml:extmng.l10n_mode_imageExclude
l10n_mode_imageExclude = 1

  # cat=basic/language/150; type=boolean; label=LLL:EXT:tt_news/locallang.xml:extmng.hideNewLocalizations
hideNewLocalizations = 0


  # cat=basic/dev/151; type=options[disabled|0,cache misses|1,all|2]; label=LLL:EXT:tt_news/locallang.xml:extmng.writeCachingInfoToDevlog
writeCachingInfoToDevlog = 0

  # cat=basic/dev/160; type=boolean; label=LLL:EXT:tt_news/locallang.xml:extmng.writeParseTimesToDevlog
writeParseTimesToDevlog = 0

  # cat=basic/dev/161; type=input; label=LLL:EXT:tt_news/locallang.xml:extmng.parsetimeThreshold
parsetimeThreshold = 0.1

/*
  ### CVS id ###
  $Id$
*/