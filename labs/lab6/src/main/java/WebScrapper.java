import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import io.github.bonigarcia.wdm.WebDriverManager;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class WebScrapper {
    public static void main(String[] args) {

        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        options.addArguments("--remote-allow-origins=*");
        WebDriver driver = new ChromeDriver(options);

        try {

            driver.get("https://weather.gc.ca/canada_e.html");

            WebElement element = driver.findElement(By.className("table"));
            List<WebElement> rows = element.findElements(By.xpath(".//tbody/tr"));


            String[] targetCities = {"Calgary", "Halifax", "Montreal", "Toronto", "Vancouver"};
            Map<String, String> cityTemperatures = new HashMap<>();

            // Iterate through each row and extract data
            for (WebElement row : rows) {
                List<WebElement> columns = row.findElements(By.tagName("td"));

                if (columns.size() >= 3) {
                    String city = columns.get(0).getText();

                    // If the city is in the target list, extract the temperature
                    for (String targetCity : targetCities) {
                        if (city.equalsIgnoreCase(targetCity)) {
                            //temperature extracting
                            String temperature = columns.get(2).getText();
                            cityTemperatures.put(city, temperature);
                        }
                    }
                }
            }

            // the results to a weather.txt
            try (BufferedWriter writer = new BufferedWriter(new FileWriter("Weather.txt"))) {
                writer.write("City,Temperature\n");
                for (Map.Entry<String, String> entry : cityTemperatures.entrySet()) {
                    writer.write("City: " + entry.getKey() + " Temperature: " + entry.getValue() + "\n");
                }
            } catch (IOException e) {
                System.err.println("Error writing to file: " + e.getMessage());
            }

        } catch (Exception e) {
            System.err.println("Error during web scraping: " + e.getMessage());
        } finally {
            driver.quit();
        }
    }
}
