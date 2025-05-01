package univesp.ferias_hub.domain.feria.exceptions;

public class FeriaNaoExisteException extends RuntimeException{
    public FeriaNaoExisteException(String message){
        super(message);
    }
}
