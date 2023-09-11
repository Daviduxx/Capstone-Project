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
public class AddressDto {
	
	private String address;
	private String postalCode;
	private String city;
	private String state;

}
