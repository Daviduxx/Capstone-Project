package com.wedive.Spring.security.payload;

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
		    private String username;		    
		    private String email;
		    private String password;
		    private String phoneNumber;		   
		    // COMING SOON
		   // private Address address;		   
		   // private Set<Licence> licences;		 		    
		    private String bannerImage;
		    private String profileImage;
		    
	}

