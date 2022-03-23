package com.projetofinal.pana.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetofinal.pana.entities.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long>{

}
