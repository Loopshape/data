##############################################################
##  LOOPSHAPE MAIN TYPOSCRIPT CONFIGURATION                 ##
##############################################################
## Administrator: Arjuna Noorsanto <webmaster@loopshape.com>##
## ®2009–2014 loopshape.org • Web Development & Media Design##
##############################################################

# ROOT TEMPLATE SETTINGS
<INCLUDE_TYPOSCRIPT: source="FILE:Templates/ts/basic_setup.ts">

# LOOPSHAPE CUSTOM SETTINGS
<INCLUDE_TYPOSCRIPT: source="FILE:Templates/ts/page.ts">

# SITE LANGUAGE SETTING
<INCLUDE_TYPOSCRIPT: source="FILE:Templates/ts/set_language.ts">

# NEWS MODULE CONFIG
<INCLUDE_TYPOSCRIPT: source="FILE:Templates/ts/tt_news.setup.ts">

# WEBSITE LOGIC
<INCLUDE_TYPOSCRIPT: source="FILE:Templates/ts/assets.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:Templates/ts/mainmenu.ts">

# WEBSITE TEMPLATE SETTINGS
<INCLUDE_TYPOSCRIPT: source="FILE:Templates/tpl/layout.ts">
