package com.wedive.Spring.security.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wedive.Spring.security.entity.Dive;
import com.wedive.Spring.security.service.DiveService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/yourdives")
public class DiveController {
	
	@Autowired private DiveService diveSvc;
	
	@PostMapping("/add")
	public ResponseEntity<?> create(@RequestBody Dive d){
		return new ResponseEntity<Dive>(diveSvc.create(d), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getById(@PathVariable Long id){
		return new ResponseEntity<Dive>(diveSvc.getById(id), HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<Set<Dive>> getAll(){
		return new ResponseEntity<Set<Dive>>(diveSvc.getAllDives(), HttpStatus.OK);
	}
}
