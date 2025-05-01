package univesp.ferias_hub.controller;

import com.password4j.HashChecker;
import com.password4j.Password;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univesp.ferias_hub.domain.usuario.Usuario;
import univesp.ferias_hub.services.JwtService;
import univesp.ferias_hub.services.UsuarioService;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final JwtService jwtService;
    private final UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
        Usuario usuario = usuarioService.buscarUsuarioPeloId(authRequest.getCod_usuario());

        boolean senhaValida = jwtService.verificarSenha(authRequest.getSenha(), usuario.getSenha());
        if(senhaValida){
            String token = jwtService.generateToken(authRequest.getCod_usuario(), usuario.getCargo().toString());
            return ResponseEntity.ok(new AuthResponse(token));
        }else{
            return ResponseEntity.status(401).body("Senha inválida");
        }
    }

    @Data
    static class AuthRequest {
        private Integer cod_usuario;
        private String senha;
    }

    @Data
    @AllArgsConstructor
    static class AuthResponse {
        private String token;
    }
}
