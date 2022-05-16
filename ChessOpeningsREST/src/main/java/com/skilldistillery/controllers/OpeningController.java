package com.skilldistillery.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Opening;
import com.skilldistillery.services.OpeningService;

@RequestMapping("api")
@RestController
public class OpeningController {

	@Autowired
	OpeningService serv;

	@GetMapping("index")
	public List<Opening> index() {
		return serv.index();
	}

	@PostMapping("openings")
	public Opening addOpening(HttpServletResponse resp, @RequestBody Opening opening) {
		Opening newOpening = serv.create(opening);
		if (newOpening != null) {
			resp.setStatus(201);
		}
		return newOpening;
	}

	@PutMapping("opening/{id}")
	public Opening updateFilm(@RequestBody Opening opening, @PathVariable int id) {
		return serv.update(opening, id);
	}

	@DeleteMapping("openings/{id}")
	public void deleteOpening(@PathVariable int id) {
		serv.delete(id);
	}

	@GetMapping("posts/search/{keyword}")
	public List<Opening> searchByPriceRange(@PathVariable String keyword) {
		return serv.searchPostsKeyword(keyword);
	}
	
	@GetMapping("openings/{id}")
	public Opening show(HttpServletResponse resp, @PathVariable int id) {
		Opening film = serv.findById(id);
		if(film == null) {
			resp.setStatus(404);
			
		}
		
		return film;
		
	}
}
