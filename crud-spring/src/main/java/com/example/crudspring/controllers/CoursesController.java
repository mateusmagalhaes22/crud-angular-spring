package com.example.crudspring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crudspring.models.Course;
import com.example.crudspring.repository.CourseRepository;

@RestController
@RequestMapping("/api/courses")
public class CoursesController {
	
	@Autowired
	private CourseRepository repository;

	@GetMapping
	public List<Course> findAll() {
		return repository.findAll();
	}
}
