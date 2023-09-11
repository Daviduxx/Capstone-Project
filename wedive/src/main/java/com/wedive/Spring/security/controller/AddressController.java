package com.wedive.Spring.security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wedive.Spring.security.entity.Address;
import com.wedive.Spring.security.payload.AddressDto;
import com.wedive.Spring.security.service.AddressService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/addresses")
public class AddressController {
	
	@Autowired private AddressService aSvc;
	
	@GetMapping("/getall")
	public ResponseEntity<List<Address>> getAllAddress(){
		return new ResponseEntity<List<Address>>(aSvc.getAllAddress(), HttpStatus.OK);
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<?> getById(@PathVariable Long id){
		return new ResponseEntity<Address>(aSvc.getAddressById(id), HttpStatus.OK);
	}
	
	@PutMapping("/put/{id}")
	public ResponseEntity<?> updateAddress(@PathVariable Long id, @RequestBody AddressDto a){
		Address address = aSvc.update(id, a);
		return new ResponseEntity<Address>(address, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteById(@PathVariable Long id){
		return new ResponseEntity<String>(aSvc.deleteById(id), HttpStatus.OK);
	}

}
