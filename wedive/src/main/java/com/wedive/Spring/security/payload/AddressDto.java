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
public class AddressDto {
	
	private String address;
	private String postalCode;
	private String city;
	private String state;

}
