package com.wedive.Spring.security.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wedive.Spring.security.entity.Dive;
import com.wedive.Spring.security.payload.DiveDto;
import com.wedive.Spring.security.service.DiveService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/dives")
public class DiveController {
	
	@Autowired private DiveService diveSvc;
	
	@GetMapping("/get/{id}")
	public ResponseEntity<?> getById(@PathVariable Long id){
		return new ResponseEntity<Dive>(diveSvc.getById(id), HttpStatus.OK);
	}
	
	@GetMapping("/getall")
	public ResponseEntity<List<Dive>> getAllDives(){
		return new ResponseEntity<List<Dive>>(diveSvc.getAllDives(), HttpStatus.OK);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Dive> updateDive(@PathVariable Long id, @RequestBody Dive d){
		Dive dive = diveSvc.update(id, d);
		return new ResponseEntity<Dive>(dive, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteDive(@PathVariable Long id){
		return new ResponseEntity<String>(diveSvc.delete(id), HttpStatus.OK);
	}
	
	@PostMapping("/add/{id}")
	public ResponseEntity<String> addDive(@PathVariable Long id, @RequestBody DiveDto d){
		return new ResponseEntity<String>(diveSvc.addDive(d, id), HttpStatus.CREATED);
	}
}
