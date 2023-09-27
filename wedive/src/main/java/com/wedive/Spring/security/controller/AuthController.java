package com.wedive.Spring.security.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wedive.Spring.security.payload.JWTAuthResponse;
import com.wedive.Spring.security.payload.LoginDto;
import com.wedive.Spring.security.payload.RegisterDto;
import com.wedive.Spring.security.payload.RegisterResponse;
import com.wedive.Spring.security.service.AuthService;

// AUTHENTICATION CONTROLLER ONLY

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/join/auth")
public class AuthController {

    private AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    // Build Login REST API
    @PostMapping(value = {"/login", "/signin"})
    public ResponseEntity<JWTAuthResponse> login(@RequestBody LoginDto loginDto){
           	
    	String token = authService.login(loginDto);

        JWTAuthResponse jwtAuthResponse = new JWTAuthResponse();
        jwtAuthResponse.setUsername(loginDto.getUsername());
        jwtAuthResponse.setAccessToken(token);

        return ResponseEntity.ok(jwtAuthResponse);
    }

    // Build Register REST API
    @PostMapping(value = {"/register", "/signup"})
    public ResponseEntity<?> register(@RequestBody RegisterDto registerDto){
    	RegisterResponse response = authService.register(registerDto);
        return new ResponseEntity<RegisterResponse>(response, HttpStatus.CREATED);
    }
    
}
