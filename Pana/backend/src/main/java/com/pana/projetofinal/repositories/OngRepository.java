package com.pana.projetofinal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pana.projetofinal.entities.Ong;

@Repository
public interface OngRepository extends JpaRepository<Ong, Long> {

}
