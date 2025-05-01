package univesp.ferias_hub.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.OncePerRequestFilter;
import univesp.ferias_hub.services.JwtService;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtService jwtService;

    public SecurityConfig(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authz -> authz
                        .requestMatchers("/v3/api-docs/**", "/swagger-ui/**").permitAll()
                        .requestMatchers("/auth/login").permitAll()
                        /*
                        //Regras para Adm ou RH
                        .requestMatchers("/user", "POST", "GET").hasAnyRole("Administrador", "RH")
                        .requestMatchers("/ferias/{id}", "PATCH").hasAnyRole("Administrador", "RH")

                        //Regras para Geral (qualquer usuário autenticado)
                        .requestMatchers("/user/**","/ferias/**").authenticated()
                        //.anyRequest().authenticated()*/
                        .requestMatchers("/user/**", "/ferias/**").permitAll()
                )
                .csrf(AbstractHttpConfigurer::disable)
                //.addFilterBefore(authenticationFilter(), UsernamePasswordAuthenticationFilter.class)
         ;
        return http.build();
    }

    public OncePerRequestFilter authenticationFilter() {
        return new OncePerRequestFilter() {
            @Override
            protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
                String authorizationHeader = request.getHeader("Authorization");

                if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
                    String token = authorizationHeader.substring(7);
                    if (jwtService.validateToken(token)) {
                        String userId = jwtService.getSubjectFromToken(token);
                        List<String> rolesStr = jwtService.getRolesFromToken(token);
                        List<SimpleGrantedAuthority> authorities = rolesStr.stream()
                                .map(SimpleGrantedAuthority::new)
                                .collect(Collectors.toList());

                        Authentication authentication = new UsernamePasswordAuthenticationToken(userId, null, authorities);
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    } else {
                        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                        return;
                    }
                }
                filterChain.doFilter(request, response);
            }
        };
    }
}