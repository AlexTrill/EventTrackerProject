package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.Opening;

public interface OpeningService {
	List<Opening> index();
	Opening create(Opening opening);
	Opening update(Opening opening, int id);
	 void delete (int id);

}
