package com.wedive.Spring.security.repository;

import org.springframework.data.repository.CrudRepository;

import com.wedive.Spring.security.entity.Address;

public interface AddressDAO extends CrudRepository<Address, Long>{

}
