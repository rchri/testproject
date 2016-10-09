package com.testing.app;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class SetupProfilePageClass {
    private WebDriver driver;

    public SetupProfilePageClass ( WebDriver driver)
    {
        this.driver = driver;
    }

    public String GetSetupProfilePageHeadlineText()  {
        WebElement ProfilePageElement = (new WebDriverWait(driver, 60)).until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div[class='mt-sm mb-sm headline']")));
        return ProfilePageElement.getText();
    }

    public String GetRegistrationPageHeadlineText()  {
        WebElement RegistrationPageElement = (new WebDriverWait(driver, 60)).until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("h3[class='mt-md mb-md ng-scope']")));
        return RegistrationPageElement.getText();
    }


    public void ClickOption(String OptionValue)  {
        String BuildCSSSelector = "a[data-answer-value='" + OptionValue + "']";
        WebElement OptionElement = (new WebDriverWait(driver, 60)).until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(BuildCSSSelector)));
        OptionElement.click();
    }

    public void ClickContinueBtn()  {
        WebElement ContinueBtnElement = (new WebDriverWait(driver, 60)).until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'CONTINUE')]")));
        ContinueBtnElement.click();
    }

    public void MarkAllNone()  {
        List<WebElement> OptionElementList = (new WebDriverWait(driver, 60)).until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.cssSelector("div[class='overlay overlay-international ']")));
        for ( int i=0; i< OptionElementList.size();i++)
        {
            OptionElementList.get(i).click();
        }
    }

    public void FillBrandName(String BrandName)  {
        WebElement BrandNameTextBoxElement = (new WebDriverWait(driver, 60)).until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("textarea[class*='form-control']")));
        BrandNameTextBoxElement.sendKeys(BrandName);
    }
}
