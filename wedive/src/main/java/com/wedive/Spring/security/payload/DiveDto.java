package com.wedive.Spring.security.payload;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wedive.Spring.security.entity.Address;
import com.wedive.Spring.security.entity.Dive;
import com.wedive.Spring.security.entity.DivingCenter;
import com.wedive.Spring.security.entity.Licence;
import com.wedive.Spring.security.entity.User;
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
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class DiveDto {
	
	private String name;
	private LocalDate date;
	private DiveType type;
	private Double maxDepth;
	private Integer diveTime;
	private WaterType waterType;
	private WaterTaste waterTaste;
	private Weather weather;
	private Double airTemperature;
	private Double surfaceTemperature;
	private Double deepTemperature;
	private Visibility visibility;
	private Waves waves;
	private Current current;
	private Wetsuit suit;
	private Integer ballast;
	private TankType tank;
	private Integer tankSize;
	private GasMix gasMix;
	private Integer initialPressure;
	private Integer finalPressure;
	private Integer usedAir;
	private Judgment judgement;
	private String notes;
	private String buddy;
}
