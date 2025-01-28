package br.com.wmsoft.security.servless.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.wmsoft.security.servless.model.Produto;
import br.com.wmsoft.security.servless.repository.ProdutoRepository;

@RestController
@RequestMapping("api/produto")
public class ProdutoController {
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	@GetMapping
	public List<Produto> getAll(){
		
		return produtoRepository.findAll(); 
	}

}
