package com.projetofinal.pana.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetofinal.pana.entities.Ong;
import com.projetofinal.pana.services.OngService;

@RestController
@RequestMapping(value = "/ongs")
@CrossOrigin(origins = "https://refugiopana.netlify.app/")
public class OngController {
	
	@Autowired
	OngService service;

	@GetMapping
	public List<Ong> findAll() {
		return service.findAll();
	}

	@GetMapping(value = "/{id}")
	public Optional<Ong> findById(@PathVariable Long id) {
		Optional<Ong> ongId = service.findById(id);
		return ongId;
	}

	@PostMapping
	public Ong create(@RequestBody Ong ong) {
		return service.create(ong);
	}

	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
	
	@PutMapping  
    public Ong update(@RequestBody Ong ong) {
        return service.update(ong);
    }

}