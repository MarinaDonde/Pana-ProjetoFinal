package com.pana.projetofinal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pana.projetofinal.entities.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long> {

}
