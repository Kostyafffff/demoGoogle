$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoGoogle.feature");
formatter.feature({
  "name": "Feature about google site",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open browser Chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iOpenBrowserChrome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open google site",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.iOpenGoogleSite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Google site",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iSeeGoogleSite(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open google site",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter word",
  "keyword": "When "
});
formatter.step({
  "name": "I see result word",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "word"
      ]
    },
    {
      "cells": [
        "java"
      ]
    },
    {
      "cells": [
        "selenium"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open google site",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iOpenGoogleSite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter word",
  "keyword": "When "
});
formatter.match({
  "location": "MySetpsdefs1.iEnterWord(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see result word",
  "keyword": "Then "
});
formatter.match({
  "location": "MySetpsdefs1.iSeeResultTable(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for text to be \"word\". Current text: \"\" (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-VEJC10R\u0027, ip: \u0027192.168.2.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.544315 (730aa6a5fdba15..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 65.0.3325.181, webStorageEnabled: true}\nSession ID: 6260367c2ec3f3f230342da25d5f256c\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat stepsdef.MySetpsdefs1.iSeeResultTable(MySetpsdefs1.java:22)\r\n\tat ✽.I see result word(GoGoogle.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open google site",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iOpenGoogleSite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter word",
  "keyword": "When "
});
formatter.match({
  "location": "MySetpsdefs1.iEnterWord(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see result word",
  "keyword": "Then "
});
formatter.match({
  "location": "MySetpsdefs1.iSeeResultTable(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for text to be \"word\". Current text: \"\" (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-VEJC10R\u0027, ip: \u0027192.168.2.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.37.544315 (730aa6a5fdba15..., userDataDir: C:\\Users\\User\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 65.0.3325.181, webStorageEnabled: true}\nSession ID: b396300e189d1da5384f8c0ff13cd2c0\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat stepsdef.MySetpsdefs1.iSeeResultTable(MySetpsdefs1.java:22)\r\n\tat ✽.I see result word(GoGoogle.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});