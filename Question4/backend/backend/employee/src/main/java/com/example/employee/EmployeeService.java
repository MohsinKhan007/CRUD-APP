package com.example.employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;

//	public Employee save(Employee emp) {
//		return employeeRepository.save(emp);
//	}
	
	public EmployeeRepository getEmployeeRepository() {
		return employeeRepository;
	}

	public void setEmployeeRepository(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	public Employee save(Employee employee) {
		// TODO Auto-generated method stub
		return employeeRepository.save(employee);
	}
	public Employee getEmployeeById(int id) {
		System.out.println(" Get Employee by reposotory ");
		
		return employeeRepository.findById(id).get();
	}
	public Employee update(Employee employee) {
		Employee emp=employeeRepository.findById(employee.getId()).get();
		emp.setName(employee.getName());
		emp.setDept(employee.getDept());
		emp.setPhone(employee.getPhone());
		emp.setEmail(employee.getEmail());
		return employeeRepository.save(emp);
	}
	public String delete(int id) {
		System.out.println("DeleteEmployee Service");
		employeeRepository.deleteById(id);
		return "Employee Deleted of id:"+id;
	}
	
	public List<Employee> getAllEmployees() {
		List<Employee> emp=employeeRepository.findAll();
		return emp;
	}
	
	

}
