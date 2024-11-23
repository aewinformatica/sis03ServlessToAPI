package br.com.wmsoft.security.servless.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
		
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests(
				(requests) -> requests.requestMatchers("/css/**").permitAll()
				.anyRequest().authenticated())
				.formLogin((form) -> form.loginPage("/login")
				.defaultSuccessUrl("/", true)
				.permitAll()).logout((logout) -> logout.permitAll());

		return http.build();
	}
}
