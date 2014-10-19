temp.dropdownmenu= HMENU
temp.dropdownmenu {
#wrap = <form action=""><p><select onchange="window.location=this.options[this.selectedIndex].value"><option value="">Select Page</option>|</select></p></form>
wrap = <form action=""><p><select onchange="window.location=this.options[this.selectedIndex].value">|</select></p></form>
1 = TMENU
1 {
expAll = 1
NO {
doNotLinkIt = 1 
stdWrap.cObject = COA
stdWrap.cObject {
10 = TEXT
10 {
wrap = <option value="{getIndpEnv:TYPO3_SITE_URL}|">
insertData = 1
typolink {
parameter.field = uid
returnLast = url
}
}
20 = TEXT
20 {
field = subtitle//title
wrap = |</option>
}
}
}
ACT <.NO
ACT = 1
ACT.stdWrap.cObject.10.wrap = <option selected="selected" value="{getIndpEnv:TYPO3_SITE_URL}|">
}
2 < .1
2.NO.stdWrap.cObject.20.wrap = --|</option>
3 < .1
3.NO.stdWrap.cObject.20.wrap = ----|</option>
4 < .1
4.NO.stdWrap.cObject.20.wrap = ------|</option>
5 < .1
5.NO.stdWrap.cObject.20.wrap = --------|</option>
}

lib.navi < temp.dropdownmenu