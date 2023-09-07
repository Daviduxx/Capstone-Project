package com.wedive.Spring.security.repository;

import org.springframework.data.repository.CrudRepository;

import com.wedive.Spring.security.entity.Dive;

public interface DiveDAO extends CrudRepository<Dive, Long> {

		public boolean existsByNameAndIdNot(String name, Long id);
}
