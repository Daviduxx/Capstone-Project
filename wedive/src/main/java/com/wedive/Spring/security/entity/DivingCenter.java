package com.wedive.Spring.security.entity;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table
public class DivingCenter{
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	 @Column(nullable = false, unique = true)
	private String name;
	 @Column(nullable = false, unique = true)
	private String vaxNumber;
	 @Column(nullable = false, unique = true)
	private String email;
	 @Column(nullable = false, unique = true)
	private String telephone;
	@ManyToOne
	private Address address;
	@OneToMany
	private Set<User> users;

}
