package com.projetofinal.pana.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetofinal.pana.entities.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
