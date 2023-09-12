package com.wedive.Spring.security.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = "username"),
		@UniqueConstraint(columnNames = "email") })
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String surname;
    @Column(nullable = false)
    private LocalDate birthday;
    @Column(nullable = false, unique = true)
    private String username;
    @Column(nullable = false, unique = true)
    private String email;
    private String phoneNumber;
    @Column(nullable = false)
    private String password; 
    @Column(nullable = false)
    private LocalDateTime date; // data di registrazione
    @Column(nullable = false, unique = true)
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinTable(name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id")
    )
    private Set<Role> roles = new HashSet<>();
  
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;
    @OneToMany
    private Set<Licence> licences = new HashSet<>();
//    @ManyToOne
//    private DivingCenter divingCenter;
    @OneToMany(mappedBy="user", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Dive> dives;
    
    
	public void setName(String name) {
		this.name = name;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public void setBirthday(LocalDate birthday) {
		this.birthday = birthday;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public void setLicences(Set<Licence> licences) {
		this.licences = licences;
	}

    
	//tecnicamente non dovrebbe più servire
//	public void setBirthday(String birthday) {
//		
//		try {
//			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
//			LocalDate localDate = LocalDate.parse(birthday);			
//			
//		} catch(Exception e) {
//			System.out.println("La data inserita non è valida!" + e.getMessage());
//		}	
//	}
	
	public void setDives(Set<Dive> dives) {
		this.dives = dives;
		
	}
//	public void setDivingCenter(DivingCenter divingCenter2) {
//		// TODO Auto-generated method stub
//		
//	}
    
    
}
