package com.in28minutes.fullstack.springboot.gradle.crud.springbootfullstackcrudfullstackwithgradle.course.copy;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class CourseResource {

	@Autowired
	private CoursesHardcodedService courseManagementService;

	@GetMapping("/instructors/{username}/courses")
	public List<Course> getAllCourses(@PathVariable String username) {
		return courseManagementService.findAll();
	}

	@DeleteMapping("/instructors/{username}/courses/{id}")
	public ResponseEntity<Void> deleteCourse(@PathVariable String username, @PathVariable long id) {
		Course course = courseManagementService.deleteById(id);

		if (course != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
	}

	@GetMapping()
	public Course getCourse(@PathVariable String username, @PathVariable long id) {
		return courseManagementService.findById(id);
	}

	@PutMapping("/instructors/{username}/courses/{id}")
	public ResponseEntity<Course> updateCourse(@PathVariable String username, @PathVariable long id,
			@PathVariable Course course) {
		Course courseUpdated = courseManagementService.save(course);

		return new ResponseEntity<Course>(courseUpdated, HttpStatus.OK);
	}
}
