package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Opening;
import com.skilldistillery.repositories.OpeningRepository;

@Service
public class OpeningServiceImpl implements OpeningService {

	@Autowired
	OpeningRepository repo;

	@Override
	public List<Opening> index() {
		return repo.findAll();
	}

	@Override
	public Opening create(Opening opening) {
		repo.saveAndFlush(opening);
		return opening;

	}

	@Override
	public void delete(int id) {
		repo.deleteById(id);

	}

	@Override
	public Opening update(Opening opening, int id) {

		if (repo.existsById(id)) {
			opening.setId(id);
			return repo.save(opening);
		}
		return null;
	}

	@Override
	public List<Opening> searchPostsKeyword(String keyword) {
		keyword = "%" + keyword + "%";
		return repo.findByNameLike(keyword);
	}
	
	@Override
	public Opening findById(int id) {
		Optional<Opening> op = repo.findById(id);
		Opening f = null;
		if(op.isPresent()) {
			f = op.get();
		}
		return f;
	}
}
