package com.projetofinal.pana.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetofinal.pana.entities.Ong;
import com.projetofinal.pana.repositories.OngRepository;

@Service
public class OngService {

	@Autowired
	private OngRepository repository;

	@Transactional(readOnly = true)
	public List<Ong> findAll() {
		List<Ong> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public Optional<Ong> findById(Long id) {
		return repository.findById(id);
	}

	@Transactional(readOnly = true)
	public Ong create(Ong ong) {
		return repository.save(ong);
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}
	
	public Ong update(Ong ong) {
		return repository.saveAndFlush(ong);
	}
}
