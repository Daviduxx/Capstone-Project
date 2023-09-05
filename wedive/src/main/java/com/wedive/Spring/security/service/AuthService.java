package com.wedive.Spring.security.service;

import com.wedive.Spring.security.payload.LoginDto;
import com.wedive.Spring.security.payload.RegisterDto;
import com.wedive.Spring.security.payload.RegisterResponse;

public interface AuthService {
    
	String login(LoginDto loginDto);
	RegisterResponse register(RegisterDto registerDto);
    
}
