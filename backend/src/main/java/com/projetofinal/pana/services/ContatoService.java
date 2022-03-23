package com.projetofinal.pana.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetofinal.pana.entities.Contato;
import com.projetofinal.pana.repositories.ContatoRepository;

@Service
public class ContatoService {

	@Autowired
	private ContatoRepository repository;

	@Transactional(readOnly = true)
	public List<Contato> findAll() {
		List<Contato> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public Optional<Contato> findById(Long id) {
		return repository.findById(id);
	}

	@Transactional(readOnly = true)
	public Contato create(Contato contato) {
		return repository.save(contato);
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}
	
	public Contato update(Contato contato) {
		return repository.saveAndFlush(contato);
	}
}