<INCLUDE_TYPOSCRIPT: source="FILE:Templates/tpl/lib.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:Templates/tpl/navigation.ts">

page {
    
  typeNum = 0
 
  5 = TEXT
  5.value = <link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
    
  10 = FLUIDTEMPLATE
  10 {
    
      partialRootPath = Templates/Partials/
      layoutRootPath = Templates/Layouts/
    
      file.stdWrap.cObject = CASE
      file.stdWrap.cObject {
        
        key.data = levelfield:-1, backend_layout_next_level, slide
        key.override.field = backend_layout
       
        default = TEXT
        default.value = Templates/page.html
       
        1 = TEXT
        1.value = Templates/page.html
       
      } 
        
      variables {
      
        logo < lib.logo
        #logo < styles.content.get
        #logo.select.where = colPos = 0
      
        header = COA
        header {
          10 < lib.header
        }
        #header < styles.content.get
        #header.select.where = colPos = 1
        
        login < lib.login
        #login < styles.content.get
        #login.select.where = colPos = 2
        
        headernavi < lib.headernavi
        
        #teaser < lib.teaser
        #teaser < styles.content.get
        #teaser.select.where = colPos = 3
        teaser = COA
        teaser {
          10 < lib.teaser
        }
        
        scene < lib.scene
        
        #navi < lib.navi
        #navi < styles.content.get
        #navi.select.where = colPos = 3
        navi = COA
        navi {
          10 < lib.navi
          20 < lib.googlebox
          30 < lib.main
        }
        
        content < styles.content.get
        content.select.where = colPos = 5
        
        sidebar < styles.content.get
        sidebar.select.where = colPos = 6
        
        globalnews < tt_news
        
        footer < lib.footer
        #footer < styles.content.get
        #footer.select.where = colPos = 6
        
        gplus < lib.gplus
        
        gshare < lib.gshare
                
      }
  
    }
     
  20 = COA
  20 {
      
      8800 = TEXT
      8800.value = <script type="text/javascript">(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;po.src = 'https://apis.google.com/js/client:plusone.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();</script>
      
      8890 = TEXT
      8890.value = <script>function signinCallback(authResult) {if (authResult['access_token']) {document.getElementById('signinButton').setAttribute('style', 'display: none');} else if (authResult['error']) {}};</script>
      
      9500 = TEXT
      9500.value = <script src="./Templates/js/require.js" data-main="./Templates/js/main"></script>
   
  }

}