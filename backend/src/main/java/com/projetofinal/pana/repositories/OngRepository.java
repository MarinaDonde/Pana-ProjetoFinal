package com.projetofinal.pana.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetofinal.pana.entities.Ong;

@Repository
public interface OngRepository extends JpaRepository<Ong, Long> {

}
