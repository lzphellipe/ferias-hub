package univesp.ferias_hub.validations.usuario.senha;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class SenhaForteValidator implements ConstraintValidator<SenhaForte, String>{
    @Override
    public boolean isValid(String senha, ConstraintValidatorContext context) {
        if (senha == null) {
            return false;
        }

        boolean temNumero = senha.matches(".*\\d.*");
        boolean temMaiuscula = senha.matches(".*[A-Z].*");
        boolean tamanhoMinimo = senha.length() >= 8;

        return temNumero && temMaiuscula && tamanhoMinimo;
    }
}
