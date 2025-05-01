package univesp.ferias_hub.validations.usuario.cpf;

import jakarta.validation.Payload;

public @interface CPFValido {
    String message() default "CPF inválido";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
