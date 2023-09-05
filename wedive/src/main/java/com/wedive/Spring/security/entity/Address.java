package com.wedive.Spring.security.entity;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "addresses")
public class Address {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String address;
	@Column(nullable = false, unique = true)
	private String postalCode;
	@Column(nullable = false, unique = true)
	private String city;
	@Column(nullable = false, unique = true)
	private String state;
	@OneToMany
	private Set<User> user;
}
