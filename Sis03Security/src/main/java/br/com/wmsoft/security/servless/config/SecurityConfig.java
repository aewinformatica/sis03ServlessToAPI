package br.com.wmsoft.security.servless.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
		
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests(
					(requests) -> requests.requestMatchers("/api/**")
					.authenticated().anyRequest().permitAll()
				).httpBasic(Customizer.withDefaults())
        .csrf(csrf -> csrf.disable());


		return http.build();
	}
}
