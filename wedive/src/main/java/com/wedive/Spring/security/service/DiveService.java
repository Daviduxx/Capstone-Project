package com.wedive.Spring.security.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wedive.Spring.security.entity.Dive;
import com.wedive.Spring.security.repository.DiveDAO;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class DiveService {
	
	@Autowired private DiveDAO diveRepo;

	// GET REQUESTS 
	
	public Dive getById(Long id) {
		if(!diveRepo.existsById(id))
			throw new EntityNotFoundException("This dive doesn't exists!");
		return diveRepo.findById(id).get();
	}
	
	public List<Dive> getAllDives(){
		return (List<Dive>) diveRepo.findAll();
	}
	
	// DELETE REQUESTS
	
	public String delete(Long id) {
		if(!diveRepo.existsById(id))
			throw new EntityNotFoundException("This dive doesn't exists!");
		diveRepo.deleteById(id);
		return "Dive deleted succesfully!";
	}
	
	// PUT REQUESTS
	
	public Dive update(Long id, Dive d) {
		if(!diveRepo.existsById(id) || d.getId() != id)
			throw new EntityNotFoundException("This dive doesn't exists!");
		if(diveRepo.existsByNameAndIdNot(d.getName(), d.getId()))
			throw new EntityExistsException("A dive with this name already exists! Please change name");
		return diveRepo.save(d);
		}

}
