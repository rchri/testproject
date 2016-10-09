package com.testing.app;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class HomePageStepdefs {
    private Setup setupSteps;
    private HomePageClass HomePageObj;

   public HomePageStepdefs (Setup setupSteps) {
        this.setupSteps = setupSteps;
    }


    @Then("^Go to Homepage$")
    public void GotoHomePage()
    {
        WebDriver driver = setupSteps.getDriver();
        HomePageObj = new HomePageClass(driver);
        HomePageObj.OpenHomePage();
    }

    @Then("^Verify Homepage$")
    public void VerifyHomePage()
    {
        WebDriver driver = setupSteps.getDriver();
        HomePageObj = new HomePageClass(driver);
        Assert.assertEquals("LET'S GO!", HomePageObj.VerifyHomePage());
    }

    @When("^Click on Lets Go button$")
    public void ClickLetsGoBtn()
    {
        WebDriver driver = setupSteps.getDriver();
        HomePageObj = new HomePageClass(driver);
        HomePageObj.ClickLetsGoButton();
    }
}
