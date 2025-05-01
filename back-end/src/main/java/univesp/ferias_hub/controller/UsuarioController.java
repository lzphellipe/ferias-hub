package univesp.ferias_hub.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import univesp.ferias_hub.dto.usuario.UsuarioRequestDTO;
import univesp.ferias_hub.dto.usuario.UsuarioResponseDTO;
import univesp.ferias_hub.dto.usuario.UsuarioUpdateDTO;
import univesp.ferias_hub.services.FeriaService;
import univesp.ferias_hub.services.UsuarioService;

import static org.springframework.http.HttpStatus.*;

@RestController
@AllArgsConstructor
@RequestMapping(path = "/user")
public class UsuarioController {

    private final UsuarioService usuarioService;
    private final FeriaService feriaService;

    @PostMapping
    public ResponseEntity<UsuarioResponseDTO> cadastrar(@RequestBody @Valid UsuarioRequestDTO usuarioRequestDTO){
        try {
            UsuarioResponseDTO novoUsuario = usuarioService.criarUsuario(usuarioRequestDTO);
            return new ResponseEntity<>(novoUsuario,CREATED);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping
    public ResponseEntity<?> buscar(@RequestParam(required = false) Integer id) {
        if (id != null) {
            Object usuario = usuarioService.buscarUsuario(id);
            if (usuario != null) {
                return new ResponseEntity<>(usuario, OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } else {
            Object usuarios = usuarioService.buscarAllUsers();
            return new ResponseEntity<>(usuarios, OK);
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> atualizar(@PathVariable Integer id, @RequestBody @Valid UsuarioUpdateDTO body){
        usuarioService.atualizarUsuario(id, body);
        return new ResponseEntity<>(ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> desativar(@PathVariable Integer id) {
        usuarioService.desativarUsuario(id);
        return new ResponseEntity<>(OK);
    }

    @GetMapping("/{id}/status")
    public ResponseEntity<?> status(@PathVariable Integer id){
        ObjectNode status = feriaService.statusFeria(id);
        return new ResponseEntity<>(status,OK);
    }
}
