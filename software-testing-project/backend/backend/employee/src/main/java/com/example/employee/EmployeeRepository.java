package com.example.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// To access the data through JPA repository
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}