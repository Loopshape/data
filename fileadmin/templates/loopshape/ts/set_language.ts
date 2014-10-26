# Setting up the language variable "L" to be passed along with links
config.linkVars = L

#values for default language
config.sys_language_uid = 0
config.language = en
config.locale_all = en_EN

# German language, sys_language.uid = 1
[globalVar = GP:L = {$english}]
config.sys_language_uid = 1
config.language = de
config.locale_all = de_DE
[global]

# French language, sys_language.uid = 2
[globalVar = GP:L = {$french}]
config.sys_language_uid = 2
config.language = fr
config.locale_all = fr_FR
[global]

# Einstellungen für sr_language_menu
#temp.languageMenu = RECORDS
#temp.languageMenu.tables = tt_content
#temp.languageMenu.source = 6

english = 0
#deutsch = 1
#french = 2

plugin.tx_srstaticinfo_pi1.languageCode = EN
#plugin.tx_srlanguagemenu_pi1.showInactive = 0
#plugin.tx_srlanguagemenu_pi1.showCurrent = 0
#plugin.tx_srlanguagemenu_pi1.useSelfLanguageTitle = 1
#plugin.tx_srlanguagemenu_pi1.languagesUidsList = 0,1,2
#plugin.tx_srlanguagemenu_pi1.defaultLanguageISOCode = EN
#plugin.tx_srlanguagemenu_pi1.defaultCountryISOCode = EN