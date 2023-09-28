package com.wedive.Spring.security.payload;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

import com.wedive.Spring.security.entity.Address;
import com.wedive.Spring.security.entity.Dive;
import com.wedive.Spring.security.entity.DivingCenter;
import com.wedive.Spring.security.entity.Licence;
import com.wedive.Spring.security.entity.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
	
	@Setter
	@Getter
	@ToString
	@NoArgsConstructor
	@AllArgsConstructor
	public class UpdateDTO {
		 
		    private String name;
		    private String surname;		   
		    private LocalDate birthday;		    
		    private String username;		    
		    private String email;
		    private String phoneNumber;		     
		    private LocalDateTime date; 	
		   // private Set<Role> roles;		   
		    private Address address;		   
		    private Set<Licence> licences;		 
		    private DivingCenter divingCenter;		    
		    private Set<Dive> dives;
		    
	}

