package com.wedive.Spring.security.configuration;


import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import com.wedive.Spring.security.security.JwtAuthenticationEntryPoint;
import com.wedive.Spring.security.security.JwtAuthenticationFilter;


@Configuration
@EnableMethodSecurity
public class SecurityConfig {

    private UserDetailsService userDetailsService;

    private JwtAuthenticationEntryPoint authenticationEntryPoint;

    private JwtAuthenticationFilter authenticationFilter;

    public SecurityConfig(UserDetailsService userDetailsService,
                          JwtAuthenticationEntryPoint authenticationEntryPoint,
                          JwtAuthenticationFilter authenticationFilter){
        this.userDetailsService = userDetailsService;
        this.authenticationEntryPoint = authenticationEntryPoint;
        this.authenticationFilter = authenticationFilter;
    }

    @Bean
    public static PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    	//http.cors().and().csrf().disable() // -> deprecato
    	 http.cors(cors -> cors.configurationSource(request ->{
             CorsConfiguration config = new CorsConfiguration();
             config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
             config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
             config.setAllowedHeaders(Collections.singletonList("*"));
             return config;
         }))
    	.cors(cors -> cors.disable())
    	.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests((authorize) -> authorize
        		.requestMatchers(HttpMethod.GET, "/join/**").permitAll()
        		.requestMatchers(HttpMethod.GET, "/users/**").permitAll()
        		.requestMatchers(HttpMethod.GET, "/users/getbyuser/**").permitAll()
        		.requestMatchers("/dives/get/**").permitAll()
        		.requestMatchers("/dives/add/**").permitAll()
        		.requestMatchers("/dives/delete/**").permitAll()
                .requestMatchers("/join/auth/**").permitAll()
                .requestMatchers("/users/getbyuser/**").permitAll()
                .requestMatchers("/users/put/**").permitAll()
                .anyRequest().authenticated())
        .exceptionHandling( exception -> exception
                .authenticationEntryPoint(authenticationEntryPoint)
        ).sessionManagement( session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        );

    	http.addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);

    	return http.build();
    }

}
