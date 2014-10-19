temp.logo = RECORDS
temp.logo {
    tables = tt_content
    source = 1
}
lib.logo < temp.logo

temp.header = RECORDS
temp.header {
    tables = tt_content
    source = 4
}
lib.header < temp.header

temp.login = RECORDS
temp.login {
    tables = tt_content
    source = 16
}
lib.login < temp.login

temp.teaser = CONTENT
temp.teaser < styles.content.get
temp.teaser.select.where = colPos = 3
lib.teaser < temp.teaser

temp.footer = RECORDS
temp.footer {
    tables = tt_content
    source = 3
}
lib.footer < temp.footer

temp.googleplus = TEXT
temp.googleplus.value = <span id="signinButton"><span class="g-signin" data-callback="signinCallback" data-clientid="893117143428-hscde5cglocualicjl24rqvc7fc919fo.apps.googleusercontent.com" data-cookiepolicy="single_host_origin" data-requestvisibleactions="http://schemas.google.com/AddActivity" data-scope="https://www.googleapis.com/auth/plus.login"></span></span>
lib.gplus < temp.googleplus

temp.gshare = TEXT
temp.gshare.value = <script src="https://apis.google.com/js/platform.js" async defer>{lang: 'de'}</script>
lib.gshare < temp.gshare

