package com.projetofinal.pana.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetofinal.pana.entities.Produto;
import com.projetofinal.pana.repositories.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository repository;

	@Transactional(readOnly = true)
	public List<Produto> findAll() {
		List<Produto> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public Optional<Produto> findById(Long id) {
		return repository.findById(id);
	}

	@Transactional(readOnly = true)
	public Produto create(Produto produto) {
		return repository.save(produto);
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}
	
	public Produto update(Produto produto) {
		return repository.saveAndFlush(produto);
	}

}
