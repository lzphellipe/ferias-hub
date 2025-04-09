package com.br.univesp.feriashub.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/public").permitAll()
                        .anyRequest().authenticated()
                )
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/oauth2/authorization/keycloak") // Redireciona para o Keycloak
                )
                .logout(logout -> logout
                        .logoutSuccessUrl("http://localhost:8080/realms/meu-realm/protocol/openid-connect/logout?redirect_uri=http://localhost:8081")
                );
        return http.build();
    }
}