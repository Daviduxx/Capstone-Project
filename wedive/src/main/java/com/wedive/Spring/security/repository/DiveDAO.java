package com.wedive.Spring.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.wedive.Spring.security.entity.Dive;

public interface DiveDAO extends CrudRepository<Dive, Long> {

		public boolean existsByNameAndIdNot(String name, Long id);
		
		@Query("SELECT d FROM Dive d WHERE d.user.id = :id")
		public List<Dive> findByUserId(Long id);
}
