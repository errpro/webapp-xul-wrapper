// This is the URI that is loaded when Zotero Standalone is opened
pref("toolkit.defaultChromeURI", "chrome://app/content/ui/main.xul");

// We only want a single window, I think
pref("toolkit.singletonWindowType", "navigator:browser");

// For debugging purposes, show errors in console by default
pref("javascript.options.showInConsole", true);

// Don't retrieve unrequested links when performing standalone translation
pref("network.prefetch-next", false);

// Let operations run as long as necessary
pref("dom.max_chrome_script_run_time", 0);

// Enable JaegerMonkey
pref("javascript.options.methodjit.chrome", true);

// Use OS locale
pref("intl.locale.matchOS", true);

// Use basicViewer for opening new DOM windows from content (for TinyMCE)
pref("browser.chromeURL", "chrome://app/content/ui/basicViewer.xul");
// We need these to get the save dialog working with contentAreaUtils.js
pref("browser.download.useDownloadDir", false);
pref("browser.download.manager.showWhenStarting", true);
pref("browser.download.folderList", 1);
pref("browser.download.manager.retention", 1); // 1 indicates that completed and canceled downloads should be removed on quit;

// Don't show add-on selection dialog
pref("extensions.shownSelectionUI", true);
pref("extensions.autoDisableScope", 11);

// Never go offline
pref("offline.autoDetect", false);
pref("network.manage-offline-status", false);

// Disable graphics acceleration
pref("layers.acceleration.disabled", true);
pref("gfx.direct2d.disabled", true);

// Without this, we will throw up dialogs if asked to translate strange pages
pref("browser.xul.error_pages.enabled", true);

// Without this, scripts may decide to open popups
pref("dom.disable_open_during_load", true);

// Don't show security warning. The "warn_viewing_mixed" warning just lets the user know that some
// page elements were loaded over an insecure connection. This doesn't matter if all we're doing is
// scraping the page, since we don't provide any information to the site.
pref("security.warn_viewing_mixed", false);

// Preferences for add-on discovery
pref("extensions.getAddons.cache.enabled", false);
//pref("extensions.getAddons.maxResults", 15);
//pref("extensions.getAddons.get.url", "https://services.addons.mozilla.org/%LOCALE%/%APP%/api/%API_VERSION%/search/guid:%IDS%?src=thunderbird&appOS=%OS%&appVersion=%VERSION%&tMain=%TIME_MAIN%&tFirstPaint=%TIME_FIRST_PAINT%&tSessionRestored=%TIME_SESSION_RESTORED%");
//pref("extensions.getAddons.search.browseURL", "https://addons.mozilla.org/%LOCALE%/%APP%/search?q=%TERMS%");
//pref("extensions.getAddons.search.url", "https://services.addons.mozilla.org/%LOCALE%/%APP%/api/%API_VERSION%/search/%TERMS%/all/%MAX_RESULTS%/%OS%/%VERSION%?src=thunderbird");

// Allow installing XPIs from any host
pref("xpinstall.whitelist.required", false);

// Disable places
pref("places.history.enabled", false);

/** The below is imported from https://developer.mozilla.org/en/XULRunner/Application_Update **/
// Whether or not app updates are enabled
pref("app.update.enabled", true);

// This preference turns on app.update.mode and allows automatic download and
// install to take place. We use a separate boolean toggle for this to make
// the UI easier to construct.
pref("app.update.auto", true);

// Defines how the Application Update Service notifies the user about updates:
//
// AUM Set to:        Minor Releases:     Major Releases:
// 0                  download no prompt  download no prompt
// 1                  download no prompt  download no prompt if no incompatibilities
// 2                  download no prompt  prompt
//
// See chart in nsUpdateService.js.in for more details
//
pref("app.update.mode", 2);

// If set to true, the Update Service will present no UI for any event.
pref("app.update.silent", false);
pref("app.update.showInstalledUI", true);

// Update service URL:
// You do not need to use all the %VAR% parameters. Use what you need, %PRODUCT%,%VERSION%,%BUILD_ID%,%CHANNEL% for example
pref("app.update.url", "https://www.example.com/app/update/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/update.xml");

// URL user can browse to manually if for some reason all update installation
// attempts fail.
pref("app.update.url.manual", "http://www.example.com/app/");

// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard.
pref("app.update.url.details", "http://www.example.com/app/changelog");

// User-settable override to app.update.url for testing purposes.
//pref("app.update.url.override", "");

// Interval: Time between checks for a new version (in seconds)
//           default=1 day
pref("app.update.interval", 86400);

// Interval: Time before prompting the user to download a new version that
//           is available (in seconds) default=1 day
pref("app.update.nagTimer.download", 86400);

// Interval: Time before prompting the user to restart to install the latest
//           download (in seconds) default=30 minutes
pref("app.update.nagTimer.restart", 1800);

// The minimum delay in seconds for the timer to fire.
// default=2 minutes
pref("app.update.timerMinimumDelay", 120);

// Whether or not we show a dialog box informing the user that the update was
// successfully applied. This is off in Firefox by default since we show a
// upgrade start page instead! Other apps may wish to show this UI, and supply
// a whatsNewURL field in their brand.properties that contains a link to a page
// which tells users what's new in this new update.
pref("app.update.showInstalledUI", false);

// 0 = suppress prompting for incompatibilities if there are updates available
//     to newer versions of installed addons that resolve them.
// 1 = suppress prompting for incompatibilities only if there are VersionInfo
//     updates available to installed addons that resolve them, not newer
//     versions.
pref("app.update.incompatible.mode", 0);

// update channel for this build
pref("app.update.channel", "replaced-by-build-script");

// suppress external-load warning for standard browser schemes
pref("network.protocol-handler.warn-external.http", false);
pref("network.protocol-handler.warn-external.https", false);
pref("network.protocol-handler.warn-external.ftp", false);

// disable disk cache which would risk delivering stale files after app updates
pref("browser.cache.disk.enable", false);
