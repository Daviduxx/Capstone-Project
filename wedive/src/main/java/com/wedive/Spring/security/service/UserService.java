package com.wedive.Spring.security.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.wedive.Spring.security.entity.Address;
import com.wedive.Spring.security.entity.Dive;
import com.wedive.Spring.security.entity.ERole;
import com.wedive.Spring.security.entity.Role;
import com.wedive.Spring.security.entity.User;
import com.wedive.Spring.security.payload.UpdateDTO;
import com.wedive.Spring.security.repository.AddressRepository;
import com.wedive.Spring.security.repository.RoleRepository;
import com.wedive.Spring.security.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

// HTTP REQUESTS FOR USER ENTITY (POST REQUESTS ARE HANDLED BY AUTHSERVICE.JAVA)

@Service
public class UserService {
	
	@Autowired private UserRepository uRepo;
	@Autowired private RoleRepository roleRepository;
	@Autowired private AddressRepository addRepo;
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
	
	public User getuserByUsername(String un) {
		if(!uRepo.existsByUsername(un)) {
			throw new EntityNotFoundException("This user doesn't exists!");
		}
		return uRepo.findByUsername(un).get();
		}
	
	// PUT REQUESTS
	
    public User update(Long id, UpdateDTO uDto) {
    	//CHECKS
		if(!uRepo.existsById(id))
			throw new EntityNotFoundException("This user doesn't exists!");
		
		 User exUser = uRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("This user doesn't exists!"));
		 
		 exUser.setName(uDto.getName());
		 exUser.setSurname(uDto.getSurname());
		 exUser.setEmail(uDto.getEmail());
		 exUser.setUsername(uDto.getUsername());
		 exUser.setBirthday(uDto.getBirthday());
		 exUser.setPhoneNumber(uDto.getPhoneNumber());
		// exUser.setDate(uDto.getDate());
		 exUser.setPassword(passwordEncoder.encode(uDto.getPassword()));
		 //exUser.setAddress(uDto.getAddress());
		// exUser.setDivingCenter(uDto.getDivingCenter());
		 exUser.setLicences(uDto.getLicences());
		 
		 //ROLES
		 Set<Role> roles = new HashSet<>();	  
		 Role userRole = null;
		 if(uDto.getRoles().equals("ADMIN")) userRole = roleRepository.findByRoleName(ERole.ROLE_ADMIN).get();
	    	else if(uDto.getRoles().equals("MODERATOR")) userRole = roleRepository.findByRoleName(ERole.ROLE_MODERATOR).get();
	    	else userRole = roleRepository.findByRoleName(ERole.ROLE_USER).get();
	    // Role userRole = roleRepository.findByRoleName(ERole.ROLE_USER).get();
	     roles.add(userRole);
	     exUser.setRoles(roles);   
	     
	     //DIVES
	     Set<Dive> dives = uDto.getDives();
	     dives.forEach(d -> d.setUser(exUser));
	     exUser.setDives(dives);
	     
	     Address address = uDto.getAddress();
	     if(address != null) {
	    	 addRepo.save(address);
	    	 exUser.setAddress(address);	     }
	     
	     return uRepo.save(exUser);
		}
    
    	//DELETE REQUESTS
    
    	public String deleteById(Long id) {
    		//CHECKS
    		if(!uRepo.existsById(id))
    			throw new EntityNotFoundException("This user doesn't exists!");
    		
    		uRepo.deleteById(id);
    		return "User successfully deleted!";
    	}
	

}
