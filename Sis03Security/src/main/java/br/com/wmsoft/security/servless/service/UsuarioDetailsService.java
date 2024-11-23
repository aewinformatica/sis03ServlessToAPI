package br.com.wmsoft.security.servless.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.wmsoft.security.servless.model.Usuario;
import br.com.wmsoft.security.servless.repository.UsuarioRepository;

@Service
public class UsuarioDetailsService implements UserDetailsService {
    @Autowired
    private UsuarioRepository usuarioRepository;
    
	@Autowired
	private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByUsername(username);
        
        if (usuario == null) {
            throw new UsernameNotFoundException("Usuário não encontrado");
        }
        System.out.println(usuario.getUsername());
        System.out.println(usuario.getPassword());
        
        return User.withUsername(usuario.getUsername())
                   .password(usuario.getPassword())
                   .roles(usuario.getRole())
                   .passwordEncoder(password -> passwordEncoder.encode(password))
                   .build();
    }
}

