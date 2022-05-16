package com.skilldistillery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.Opening;



public interface OpeningRepository extends JpaRepository<Opening, Integer> {
	
	List<Opening> findByNameLike(String keyword);
	

}
