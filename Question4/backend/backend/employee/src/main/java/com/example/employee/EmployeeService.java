package com.example.employee;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// The Service class is used in the Controller and logic of endpoints and written here
@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;

	public EmployeeRepository getEmployeeRepository() {
		return employeeRepository;
	}

	public void setEmployeeRepository(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	public Employee save(Employee employee) {
		// Saving the function in the MySQL database
		return employeeRepository.save(employee);
	}
	// returing the Employee by getting the Id
	public Employee getEmployeeById(int id) {
			return employeeRepository.findById(id).get();
	}
	// Update EMployee by getting Employee 
	public Employee update(Employee employee) {
		Employee emp=employeeRepository.findById(employee.getId()).get();
		emp.setName(employee.getName());
		emp.setDept(employee.getDept());
		emp.setPhone(employee.getPhone());
		emp.setEmail(employee.getEmail());
		return employeeRepository.save(emp);
	}
	// deleting employee by getting the id
	public String delete(int id) {
		employeeRepository.deleteById(id);
		return "Employee Deleted of id:"+id;
	}
	//Getting all the employees
	public List<Employee> getAllEmployees() {
		List<Employee> emp=employeeRepository.findAll();
		return emp;
	}
	
	

}
