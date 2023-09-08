package com.wedive.Spring.security.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.wedive.Spring.security.entity.Dive;
import com.wedive.Spring.security.entity.ERole;
import com.wedive.Spring.security.entity.Role;
import com.wedive.Spring.security.entity.User;
import com.wedive.Spring.security.payload.UpdateDTO;
import com.wedive.Spring.security.repository.RoleRepository;
import com.wedive.Spring.security.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

// HTTP REQUESTS FOR USER ENTITY

@Service
public class UserService {
	
	@Autowired private UserRepository uRepo;
	@Autowired private UserRepository userRepository;
	@Autowired private RoleRepository roleRepository;
	@Autowired private PasswordEncoder passwordEncoder;
	
	
	// GET REQUESTS
	
	public List<User> getAllUsers(){
		return uRepo.findAll();
	}
	
	public User getUserById(Long id) {
		if(!uRepo.existsById(id)) {
			throw new EntityNotFoundException("This user doesn't exists!");
		}
		return uRepo.findById(id).get();
	}
	
	// PUT REQUESTS
	
    public User update(Long id, UpdateDTO uDto) {
    	//CHECKS
		if(!userRepository.existsById(id))
			throw new EntityNotFoundException("This user doesn't exists!");
		
		 User exUser = userRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("This user doesn't exists!"));
		 
		 exUser.setName(uDto.getName());
		 exUser.setSurname(uDto.getSurname());
		 exUser.setEmail(uDto.getEmail());
		 exUser.setUsername(uDto.getUsername());
		 exUser.setBirthday(uDto.getBirthday());
		 exUser.setPhoneNumber(uDto.getPhoneNumber());
		 exUser.setDate(uDto.getDate());
		 exUser.setPassword(passwordEncoder.encode(uDto.getPassword()));
		 exUser.setAddress(uDto.getAddress());
		 exUser.setDivingCenter(uDto.getDivingCenter());
		 exUser.setLicences(uDto.getLicences());
		 
		 //ROLES
		 Set<Role> roles = new HashSet<>();	  
	     Role userRole = roleRepository.findByRoleName(ERole.ROLE_USER).get();
	     roles.add(userRole);
	     exUser.setRoles(roles);   
	     
	     //DIVES
	     Set<Dive> dives = uDto.getDives();
	     dives.forEach(d -> d.setUser(exUser));
	     exUser.setDives(dives);
	     
	     return userRepository.save(exUser);
		}
	

}
