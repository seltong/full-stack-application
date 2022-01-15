package com.in28minutes.fullstack.springboot.gradle.crud.springbootfullstackcrudfullstackwithgradle.course.copy;

import java.util.Objects;

public class Course {
	private Long id;
	private String username;
	private String description;

	public Course(Long id, String username, String description) {
		this.id = id;
		this.username = username;
		this.description = description;
	}

	@Override
	public int hashCode() {
		return Objects.hash(description, id, username);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Course other = (Course) obj;
		return Objects.equals(description, other.description) && Objects.equals(id, other.id)
				&& Objects.equals(username, other.username);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
