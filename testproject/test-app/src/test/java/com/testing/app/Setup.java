package com.testing.app;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.TemporaryFilesystem;

import java.io.File;


public class Setup {

    private static boolean initialized = false;

    private WebDriver driver;

    @Before
    public void setUp() throws Exception {

        if (!initialized) {

            String DriverFilePath= "\\chromedriver_win32\\chromedriver.exe";
            String basePath = new File("").getAbsolutePath();
            DriverFilePath = basePath.concat(DriverFilePath);
            System.setProperty("webdriver.chrome.driver",DriverFilePath);
            this.driver = new ChromeDriver();
            initialized = true;
        }
    }

    public WebDriver getDriver() {
        return driver;
    }

    @After
    public void cleanUp() throws Exception {
        TemporaryFilesystem tempFS = TemporaryFilesystem.getDefaultTmpFS();
        tempFS.deleteTemporaryFiles();
        driver.close();
        driver.quit();
    }

}
