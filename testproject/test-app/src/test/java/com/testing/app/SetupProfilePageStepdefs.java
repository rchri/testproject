package com.testing.app;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class SetupProfilePageStepdefs {
    private Setup setupSteps;
    private SetupProfilePageClass SetupProfilePageObj;

    public SetupProfilePageStepdefs (Setup setupSteps) {
        this.setupSteps = setupSteps;
    }

    @Then("^Click option \"([^\"]*)\"$")
    public void ClickOption(String OptionValue)
    {
        WebDriver driver = setupSteps.getDriver();
        SetupProfilePageObj = new SetupProfilePageClass(driver);
        SetupProfilePageObj.ClickOption(OptionValue);
    }

    @Then("^Click on Continue button$")
    public void ClickOnContinueButton()
    {
        WebDriver driver = setupSteps.getDriver();
        SetupProfilePageObj = new SetupProfilePageClass(driver);
        SetupProfilePageObj.ClickContinueBtn();
    }

    @Then("^Verify SetupProfile Page Headline \"([^\"]*)\"$")
    public void VerifySetupProfilePageHeadline(String HeadlineText)
    {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebDriver driver = setupSteps.getDriver();
        SetupProfilePageObj = new SetupProfilePageClass(driver);
        Assert.assertEquals(HeadlineText, SetupProfilePageObj.GetSetupProfilePageHeadlineText());
    }

    @When("^Mark all options none")
    public void MarkAllNone()
    {
        WebDriver driver = setupSteps.getDriver();
        SetupProfilePageObj = new SetupProfilePageClass(driver);
        SetupProfilePageObj.MarkAllNone();
    }

    @When("^Write Brand Name \"([^\"]*)\"$")
    public void FillBrandName(String BrandName)
    {
        WebDriver driver = setupSteps.getDriver();
        SetupProfilePageObj = new SetupProfilePageClass(driver);
        SetupProfilePageObj.FillBrandName(BrandName);
    }

    @Then("^Verify Registration Page Headline \"([^\"]*)\"$")
    public void VerifyRegistrationPageHeadline(String HeadlineText)
    {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        WebDriver driver = setupSteps.getDriver();
        SetupProfilePageObj = new SetupProfilePageClass(driver);
        Assert.assertEquals(HeadlineText, SetupProfilePageObj.GetRegistrationPageHeadlineText());
    }
}
