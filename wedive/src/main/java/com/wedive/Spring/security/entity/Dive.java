package com.wedive.Spring.security.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wedive.Spring.security.enums.Current;
import com.wedive.Spring.security.enums.DiveType;
import com.wedive.Spring.security.enums.GasMix;
import com.wedive.Spring.security.enums.Judgment;
import com.wedive.Spring.security.enums.TankType;
import com.wedive.Spring.security.enums.Visibility;
import com.wedive.Spring.security.enums.WaterTaste;
import com.wedive.Spring.security.enums.WaterType;
import com.wedive.Spring.security.enums.Waves;
import com.wedive.Spring.security.enums.Weather;
import com.wedive.Spring.security.enums.Wetsuit;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "dives")
public class Dive {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
	private String name;
    @Column(nullable = false)
	private LocalDate date;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
	private DiveType type;
    @Column(nullable = false)
	private Double maxDepth;
    @Column(nullable = false)
	private Integer diveTime;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
	private WaterType waterType;
    @Enumerated(EnumType.STRING)
	private WaterTaste waterTaste;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
	private Weather weather;
    @Column(nullable = false)
	private Double airTemperature;
    @Column(nullable = false)
	private Double surfaceTemperature;
    @Column(nullable = false)
	private Double deepTemperature;
    @Enumerated(EnumType.STRING)
	private Visibility visibility;
    @Enumerated(EnumType.STRING)
	private Waves waves;
    @Enumerated(EnumType.STRING)
	private Current current;
    @Enumerated(EnumType.STRING)
	private Wetsuit suit;
	@Column(nullable = false)
	private Integer ballast;
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private TankType tank;
	@Column(nullable = false)
	private Integer tankSize;
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private GasMix gasMix;
	@Column(nullable = false)
	private Integer initialPressure;
	@Column(nullable = false)
	private Integer finalPressure;
	@Column(nullable = false)
	private Integer usedAir;
	@Enumerated(EnumType.STRING)
	private Judgment judgement;
	private String notes;
	private String buddy;
	@Column(nullable = false)
	private Boolean certified = false;
	@JsonIgnore
	@ManyToOne(optional = false)
	@JoinColumn(name = "user_id")
	private User user;
}


