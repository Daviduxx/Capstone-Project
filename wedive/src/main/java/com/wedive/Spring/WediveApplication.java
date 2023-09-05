package com.wedive.Spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WediveApplication {

	public static void main(String[] args) {
		SpringApplication.run(WediveApplication.class, args);
		
		System.out.println("Welcome to wedive!");
	}

}
