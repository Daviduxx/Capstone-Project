package com.wedive.Spring.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wedive.Spring.security.entity.User;
import com.wedive.Spring.security.repository.UserRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UserService {
	
	@Autowired private UserRepository uRepo;
	
	public List<User> getAllUsers(){
		return uRepo.findAll();
	}
	
	public User getUserById(Long id) {
		if(!uRepo.existsById(id)) {
			throw new EntityNotFoundException("This user doesn't exists!");
		}
		return uRepo.findById(id).get();
	}
	

}
