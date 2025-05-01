package univesp.ferias_hub.config;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import univesp.ferias_hub.domain.feria.exceptions.DiasInsuficienteException;
import univesp.ferias_hub.domain.feria.exceptions.FeriaNaoExisteException;
import univesp.ferias_hub.domain.usuario.exceptions.UsuarioCampoUnico;
import univesp.ferias_hub.domain.usuario.exceptions.UsuarioDesatiovadoException;
import univesp.ferias_hub.domain.usuario.exceptions.UsuarioNaoEncontradoException;
import univesp.ferias_hub.utils.ErrorResponse;

@ControllerAdvice
public class ExceptionEntityHandler {

    @ExceptionHandler(FeriaNaoExisteException.class)
    public ResponseEntity handleFeriaNaoExiste(FeriaNaoExisteException exception){
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(UsuarioNaoEncontradoException.class)
    public ResponseEntity handleUsuarioNaoEncontrado(UsuarioNaoEncontradoException exception){
        ErrorResponse errorResponse = new ErrorResponse(exception.getMessage());
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(DiasInsuficienteException.class)
    public ResponseEntity handleDiasInsuficiente(DiasInsuficienteException exception){
        ErrorResponse errorResponse = new ErrorResponse(exception.getMessage());
        return ResponseEntity.badRequest().body(errorResponse);
    }
    @ExceptionHandler(UsuarioDesatiovadoException.class)
    public ResponseEntity handleUsuarioDesativado(UsuarioDesatiovadoException exception){
        ErrorResponse errorResponse = new ErrorResponse(exception.getMessage());
        return ResponseEntity.badRequest().body(errorResponse);
    }
    @ExceptionHandler(UsuarioCampoUnico.class)
    public ResponseEntity handleCampoUnico(UsuarioCampoUnico exception){
        ErrorResponse errorResponse = new ErrorResponse(exception.getMessage());
        return ResponseEntity.badRequest().body(errorResponse);
    }
}
