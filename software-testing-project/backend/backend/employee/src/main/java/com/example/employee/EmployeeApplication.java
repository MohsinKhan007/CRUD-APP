package com.example.employee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// TO DO application code for spring  boot run application by SAH
@SpringBootApplication
public class EmployeeApplication {
// Main function Class to Run Application
	public static void main(String[] args) {
		System.out.println("Employee CRUD Application");
		SpringApplication.run(EmployeeApplication.class, args);
	}

}
