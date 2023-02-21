package com.example.employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="api/Employees",method= {RequestMethod.GET,RequestMethod.PUT,RequestMethod.POST})
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	@PostMapping(path = "/create")
	public Employee addEmployee(@RequestBody Employee employee) {
		return employeeService.save(employee);
	}

	@GetMapping("/getById/{id}")
	public Employee getEmployeeById(@PathVariable int id) {
		return employeeService.getEmployeeById(id);
	}
	
	@GetMapping(path= "/getAll")
	public List<Employee> getAllEmployees(){
		return employeeService.getAllEmployees();
	}
	@PutMapping(path="/update")
	public Employee updateEmployee(@RequestBody Employee employee) {
		return employeeService.update(employee);
	}
	
	@DeleteMapping(path="/delete/{id}")
	public String deleteEmlpoyee(@PathVariable int id) {
		return employeeService.delete(id);
	}
	
	
	public EmployeeService getEmployeeService() {
		return employeeService;
	}
	
	public void setEmployeeService(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}
	
	
}
