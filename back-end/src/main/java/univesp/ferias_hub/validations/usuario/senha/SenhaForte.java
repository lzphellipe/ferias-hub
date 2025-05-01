package univesp.ferias_hub.validations.usuario.senha;


import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = SenhaForteValidator.class)
@Target({ ElementType.FIELD, ElementType.PARAMETER })
@Retention(RetentionPolicy.RUNTIME)
public @interface SenhaForte {
    String message() default "Senha fraca. A senha deve ter pelo menos 8 caracteres, 1 número e 1 letra maiúscula.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
