package br.com.wmsoft.security.servless.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.wmsoft.security.servless.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
