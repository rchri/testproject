package com.testing.app;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;


public class HomePageClass {

    private WebDriver driver;

    public HomePageClass ( WebDriver driver)
    {
        this.driver = driver;
    }

    public void OpenHomePage()
    {
        String baseUrl = "https://www.outfittery.com/?_ga=1.24777658.1479051373.1475950429";
        driver.get(baseUrl);
    }

    public String VerifyHomePage()  {

        List<WebElement> HomePageButtonList = (new WebDriverWait(driver, 60)).until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.cssSelector("a[href='/funnels/main']")));
        return HomePageButtonList.get(0).getText();
    }

    public void ClickLetsGoButton()
    {
        List<WebElement> HomePageButtonList = (new WebDriverWait(driver, 60)).until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.cssSelector("a[href='/funnels/main']")));
        HomePageButtonList.get(0).click();
    }
}
