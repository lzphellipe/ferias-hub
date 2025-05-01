package univesp.ferias_hub.controller;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.*;

import univesp.ferias_hub.dto.feria.FeriaRequestDTO;
import univesp.ferias_hub.dto.feria.FeriaResponseDTO;
import univesp.ferias_hub.dto.feria.FeriaUpdateDTO;
import univesp.ferias_hub.services.FeriaService;

@RestController
@AllArgsConstructor
@RequestMapping(path = "/ferias")
public class FeriaController {

    private final FeriaService feriaService;

    @PostMapping
    public ResponseEntity<FeriaResponseDTO> cadastrar(@RequestBody @Valid FeriaRequestDTO feriaDTO){
        FeriaResponseDTO novaFeria = feriaService.criarFeria(feriaDTO);
        return new ResponseEntity<>(novaFeria,CREATED);
    }

    @GetMapping
    public ResponseEntity<?> buscar(@RequestParam(required = false) Integer id, @RequestParam(required = false) Integer idUser) {
        Object feria;

        if(id != null){
            feria = feriaService.consultarEspecifica(id);
            return new ResponseEntity<>(feria,OK);
        }else if(idUser != null){
            feria = feriaService.consultarFeriasUsuario(idUser);
            return new ResponseEntity<>(feria,OK);
        }

        return new ResponseEntity<>(NOT_FOUND);
    }


    @PatchMapping("/{id}")
    public ResponseEntity<?> atualizar(@PathVariable Integer id, @RequestBody @Valid FeriaUpdateDTO body){

        feriaService.alterarInfoFerias(id, body);
        return new ResponseEntity<>(ACCEPTED);
    }


}
