package com.wedive.Spring.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wedive.Spring.security.entity.User;
import com.wedive.Spring.security.payload.UpdateDTO;
import com.wedive.Spring.security.service.UserService;

// USERS CONTROLLER FOR HTTP REQUESTS

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {
	
		@Autowired private UserService uSvc;
		
		@GetMapping("/getall")
		public ResponseEntity<List<User>> getAllUsers(){
			return new ResponseEntity<List<User>>(uSvc.getAllUsers(), HttpStatus.OK);
		}
		
		@GetMapping("/get/{id}")
		public ResponseEntity<?> getById(@PathVariable Long id){
			return new ResponseEntity<User>(uSvc.getUserById(id), HttpStatus.OK);
		}
		
		@PatchMapping("/put/{id}")
		public ResponseEntity<?> addDive(@PathVariable Long id, @RequestBody UpdateDTO u){
			User user = uSvc.update(id, u);
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}
		
	}
