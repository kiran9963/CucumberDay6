package org.cucum;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class AddId {
	public static WebDriver driver;
	@Given("user should launch browser")
	public void user_should_launch_browser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\HP\\eclipse-kk\\cucumber\\chrome\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://www.demo.guru99.com/telecom/");
		driver.manage().timeouts().implicitlyWait(1000,TimeUnit.SECONDS);
		

	}

	@When("User click the add customer link")
	public void user_click_the_add_customer_link() {
		System.out.println("when-1");
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();

	}

	@When("User Provide valid details")
	public void user_Provide_valid_details() throws InterruptedException {
		System.out.println("when-2");
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys("kranti");
		driver.findElement(By.id("lname")).sendKeys("kiran");
		driver.findElement(By.id("email")).sendKeys("kiran123@gmail.com");
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys("Andhra");
		driver.findElement(By.id("telephoneno")).sendKeys("9963966653");
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@When("User provide the details in form {string},{string},{string},{string},{string}")
	public void user_provide_the_details_in_form(String fname, String lname, String email, String Address, String Mob) {
		System.out.println("when-3");
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(fname);
		driver.findElement(By.id("lname")).sendKeys(lname);
		driver.findElement(By.id("email")).sendKeys(email);
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(Address);
		driver.findElement(By.id("telephoneno")).sendKeys(Mob);
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	   
	}
	@When("User provide valid details1")
	public void user_provide_valid_details1(io.cucumber.datatable.DataTable data) {
		System.out.println("when-4");
		List<String> oned = data.asList(String.class);
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(oned.get(0));
		driver.findElement(By.id("lname")).sendKeys(oned.get(1));
		driver.findElement(By.id("email")).sendKeys(oned.get(2));
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(oned.get(3));
		driver.findElement(By.id("telephoneno")).sendKeys(oned.get(4));
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	   
	}
	@When("User provide valid details customer")
	public void user_provide_valid_details_customer(io.cucumber.datatable.DataTable k) {
		System.out.println("when-5");
		
		Map<String,String> oned = k.asMap(String.class, String.class);
		System.out.println(oned);
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(oned.get("fname"));
		driver.findElement(By.id("lname")).sendKeys(oned.get("lname"));
		driver.findElement(By.id("email")).sendKeys(oned.get("gmail"));
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(oned.get("Address"));
		driver.findElement(By.id("telephoneno")).sendKeys(oned.get("mob"));
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}
	
	@When("USer Should provide the Data")
	public void user_Should_provide_the_Data(io.cucumber.datatable.DataTable data) throws InterruptedException {
		System.out.println("when-6");
		List<List<String>> twodlist = data.asLists(String.class);
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(twodlist.get(0).get(1));
		driver.findElement(By.id("lname")).sendKeys(twodlist.get(1).get(1));
		driver.findElement(By.id("email")).sendKeys(twodlist.get(0).get(2));
		driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(twodlist.get(0).get(3));
		driver.findElement(By.id("telephoneno")).sendKeys(twodlist.get(1).get(4));
		driver.findElement(By.xpath("//input[@type='submit']")).click();
		
	
	}
	@When("USer Should provide the info")
	public void user_Should_provide_the_info(io.cucumber.datatable.DataTable data) throws InterruptedException {
		System.out.println("when-7");
	  List<Map<String, String>> twodmap = data.asMaps(String.class,String.class);
	  System.out.println(twodmap);
	  driver.findElement(By.xpath("//label[text()='Done']")).click();
	  driver.findElement(By.id("fname")).sendKeys(twodmap.get(0).get("fname"));
	  driver.findElement(By.id("lname")).sendKeys(twodmap.get(2).get("lname"));
	  driver.findElement(By.id("email")).sendKeys(twodmap.get(0).get("email"));
	  driver.findElement(By.xpath("//textarea[@name='addr']")).sendKeys(twodmap.get(2).get("Address"));
	  driver.findElement(By.id("telephoneno")).sendKeys(twodmap.get(2).get("Mob"));
	  driver.findElement(By.xpath("//input[@type='submit']")).click();
		}
	
	@Then("To verify the customer id is Displayed")
	public void to_verify_the_customer_id_is_Displayed() {
		Assert.assertTrue((driver.findElement(By.xpath("//td[@align='center']")).isDisplayed()));
driver.quit();
	}

}
