## Incorrect teeqs division
Firstly, according to UXUI, there such a thing as an action bar. It can be attached either to an Oasis or Teeq. In the case of Oasis, the bar serves as a separate teeq which implies some specific action, but in our case, the action itself belongs to the **intro-teeq**.

Making **user-navigator** a separate teeq can also lead to problems with adding stickiness effects as it belongs to the oasis, but not a particular teeq.

Secondly, I would suggest moving the current **onboarding-component** from **intro-teeq** to **polling-teeq** as it serves as the initial state of it. Thus we can simplify future data flow and transitions.

DONE ------------------------------------------------------------------------------------------------------------------------------------------

## Local folder for UXUI components
Stop keeping the folder as is, because it served for development purposes in the previous project. You can only leave **component-container** as it will be moved to new releases of the teeqer core. Other components should be moved to the UXUI library.

## Naming
Change the name of the oasis from **jb4-oasis** to something relevant. It also refers to its folder name.

DONE ------------------------------------------------------------------------------------------------------------------------------------------

## Urls to the static
Our CDN has now moved to the **teeqer.com** domain, so we need to use static.teeqer.com URLs from now on.

DONE ------------------------------------------------------------------------------------------------------------------------------------------