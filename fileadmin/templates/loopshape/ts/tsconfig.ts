$TYPO3_CONF_VARS['BE']['warning_email_addr'] = 'webmaster@loopshape.com';
$TYPO3_CONF_VARS['SYS']['systemLog'] = 'syslog';
$TYPO3_CONF_VARS['SYS']['syslogErrorReporting'] = '0';
$TYPO3_CONF_VARS['SYS']['enableDeprecationLog'] = '0';
$TYPO3_CONF_VARS['SYS']['errorHandler'] = '';

mod.SHARED {
 defaultLanguageFlag=de 
 defaultLanguageLabel=Deutsch
 # links = 1, mitte = 0, rechts = 2, rand = 3
 colPos_list = 1,0,2
}

# bei seiten kopieren nicht (kopie) und unsichtbar
TCEMAIN.table {
  pages.disablePrependAtCopy = 1
  pages.disableHideAtCopy =1 
  tt_content.disablePrependAtCopy = 1     
}    
# rechte für benutzergruppe
TCEMAIN.permissions {
  groupid = 1
  group = show, editcontent, edit, delete, new
  everybody =  
}
TCEFORM.tt_content {
  #colPos.disabled = 1
  header_layout.removeItems = 1,3,4,5
  header_layout.altLabels.0 = Überschrift (groß)
  header_layout.altLabels.2 = Überschrift (klein)
  header_link.disabled = 1
  header_position.disabled = 1
  imageborder.disabled = 1
  image_compression.disabled = 1
  image_effects.disabled = 1
  image_frames.disabled = 1
  longdescURL.disabled = 1
  sys_language_uid.disabled = 1
  spaceBefore.disabled = 1
  spaceAfter.disabled = 1
  section_frame.disabled = 1
  sectionIndex.disabled = 1
  text_properties.disabled = 1
  text_align.disabled = 1
  text_face.disabled = 1
  text_size.disabled = 1
  text_color.disabled = 1
  linkToTop.disabled = 1
  date.disabled = 1
  layout.disabled = 1
  fe_group.disabled = 1
  hidden.disabled = 1  
}
RTE.classesAnchor.mail.titleText >
RTE.classesAnchor.externalLinkInNewWindow.titleText >
RTE.classesAnchor.externalLink.titleText >
RTE.classesAnchor.internalLink.titleText >
RTE.classesAnchor.download.titleText >
RTE.default {
  hideButtons = subscript,superscript,outdent,indent,textcolor,bgcolor,table,blockstylelabel, blockstyle, textstylelabel, textstyle, formatblock
  hidePStyleItems = PRE, H1, H2, H3, H4, H5, H6, pre, address,blockquote,div         
}

mod.SHARED {
 #defaultLanguageFlag=de.gif
 # ab typo3 4.5 
 defaultLanguageFlag=de 
 defaultLanguageLabel=Deutsch
}

mod.web_layout {
  # Inhaltselementen mit Sprache 'Alle' anzeigen
  defLangBinding=1
} 

mod.SHARED.colPos_list = 0,1,2,3,4,5,6,7

TCEFORM.tt_content {
  #colPos.disabled = 1
  #colPos.removeItems = 1
}

RTE.classesAnchor.mail.titleText >
RTE.classesAnchor.externalLinkInNewWindow.titleText >
RTE.classesAnchor.externalLink.titleText >
RTE.classesAnchor.internalLink.titleText >
RTE.classesAnchor.download.titleText >
  
RTE.default {
  proc.allowedClasses := addToList(alarm,ok,wichtig)
  buttons.textstyle.tags.span.allowedClasses := addToList(alarm,ok,wichtig)
}
RTE.classes {
  alarm.name = Achtung, Achtung!
  alarm.value = color: red;
  ok.name = Okidoki
  ok.value = color: green;
  wichtig.name = Wichtigpopichtig
  wichtig.value = color: blue;
}

span.alarm { color: red; }
span.ok { color: green; }
span.wichtigwichtig { color: blue; }

RTE.default {
        hideButtons = subscript,superscript,outdent,indent,textcolor,
bgcolor,table,blockstylelabel, blockstyle, textstylelabel, textstyle, formatblock
        hidePStyleItems = PRE, H3, H4, H5, H6, pre, address,blockquote,div

}

RTE.colors {
  color1{
  name  = Rot
  value = #8B002A
  }
  color2{
  name  = Grau
  value = #8E9EA9
  }
  color3{
  name  = Schwarz
  value = #000000
  }
}
RTE.default {
        disableSelectColor                        = 0 
        disableColorPicker                        = 1
        colors = color1, color2, color3
}

RTE.default {
  showButtons = formatblock, bold, italic, center, right, orderedlist, unorderedlist, insertcharacter, removeformat, chMode, link
  hidePStyleItems = PRE, H1, H3, H4, H5, H6, pre, address,div
}

RTE.default.buttons.link.queryParametersSelector.enabled = 1 

RTE.default{ 
   showButtons := addToList(pastetoggle)
}

RTE.default.showButtons := addToList(underline)
RTE.default.hideButtons := addToList(blockstyle)

RTE.default.proc {
        exitHTMLparser_db = 1
        exitHTMLparser_db {
                tags {
                        b.remap = strong
                        i.remap = em
                }
        }
        exitHTMLparser_rte = 1
        exitHTMLparser_rte {
                tags {
                        strong.remap = b
                        em.remap = i
                }
        }
}

mod.web_list.allowedNewTables = tt_news,tt_news_cat

# Bei Aktualisieren/Neueinfügen von News werden die Caches 
# der Seiten mit den folgenden IDs geleert
#TCEMAIN.clearCacheCmd = 1,36,37,8,42,44

# Sorgt dafür, dass bei "(Speichern und) anzeigen" einer News 
# die Seite mit der ID 37 aufgerufen wird
#tx_ttnews.singlePid = 37

TCEFORM.tx_powermail_fieldsets {
  class {  
    removeItems = style1, style2, style3  
    addItems.survey = Umfrage standard
  }
}
TCEFORM.tx_powermail_fields {
  class {  
    removeItems = style1, style2, style3  
    addItems.checkRadioInRows = Checkboxen/Radios in Reihen
  }
}

#TSConfig:

# bestehende Bezeichnung verändern (Standard: 0 bis 3 sind vergeben)
#TCEFORM.tt_content.layout.altLabels.2 = Neue Bezeichnung2

# Nicht benötigte entfernen
#TCEFORM.tt_content.layout.removeItems = 2,3

# Neue Option hinzufügen
#TCEFORM.tt_content.layout.addItems.5 = Infobox

# Damit das im Frontend zu sehen ist muss etwa folgendes 
# in das TS Setup eingetragen werden
# Die '1' von 1.15 entspricht dem Layout (s.o.) 

lib.maincontent = COA
lib.maincontent.10 < styles.content.get

lib.maincontent.10.renderObj.stdWrap.innerWrap.cObject = CASE
lib.maincontent.10.renderObj.stdWrap.innerWrap.cObject {
      key.field = layout
      1.15 = TEXT
      1.15.value = class="csc-default infobox"
}

# TypoScript-Setup
lib.content < styles.content.get

lib.content.renderObj.stdWrap.innerWrap.cObject = CASE
lib.content.renderObj.stdWrap.innerWrap.cObject {
      key.field = layout
      1.15 = TEXT
      1.15.value = class="csc-default superspezial"
}

# Page TSConfig:
TCEFORM.tt_content.layout {
  altLabels.0 = normal
  altLabels.1 = custom
  #removeItems = 2,3
}

# ------------------------------------------
# Inhalt der Rahmen-Selectbox bei Content Elementen
# ------------------------------------------
TCEFORM.tt_content.section_frame {
  altLabels.0 = normal
  altLabels.1 = custom
  # das sind die IDs der Standeinstellungen=>
  #removeItems = 5,6,10,11,12,20,21,66
  #addItems.2 = test 2
}

[page|backend_layout = 1]
#mod.SHARED.colPos_list = 1,0,3
[global]

mod.wizards.newContentElement.wizardItems.common.elements.textpic.tt_content_defValues {
  # Bildposition "Neben dem Text links"
  imageorient = 26
  # Anzahl der Spalten auf 1
  imagecols = 0
}

mod.wizards.newContentElement.wizardItems.common.elements.image.tt_content_defValues {
  # Bildposition "Oben links"
  imageorient = 2
  # Anzahl der Spalten auf 1
  imagecols = 0
}

