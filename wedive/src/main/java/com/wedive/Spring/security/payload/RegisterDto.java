package com.wedive.Spring.security.payload;

import java.time.LocalDate;
import java.util.Set;

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
public class RegisterDto {
    private String name;
    private String surname;
    private String username;
    private String email;
    private LocalDate birthday;
    private String password;
    // Passaggio di ruoli dal client (facoltativo)
    private Set<String> roles;
}

