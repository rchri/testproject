$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CustomerRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "CustomerRegistration",
  "description": "",
  "id": "customerregistration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2887264470,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Customer should be able to see register page through funnel even without choosing styles, brand and customer just want to test service",
  "description": "",
  "id": "customerregistration;customer-should-be-able-to-see-register-page-through-funnel-even-without-choosing-styles,-brand-and-customer-just-want-to-test-service",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Go to Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on Lets Go button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify SetupProfile Page Headline \"What do you like to wear in your free time?\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click option \"dont like any private style\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify SetupProfile Page Headline \"What do you wear to work?\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click option \"dont like any work style\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify SetupProfile Page Headline \"Which shoes would you wear?\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click option \"dont like any shoe style\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Verify SetupProfile Page Headline \"What would you NEVER wear?\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Mark all options none",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify SetupProfile Page Headline \"Which brands do you like?\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Write Brand Name \"DanisBRAND\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify SetupProfile Page Headline \"How old do you feel?\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click option \"55+\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify SetupProfile Page Headline \"What\u0027s motivating you to try out our service?\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click option \"testing the service\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify Registration Page Headline \"Perfect! Now your stylist knows what you like.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepdefs.GotoHomePage()"
});
formatter.result({
  "duration": 3966710477,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdefs.VerifyHomePage()"
});
formatter.result({
  "duration": 64537066,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepdefs.ClickLetsGoBtn()"
});
formatter.result({
  "duration": 1509050248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What do you like to wear in your free time?",
      "offset": 35
    }
  ],
  "location": "SetupProfilePageStepdefs.VerifySetupProfilePageHeadline(String)"
});
formatter.result({
  "duration": 3046816996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dont like any private style",
      "offset": 14
    }
  ],
  "location": "SetupProfilePageStepdefs.ClickOption(String)"
});
formatter.result({
  "duration": 59990511,
  "status": "passed"
});
formatter.match({
  "location": "SetupProfilePageStepdefs.ClickOnContinueButton()"
});
formatter.result({
  "duration": 77856747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What do you wear to work?",
      "offset": 35
    }
  ],
  "location": "SetupProfilePageStepdefs.VerifySetupProfilePageHeadline(String)"
});
formatter.result({
  "duration": 3035154128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dont like any work style",
      "offset": 14
    }
  ],
  "location": "SetupProfilePageStepdefs.ClickOption(String)"
});
formatter.result({
  "duration": 45676506,
  "status": "passed"
});
formatter.match({
  "location": "SetupProfilePageStepdefs.ClickOnContinueButton()"
});
formatter.result({
  "duration": 59325653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which shoes would you wear?",
      "offset": 35
    }
  ],
  "location": "SetupProfilePageStepdefs.VerifySetupProfilePageHeadline(String)"
});
formatter.result({
  "duration": 3041580300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dont like any shoe style",
      "offset": 14
    }
  ],
  "location": "SetupProfilePageStepdefs.ClickOption(String)"
});
formatter.result({
  "duration": 49729257,
  "status": "passed"
});
formatter.match({
  "location": "SetupProfilePageStepdefs.ClickOnContinueButton()"
});
formatter.result({
  "duration": 57953272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What would you NEVER wear?",
      "offset": 35
    }
  ],
  "location": "SetupProfilePageStepdefs.VerifySetupProfilePageHeadline(String)"
});
formatter.result({
  "duration": 3037501081,
  "status": "passed"
});
formatter.match({
  "location": "SetupProfilePageStepdefs.MarkAllNone()"
});
formatter.result({
  "duration": 282083949,
  "status": "passed"
});
formatter.match({
  "location": "SetupProfilePageStepdefs.ClickOnContinueButton()"
});
formatter.result({
  "duration": 71259521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Which brands do you like?",
      "offset": 35
    }
  ],
  "location": "SetupProfilePageStepdefs.VerifySetupProfilePageHeadline(String)"
});
formatter.result({
  "duration": 3032412922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DanisBRAND",
      "offset": 18
    }
  ],
  "location": "SetupProfilePageStepdefs.FillBrandName(String)"
});
formatter.result({
  "duration": 78324874,
  "status": "passed"
});
formatter.match({
  "location": "SetupProfilePageStepdefs.ClickOnContinueButton()"
});
formatter.result({
  "duration": 56241153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "How old do you feel?",
      "offset": 35
    }
  ],
  "location": "SetupProfilePageStepdefs.VerifySetupProfilePageHeadline(String)"
});
formatter.result({
  "duration": 3034636621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55+",
      "offset": 14
    }
  ],
  "location": "SetupProfilePageStepdefs.ClickOption(String)"
});
formatter.result({
  "duration": 55404451,
  "status": "passed"
});
formatter.match({
  "location": "SetupProfilePageStepdefs.ClickOnContinueButton()"
});
formatter.result({
  "duration": 64987020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What\u0027s motivating you to try out our service?",
      "offset": 35
    }
  ],
  "location": "SetupProfilePageStepdefs.VerifySetupProfilePageHeadline(String)"
});
formatter.result({
  "duration": 3034094621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing the service",
      "offset": 14
    }
  ],
  "location": "SetupProfilePageStepdefs.ClickOption(String)"
});
formatter.result({
  "duration": 41918458,
  "status": "passed"
});
formatter.match({
  "location": "SetupProfilePageStepdefs.ClickOnContinueButton()"
});
formatter.result({
  "duration": 57124866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Perfect! Now your stylist knows what you like.",
      "offset": 35
    }
  ],
  "location": "SetupProfilePageStepdefs.VerifyRegistrationPageHeadline(String)"
});
formatter.result({
  "duration": 3037885459,
  "status": "passed"
});
formatter.after({
  "duration": 3067765362,
  "status": "passed"
});
});