const deployVersionNumber = 754;

const render = data => `
<!DOCTYPE html>
<html lang="en" class="no-js has-flex">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="google-site-verification" content="wgOLxykhpsfs3Xzr-122VxguqHHRcfHDzAod4gQaIm8" />

  <title>Test article harness | The Times &amp; The Sunday Times</title>

  <link rel="canonical" href="http://www.thetimes.co.uk/article/martin-mcguinness-dies-aged-66-n0nh7l7hh" />
  <link rel="shortcut icon" href="//www.thetimes.co.uk/d/${deployVersionNumber}/img/icons/favicon.ico" />
  <link rel="apple-touch-icon" href="//www.thetimes.co.uk/d/${deployVersionNumber}/img/icons/ios_icon.png" />

  <script>
  var nuk = nuk || {};
  nuk.ads = {networkId: '3048',adUnit: 'd.thetimes.co.uk',editionDate: '2017-03-21',editionId: '713f3a16-07f5-11e7-bb41-9f8b57468927',testMode: 'null',baseTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads',slots: [],headerBidding: {"timeout":500,"minPrice":0.01,"maxBid":15,"bucketSize":0.25,"bidders":{"appnexus":{"placementId":"7460885"},"rubicon":{"accountId":"7753","siteId":"76518","zoneId":"448756"},"amazon":{"accountId":"3360"},"criteo":{"accountId":"5930"},"pubmatic":{"accountId":"156034","adSlotPrefix":"Thetimes"},"indexExchange":{"siteId":"188830"}}}};
  nuk.tracking = {enabled: 'true',account: 'newsinternational',profile: 'thetimes.d.desktop',env: 'prod'};
  nuk.comments = {network: 'tnl.fyre.co',siteId: '312724',disableComments: '',articleId: 'e8288746-0e2a-11e7-9efc-104ca844d0d4',articleTitle: 'mcguinness dies aged 66',collectionMetaToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibGl2ZWNvbW1lbnRzIiwidGl0bGUiOiJNY0d1aW5uZXNzIGRpZXMgYWdlZCA2NiIsImFydGljbGVJZCI6ImU4Mjg4NzQ2LTBlMmEtMTFlNy05ZWZjLTEwNGNhODQ0ZDBkNCIsInVybCI6Imh0dHA6Ly93d3cudGhldGltZXMuY28udWsvYXJ0aWNsZS9lODI4ODc0Ni0wZTJhLTExZTctOWVmYy0xMDRjYTg0NGQwZDQiLCJpc3MiOiJ1cm46bGl2ZWZ5cmU6dG5sLmZ5cmUuY286c2l0ZT0zMTI3MjQifQ.JqDUrORtwPUMgHlcLe1iq1yr2YQvAHghcinqYrML-Rk'};
  nuk.video = {"tokenserviceurl":"https://feeds.thetimes.co.uk/tokenservice/generate","env":"prod","accounts":{"TTO":{"pcode":"42Zms6h4wdcI1R1uFzepD-KZ0kk","adid":"6054"},"EPL2":{"pcode":"9ubWUxOke7L0qpeHPalIwhnJFn5U","adid":"5454"},"STO":{"pcode":"Jucms6Irus-8UxQkkP1t_QcX_zTq","adid":"6054"}}};
  nuk.imageServerBaseUrl = '//feeds.thetimes.co.uk/web/imageserver/imageserver/image/';
  nuk.staticMountPath = '//www.thetimes.co.uk/d/${deployVersionNumber}';
  nuk.region = 'gb';
  nuk.displaySundayTooltip = false;
  nuk.user = {isMeteredExpired: false};
  nuk.feature = {};
  nuk.marketing = {"popupDelay":10000};
  nuk.page = {breakpoint: undefined};
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
  </script>

  <link rel="stylesheet" href="//www.thetimes.co.uk/d/${deployVersionNumber}/styles/main.min.css"/>

  <style>
    ${data.criticalCss}
  </style>

</head>

<body id="top" data-build-number="${deployVersionNumber}" data-view-name="article" class="Page Page--times   ">
  
  <div class="AccessibilityLinks">
    <h2 class="u-hide">Accessibility Links</h2>
    <a href="#main-container" class="u-hide" tabindex="1">Skip to content</a>
  </div>
  
  <div class="GlobalNav Theme--news">
    <div class="GlobalNav-wrapper">
      <div class="GlobalNav-container">
        <button data-tracking='{"event_navigation_name":"mobile menu:open"}'  class="GlobalNav-menuButton js-tracking" id="global-nav-toggle" aria-haspopup="true" aria-controls="global-menu-mobile" aria-label="view all sections">
          <span class="GlobalNav-menuButtonContent">
          <span class="GlobalNav-menuButtonIcon"></span>
          <span class="GlobalNav-menuButtonText">Menu</span>
          <span class="GlobalNav-menuButtonText GlobalNav-menuButtonText--close" aria-label="close all sections">Close</span>
          </span>
        </button>
          
        <div class="GlobalNav-logoHolder">
          <div class="GlobalNav-logo">
            <a data-tracking='{"event_navigation_name":"header:global navigation:logo"}'  href="/" title="Link to homepage" class="js-tracking">
              <img src="//www.thetimes.co.uk/d/${deployVersionNumber}/img/logos/times-white-small.png" alt="times logo" class="GlobalNav-logoImg GlobalNav-logoImg--times">
            </a>
          </div>
          <time datetime="2017-03-21">Tuesday March 21 2017</time>
        </div>

        <form action="/search" role="search" method="GET" class="GlobalSearch GlobalSearch--desktop" accept-charset="utf-8">
          <label for="nav-search-desktop" class="u-hide">Search The Times and The Sunday Times</label>
          <input type="text" id="nav-search-desktop" class="GlobalSearch-searchInput" placeholder="Search" name="q" tabindex="3">
          <button class="GlobalSearch-submitInput" aria-label="Submit search" tabindex="3"><i class="Icon Icon--search"></i></button>
        </form>

        <div class="GlobalNav-menu">
          <nav class="GlobalMenu GlobalMenu--desktop"  role="navigation">
            <div class="GlobalMenu-subMenu">
              <div class="GlobalMenu-contentBucket">
                <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections"}'  href="/" class="GlobalMenu-mobileLink GlobalMenu-parentLink is-current  js-editionDropdownToggle js-tracking" data-link-target="top" aria-haspopup="true" aria-controls="todays-sections-menu-desktop" aria-expanded="false" tabindex="2">Today&rsquo;s sections <i class="Icon Icon--arrowDown" aria-hidden="true"></i></a>
                
                <div class="GlobalMenu-dropdown GlobalMenu-dropdown--primary js-editionDropdownContent" aria-expanded="false">
                  <div class="GlobalMenu-container">
                    <ul class="GlobalMenu-dropdownList" id="todays-sections-menu-desktop">
                      <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--news Theme--news is-active">
                        <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:news"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-news" data-link-target="section-news" tabindex="2">News</a>
                      </li>
                      <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--comment Theme--comment ">
                        <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:comment"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-comment" data-link-target="section-comment" tabindex="2">Comment</a>
                      </li>
                      <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--world Theme--world ">
                        <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:world"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-world" data-link-target="section-world" tabindex="2">World</a>
                      </li>
                      <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--business Theme--business ">
                        <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:business"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-business" data-link-target="section-business" tabindex="2">Business</a>
                      </li>
                      <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--sport Theme--sport ">
                        <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:sport"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-sport" data-link-target="section-sport" tabindex="2">Sport</a>
                      </li>
                      <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--register Theme--register ">
                        <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:register"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-register" data-link-target="section-register" tabindex="2">Register</a>
                      </li>
                      <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--puzzles Theme--puzzles ">
                        <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:puzzles"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-puzzles" data-link-target="section-puzzles" tabindex="2">Puzzles</a>
                      </li>
                      <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--times2 Theme--times2 ">
                        <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:times2"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-times2" data-link-target="section-times2" tabindex="2">Times2</a>
                      </li>
                      <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--scotland Theme--scotland ">
                        <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:scotland"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-scotland" data-link-target="section-scotland" tabindex="2">Scotland</a>
                      </li>
                      <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--ireland Theme--ireland ">
                        <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:ireland"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-ireland" data-link-target="section-ireland" tabindex="2">Ireland</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <a data-tracking='{"event_navigation_name":"header:global navigation:past six days"}' class="GlobalMenu-mobileLink GlobalMenu-parentLink js-pastSixDaysLink  js-tracking"href="/past-six-days" tabindex="2">Past six days</a>

                <a class="GlobalMenu-mobileLink GlobalMenu-parentLink GlobalMenu-parentLink--myArticles js-myArticlesLink js-tracking "href="/my-articles" tabindex="2">My articles</a>
              </div>

              <div class="GlobalMenu-hygiene">
                <a data-tracking='{"event_navigation_name":"header:global navigation:times plus"}'  href="https://www.mytimesplus.co.uk" class="GlobalMenu-mobileLink GlobalMenu-parentLink GlobalMenu-parentLink--timesPlus js-tracking" tabindex="2"><span>Times+</span></a>

                <a data-tracking='{"event_navigation_name":"header:global navigation:join now"}'  href="http://store.thetimes.co.uk/special-offers/?ILC=INT-TNL_The_Times-Conversion_Page-Homepage-2016_01_13-333" class="GlobalMenu-mobileLink GlobalMenu-parentLink GlobalMenu-parentLink--joinNow js-tracking">Subscribe</a>

                <a data-tracking='{"event_navigation_name":"header:global navigation:login"}'  href="https://login.thetimes.co.uk?gotoUrl=http://www.thetimes.co.uk/edition/news/martin-mcguinness-dies-aged-66-n0nh7l7hh" class="GlobalMenu-mobileLink GlobalMenu-parentLink GlobalMenu-parentLink--logIn js-tracking">Log in</a>

                <div class="GlobalMenu-accountDropdownHolder">
                  <a data-tracking='{"event_navigation_name":"header:global navigation:my account"}'  href="https://home.thetimes.co.uk" class="GlobalMenu-mobileLink GlobalMenu-parentLink js-accountDropdownToggle js-tracking" aria-haspopup="true" aria-controls="my-account-menu" aria-expanded="false" tabindex="2">My account <i aria-hidden="true" class="Icon Icon--arrowDown"></i></a>

                  <div class="GlobalMenu-dropdown GlobalMenu-dropdown--secondary js-accountDropdownContent" aria-expanded="false">
                    <div class="GlobalMenu-container">
                      <ul class="GlobalMenu-dropdownList">
                        <li class="GlobalMenu-dropdownListItem">
                          <a data-tracking='{"event_navigation_name":"header:global navigation:my account:manage account"}'  href="https://home.thetimes.co.uk" class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-childLink--manageAccount js-tracking" tabindex="2">Manage account <i class="Icon Icon--arrowRight"></i></a>
                        </li>
                        <li class="GlobalMenu-dropdownListItem">
                          <a data-tracking='{"event_navigation_name":"header:global navigation:my account:change password"}'  href="https://login.thetimes.co.uk/user/changePassword" class="GlobalMenu-mobileLink GlobalMenu-childLink js-tracking" tabindex="2">Change password <i class="Icon Icon--arrowRight"></i></a>
                        </li>
                        <li class="GlobalMenu-dropdownListItem">
                          <a data-tracking='{"event_navigation_name":"header:global navigation:my account:log in"}'  href="https://login.thetimes.co.uk?gotoUrl=http://www.thetimes.co.uk/edition/news/martin-mcguinness-dies-aged-66-n0nh7l7hh" class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-childLink--login js-tracking" tabindex="2">Log in <i class="Icon Icon--arrowRight"></i></a>

                          <a data-tracking='{"event_navigation_name":"header:global navigation:my account:log out","event_registration_action":"logout success"}'  href="https://login.thetimes.co.uk/user/logout?gotoUrl=http://www.thetimes.co.uk/edition/news/martin-mcguinness-dies-aged-66-n0nh7l7hh" class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-childLink--logout js-tracking" tabindex="2">Log out <i class="Icon Icon--arrowRight"></i></a>
                        </li>
                      </ul>
                    </div> <!-- / GlobalMenu-container -->
                  </div> <!-- / GlobalMenu-dropdown -->
                </div>
              </div> <!-- / GlobalMenu-hygiene -->
            </div> <!-- / GlobalMenu-subMenu -->
          </nav> <!-- / GlobalMenu -->
        </div>
      </div> <!-- GlobalNav-container -->
    </div> <!-- GlobalNav-wrapper -->
  </div> <!-- GlobalNav -->

  <div class="Tooltip js-myArticlesTooltip is-hidden" aria-hidden="true">
    <div class="Tooltip-container Container">
      <h2 class="u-hide">The My articles section</h2>
      <p>Your saved articles can be found here. <a href="http://store.thetimes.co.uk/special-offers/?ILC=INT-TNL_The_Times-Conversion_Page-Homepage-2016_01_13-333">Join now</a> to start saving articles today.</p>
      <a class="Tooltip-button" href="#" title="Close Tooltip"><span class="u-hide">Dismiss</span></a>
    </div>
  </div>

  <nav class="GlobalMenu GlobalMenu--mobile"  id="global-menu-mobile"  role="navigation">
    <div class="GlobalMenu-subMenu">
      <form action="/search" role="search" method="GET" class="GlobalSearch GlobalSearch--mobile" accept-charset="utf-8">
      <label for="nav-search-mobile" class="u-hide">Search The Times and The Sunday Times</label>
      <input type="text" id="nav-search-mobile" class="GlobalSearch-searchInput" placeholder="Search" name="q" tabindex="3">
      <button class="GlobalSearch-submitInput" aria-label="Submit search" tabindex="3"><i class="Icon Icon--search"></i></button>
      </form>

      <div class="GlobalMenu-contentBucket">
        <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections"}'  href="/" class="GlobalMenu-mobileLink GlobalMenu-parentLink is-current js-scrollTo  js-tracking" data-link-target="top" aria-haspopup="true" aria-controls="todays-sections-menu-mobile" aria-expanded="false" tabindex="2">Today&rsquo;s sections <i class="Icon Icon--arrowDown" aria-hidden="true"></i></a>

        <div class="GlobalMenu-dropdown GlobalMenu-dropdown--primary " aria-expanded="false">
          <div class="GlobalMenu-container">
            <ul class="GlobalMenu-dropdownList" id="todays-sections-menu-mobile">
              <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--news Theme--news is-active">
                <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:news"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-news" data-link-target="section-news" tabindex="2">News</a>
              </li>
              <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--comment Theme--comment ">
                <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:comment"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-comment" data-link-target="section-comment" tabindex="2">Comment</a>
              </li>
              <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--world Theme--world ">
                <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:world"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-world" data-link-target="section-world" tabindex="2">World</a>
              </li>
              <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--business Theme--business ">
                <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:business"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-business" data-link-target="section-business" tabindex="2">Business</a>
              </li>
              <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--sport Theme--sport ">
                <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:sport"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-sport" data-link-target="section-sport" tabindex="2">Sport</a>
              </li>
              <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--register Theme--register ">
                <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:register"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-register" data-link-target="section-register" tabindex="2">Register</a>
              </li>
              <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--puzzles Theme--puzzles ">
                <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:puzzles"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-puzzles" data-link-target="section-puzzles" tabindex="2">Puzzles</a>
              </li>
              <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--times2 Theme--times2 ">
                <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:times2"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-times2" data-link-target="section-times2" tabindex="2">Times2</a>
              </li>
              <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--scotland Theme--scotland ">
                <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:scotland"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-scotland" data-link-target="section-scotland" tabindex="2">Scotland</a>
              </li>
              <li class="GlobalMenu-dropdownListItem GlobalMenu-dropdownListItem--ireland Theme--ireland ">
                <a data-tracking='{"event_navigation_name":"header:global navigation:todays sections:ireland"}'  class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-sectionLink js-scrollTo js-tracking" href="/#section-ireland" data-link-target="section-ireland" tabindex="2">Ireland</a>
              </li>
            </ul>
          </div>
        </div>

        <a data-tracking='{"event_navigation_name":"header:global navigation:past six days"}' class="GlobalMenu-mobileLink GlobalMenu-parentLink js-pastSixDaysLink  js-tracking"href="/past-six-days" tabindex="2">Past six days</a>

        <a class="GlobalMenu-mobileLink GlobalMenu-parentLink GlobalMenu-parentLink--myArticles js-myArticlesLink js-tracking "href="/my-articles" tabindex="2">My articles</a>
      </div>

      <div class="GlobalMenu-hygiene">
        <a data-tracking='{"event_navigation_name":"header:global navigation:times plus"}'  href="https://www.mytimesplus.co.uk" class="GlobalMenu-mobileLink GlobalMenu-parentLink GlobalMenu-parentLink--timesPlus js-tracking" tabindex="2"><span>Times+</span></a>

        <a data-tracking='{"event_navigation_name":"header:global navigation:join now"}'  href="http://store.thetimes.co.uk/special-offers/?ILC=INT-TNL_The_Times-Conversion_Page-Homepage-2016_01_13-333" class="GlobalMenu-mobileLink GlobalMenu-parentLink GlobalMenu-parentLink--joinNow js-tracking">Subscribe</a>

        <a data-tracking='{"event_navigation_name":"header:global navigation:login"}'  href="https://login.thetimes.co.uk?gotoUrl=http://www.thetimes.co.uk/edition/news/martin-mcguinness-dies-aged-66-n0nh7l7hh" class="GlobalMenu-mobileLink GlobalMenu-parentLink GlobalMenu-parentLink--logIn js-tracking">Log in</a>
  
        <div class="GlobalMenu-accountDropdownHolder">
          <a data-tracking='{"event_navigation_name":"header:global navigation:my account"}'  href="https://home.thetimes.co.uk" class="GlobalMenu-mobileLink GlobalMenu-parentLink  js-tracking" aria-haspopup="true" aria-controls="my-account-menu" aria-expanded="false" tabindex="2">My account <i aria-hidden="true" class="Icon Icon--arrowDown"></i></a>

          <div class="GlobalMenu-dropdown GlobalMenu-dropdown--secondary " aria-expanded="false">
            <div class="GlobalMenu-container">
              <ul class="GlobalMenu-dropdownList">
                <li class="GlobalMenu-dropdownListItem">
                  <a data-tracking='{"event_navigation_name":"header:global navigation:my account:manage account"}'  href="https://home.thetimes.co.uk" class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-childLink--manageAccount js-tracking" tabindex="2">Manage account <i class="Icon Icon--arrowRight"></i></a>
                </li>
                <li class="GlobalMenu-dropdownListItem">
                  <a data-tracking='{"event_navigation_name":"header:global navigation:my account:change password"}'  href="https://login.thetimes.co.uk/user/changePassword" class="GlobalMenu-mobileLink GlobalMenu-childLink js-tracking" tabindex="2">Change password <i class="Icon Icon--arrowRight"></i></a>
                </li>
                <li class="GlobalMenu-dropdownListItem">
                  <a data-tracking='{"event_navigation_name":"header:global navigation:my account:log in"}'  href="https://login.thetimes.co.uk?gotoUrl=http://www.thetimes.co.uk/edition/news/martin-mcguinness-dies-aged-66-n0nh7l7hh" class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-childLink--login js-tracking" tabindex="2">Log in <i class="Icon Icon--arrowRight"></i></a>

                  <a data-tracking='{"event_navigation_name":"header:global navigation:my account:log out","event_registration_action":"logout success"}'  href="https://login.thetimes.co.uk/user/logout?gotoUrl=http://www.thetimes.co.uk/edition/news/martin-mcguinness-dies-aged-66-n0nh7l7hh" class="GlobalMenu-mobileLink GlobalMenu-childLink GlobalMenu-childLink--logout js-tracking" tabindex="2">Log out <i class="Icon Icon--arrowRight"></i></a>
                </li>
              </ul>
            </div> <!-- / GlobalMenu-container -->
          </div> <!-- / GlobalMenu-dropdown -->
        </div>
      </div> <!-- / GlobalMenu-hygiene -->
    </div> <!-- / GlobalMenu-subMenu -->
  </nav> <!-- / GlobalMenu -->

  <div id="marketing-banner"></div>
  
  <div id="ad-header" class="AD AD--intervention AD--padded AD--bottomDivider Container MainContainer" data-gpt-section-name="news" data-gpt-section-id=""></div>

  <div id="times-armistice-app" class="times-armistice-app times-armistice-app__authenticated">
    ${data.htmlAuth}
  </div>

  <footer class="GlobalFooter">
    <div class="GlobalFooter-backToTopSection">
      <div class="Container">
        <a data-tracking='{"event_navigation_name":"back to top"}'  href="#top"class="GlobalFooter-backToTop js-scrollTo js-tracking" data-link-target="top" aria-label="Back to top">Back to top</a>
      </div>
    </div>

    <div class="Container GlobalFooter-container">
      <div class="GlobalFooter-logo">
        <a href="/"><img src="//www.thetimes.co.uk/d/${deployVersionNumber}/img/logos/times-white-small.png" alt="times Masthead" /></a>
      </div>

      <div class="GlobalFooter-group">
        <div class="GlobalFooter-section GlobalFooter-section--primary">
          <h3 class="GlobalFooter-header Headline Headline--footer">Get in touch</h3>
          <ul class="GlobalFooter-list">
            <li>
              <a data-tracking='{"event_navigation_name":"footer:get in touch:contact us"}' href="http://www.thetimes.co.uk/static/contact-us/" class="js-tracking">Contact us</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:get in touch:help"}' href="http://help.thetimes.co.uk/" class="js-tracking">Help</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:get in touch:the times editorial complaints"}' href="http://www.thetimes.co.uk/static/the-times-editorial-complaints" class="js-tracking">The Times Editorial Complaints</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:get in touch: the sunday times editorial complaints"}' href="http://www.thetimes.co.uk/static/the-sunday-times-editorial-complaints/" class="js-tracking"> The Sunday Times Editorial Complaints</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:get in touch:place an announcement"}' href="https://www.newsukadvertising.co.uk/the-times/announcements" class="js-tracking">Place an announcement</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:get in touch:classified advertising"}' href="https://www.newsukadvertising.co.uk" class="js-tracking">Classified advertising</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:get in touch:display advertising"}' href="https://newscommercial.co.uk/" class="js-tracking">Display advertising</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:get in touch:the times corrections"}' href="http://www.thetimes.co.uk/corrections" class="js-tracking">The Times corrections</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:get in touch:the sunday times corrections"}' href="http://www.thesundaytimes.co.uk/sto/public/corrections/" class="js-tracking">The Sunday Times corrections</a>
            </li>
          </ul>
        </div>
        
        <div class="GlobalFooter-section GlobalFooter-section--secondary">
          <h3 class="GlobalFooter-header Headline Headline--footer">More from The Times and The Sunday Times</h3>
          <ul class="GlobalFooter-list">
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:the times e-paper"}' href="http://www.thetimes.co.uk/tto/papers.do" class="js-tracking">The Times e-paper</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:the sunday times e-paper"}' href="http://www.thesundaytimes.co.uk/sto/the_newspaper/papers.do" class="js-tracking">The Sunday Times e-paper</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:times currency services"}' href="https://www.timescurrencyservices.co.uk/" class="js-tracking">Times Currency Services</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:sunday times wine club"}' href="http://www.sundaytimeswineclub.co.uk/" class="js-tracking">The Sunday Times Wine Club</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:encounters dating"}' href="https://www.encountersdating.co.uk" class="js-tracking">Encounters Dating</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:times print gallery"}' href="http://times.newsprints.co.uk/?utm_source=the_times" class="js-tracking">Times Print Gallery</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:the times archive"}' href="/archive/" class="u-hiddenOnSmallAndMediumBP js-tracking">The Times Archive</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:times crossword club"}' href="http://www.crosswordclub.co.uk/auth/login" class="js-tracking">Times Crossword Club</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:sunday times driving"}' href="https://www.driving.co.uk/" class="js-tracking">Sunday Times Driving</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:times plus"}' href="http://www.mytimesplus.co.uk/" class="js-tracking">Times+</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:the sunday times rich list"}' href="http://www.thesundaytimes.co.uk/richlist" class="js-tracking">The Sunday Times Rich List<
            /a></li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:insider city guides"}' href="http://www.thetimes.co.uk/travel/" class="js-tracking">Insider City Guides</a>
            </li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:good university guide"}' href="http://www.thesundaytimes.co.uk/gooduniversityguide" class="js-tracking">Good University Guid
            e</a></li>
            <li>
              <a data-tracking='{"event_navigation_name":"footer:more from the times and the sunday times:parent power"}' href="http://www.thesundaytimes.co.uk/sto/newsreview/education/parentpower/" class="js-tracking">Parent Power</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="GlobalFooter-section GlobalFooter-section--tertiary">
        <div class="GlobalFooter-companyInfo">
          <p>&copy; Times Newspapers Limited 2017.&nbsp;</p>
          <p>Registered in England No. 894646.&nbsp;</p>
          <p>Registered office: 1 London Bridge Street, SE1 9GF.</p>
        </div>
        <ul class="GlobalFooter-list GlobalFooter-list--small">
          <li>
            <a data-tracking='{"event_navigation_name":"footer:privacy and cookie policy"}' href="http://www.newsprivacy.co.uk/single/" class="js-tracking">Privacy &amp; cookie policy</a>
          </li>
          <li>
            <a data-tracking='{"event_navigation_name":"footer:syndication"}' href="http://newssyndication.com/en/page/show_home_page.html" class="js-tracking">Syndication</a>
          </li>
          <li>
            <a data-tracking='{"event_navigation_name":"footer:commissioning terms"}' href="http://www.thetimes.co.uk/static/commissioning-terms/" class="js-tracking">Commissioning Terms</a>
          </li>
          <li>
            <a data-tracking='{"event_navigation_name":"footer:terms and conditions"}' href="http://www.thetimes.co.uk/static/terms-and-conditions/" class="js-tracking">Terms and conditions</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>

  <script>
    var externalScripts = [];function injectComponentScript (url) {var componentScript = document.createElement('script');document.body.appendChild(componentScript);componentScript.src = url;}function downloadJSAtOnload() {var extraJS = document.createElement('script');extraJS.onload = function () {};extraJS.src = '//www.thetimes.co.uk/d/${deployVersionNumber}/js/app.js';document.body.appendChild(extraJS);for (var i = 0, l = externalScripts.length; i < l; i++) {extraJS = document.createElement('script');extraJS.src = externalScripts[i];document.body.appendChild(extraJS);}}document.addEventListener('DOMContentLoaded', downloadJSAtOnload, false);
  </script>

<!--   <script src="https://player.ooyala.com/static/v4/stable/4.7.9/core.min.js"></script>
  <script src="https://player.ooyala.com/static/v4/stable/4.7.9/video-plugin/main_html5.min.js"></script>
  <script src="https://player.ooyala.com/static/v4/stable/4.7.9/video-plugin/bit_wrapper.min.js"></script>
  <script src="https://player.ooyala.com/static/v4/stable/4.7.9/skin-plugin/html5-skin.min.js"></script>
  <script src="//player.ooyala.com/static/v4/stable/latest/ad-plugin/google_ima.min.js?ver=v4"></script>
  <script src="//b.scorecardresearch.com/c2/plugins/streamingtag_plugin_ooyalav4.js"></script>

  <link rel="stylesheet" type="text/css" href="https://player.ooyala.com/static/v4/stable/4.7.9/skin-plugin/html5-skin.min.css"> -->

  <script type="text/javascript" src="./index.js"></script>

</body>
</html>`;

if (typeof document !== 'undefined') {
  window._htmlRenderer = render;
} else {
  module.exports = render;
}
