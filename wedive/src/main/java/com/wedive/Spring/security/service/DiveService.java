package com.wedive.Spring.security.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wedive.Spring.security.entity.Dive;
import com.wedive.Spring.security.entity.User;
import com.wedive.Spring.security.payload.DiveDto;
import com.wedive.Spring.security.repository.DiveDAO;
import com.wedive.Spring.security.repository.UserRepository;

import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;

@Service
public class DiveService {
	
	@Autowired private DiveDAO diveRepo;
	@Autowired private UserRepository uRepo;

	// GET REQUESTS 
	
	public Dive getById(Long id) {
		if(!diveRepo.existsById(id))
			throw new EntityNotFoundException("This dive doesn't exists!");
		return diveRepo.findById(id).get();
	}
	
	public List<Dive> getAllDives(){
		return (List<Dive>) diveRepo.findAll();
	}
	
	public List<Dive> getAllByUserId(Long id){
		return diveRepo.findByUserId(id);
	}
	
	// DELETE REQUESTS
	
	public Dive delete(Long id) {
		if(!diveRepo.existsById(id))
			throw new EntityNotFoundException("This dive doesn't exists!");
		Dive d = diveRepo.findById(id).orElse(null);
		User u = d.getUser();
		Set<Dive> dives = u.getDives();
		dives.remove(d);
		diveRepo.deleteById(id);
		return d;
	}
	
	// PUT REQUESTS
	
	public Dive update(Long id, Dive d) {
		if(!diveRepo.existsById(id) || d.getId() != id)
			throw new EntityNotFoundException("This dive doesn't exists!");
		if(diveRepo.existsByNameAndIdNot(d.getName(), d.getId()))
			throw new EntityExistsException("A dive with this name already exists! Please change name");
		return diveRepo.save(d);
		}
	
	public Dive addDive(DiveDto d, Long id) {
		Dive dive = new Dive();
		User u = uRepo.getById(id);
		dive.setName(d.getName());
		dive.setDate(LocalDate.now());
		dive.setType(d.getType());
		dive.setMaxDepth(d.getMaxDepth());
		dive.setDiveTime(d.getDiveTime());
		dive.setWaterType(d.getWaterType());
		dive.setWaterTaste(d.getWaterTaste());
		dive.setWeather(d.getWeather());
		dive.setAirTemperature(d.getAirTemperature());
		dive.setSurfaceTemperature(d.getSurfaceTemperature());
		dive.setDeepTemperature(d.getDeepTemperature());
		dive.setVisibility(d.getVisibility());
		dive.setWaves(d.getWaves());
		dive.setCurrent(d.getCurrent());
		dive.setSuit(d.getSuit());
		dive.setBallast(d.getBallast());
		dive.setTank(d.getTank());
		dive.setTankSize(d.getTankSize());
		dive.setGasMix(d.getGasMix());
		dive.setInitialPressure(d.getInitialPressure());
		dive.setFinalPressure(d.getFinalPressure());
		dive.setUsedAir(d.getInitialPressure() - d.getFinalPressure());
		dive.setJudgement(d.getJudgement());
		dive.setNotes(d.getNotes());
		dive.setBuddy(d.getBuddy());
		dive.setUser(u);
		return diveRepo.save(dive);
	}
	}


