# ------------------------------------------------------------------------------------------ #

temp.headernavi = COA
temp.headernavi {
  stdWrap {
    wrap3 = <section class="navigation-topbar">|</section>
    wrap = <ul class="left">|</ul>
  }
  10 = HMENU
  10 {
    special = list
    special.value = 2 #ROOT-PID
    1 = TMENU
    1 {
      NO = 1
      NO {
        before.cObject = COA
        before.cObject {
          wrap = |">
        }
        allWrap = <li class="home|
        wrapItemAndSub = |</li>
      }
    }
  }
  20 < .10
  20 {
    #special = directory
    special = list
    special.value = 1,3,4,27,5
    1 {
      expAll = 1
      NO {
        before.cObject {
          10 = TEXT
          10 {
            field = uid
            noTrimWrap = | item| |
          }
        }
        allWrap = |*| <li class="narrow| || <li class="wide| |*|
      }
      IFSUB < .NO
      IFSUB {
        before.cObject {
          20 = TEXT
          20 {
            value = has-
            noTrimWrap = | |dropdown|
          }
        }
      }
      ACT < .NO
      ACT {
        before.cObject {
          30 = TEXT
          30 {
            value = act
            noTrimWrap = | |ive|
          }
        }
      }
      ACTIFSUB < .IFSUB
      ACTIFSUB {
        before.cObject {
          30 < nav.20.1.ACT.before.cObject.30
        }
      }
    }
    2 < .1
    2 {
      wrap = <ul class="dropdown">|</ul>
      NO {
        before.cObject >
        allWrap = <li>|
      }
    }
  }
}
lib.headernavi < temp.headernavi

# ------------------------------------------------------------------------------------------ #

temp.dropdownmenu= HMENU
temp.dropdownmenu {
  
  wrap = <form action=""><p><select onchange="(this.selectedIndex >= 1 && this.selectedIndex <= 13) ? window.open(this.options[this.selectedIndex].value,'_blank') : window.location=this.options[this.selectedIndex].value;">|</select></p></form>
  
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
    
    ACT < .NO
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

# ------------------------------------------------------------------------------------------ #