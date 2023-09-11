package com.wedive.Spring.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wedive.Spring.security.entity.Address;
import com.wedive.Spring.security.payload.AddressDto;
import com.wedive.Spring.security.repository.AddressRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AddressService {
	
	@Autowired private AddressRepository aRepo;
	
	// GET REQUESTS
	
		public List<Address> getAllAddress(){
			return (List<Address>) aRepo.findAll();
		}
		
		public Address getAddressById(Long id) {
			if(!aRepo.existsById(id)) {
				throw new EntityNotFoundException("This address doesn't exists!");
			}
			return aRepo.findById(id).get();
		}
		
		// PUT REQUESTS
		
	    public Address update(Long id, AddressDto aDto) {
	    	//CHECKS
			if(!aRepo.existsById(id))
				throw new EntityNotFoundException("This address doesn't exists!");
			
			 Address exAdd = aRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("This address doesn't exists!"));
			 
			 exAdd.setAddress(aDto.getAddress());
			 exAdd.setPostalCode(aDto.getPostalCode());
			 exAdd.setCity(aDto.getCity());
			 exAdd.setState(aDto.getState());
			 
			 return aRepo.save(exAdd);
	
		}
	    
	  //DELETE REQUESTS
	    
    	public String deleteById(Long id) {
    		//CHECKS
    		if(!aRepo.existsById(id))
    			throw new EntityNotFoundException("This address doesn't exists!");
    		
    		aRepo.deleteById(id);
    		return "Address successfully deleted!";
    	}
		

}
