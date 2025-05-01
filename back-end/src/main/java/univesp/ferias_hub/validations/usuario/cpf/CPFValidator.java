package univesp.ferias_hub.validations.usuario.cpf;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class CPFValidator implements ConstraintValidator<CPFValido, String> {

    @Override
    public boolean isValid(String cpf, ConstraintValidatorContext context) {
        if (cpf == null) {
            return false;
        }
        cpf = cpf.replaceAll("[^\\d]", ""); // Remove pontos, traços

        if (cpf.length() != 11) {
            return false;
        }

        // Regras básicas de CPF inválido
        if (cpf.matches("(\\d)\\1{10}")) {
            return false; // exemplo: 111.111.111-11
        }

        return validarDigitosCPF(cpf);
    }

    private boolean validarDigitosCPF(String cpf) {
        try {
            int soma = 0;
            for (int i = 0; i < 9; i++) {
                soma += (cpf.charAt(i) - '0') * (10 - i);
            }
            int digito1 = 11 - (soma % 11);
            digito1 = (digito1 >= 10) ? 0 : digito1;

            soma = 0;
            for (int i = 0; i < 10; i++) {
                soma += (cpf.charAt(i) - '0') * (11 - i);
            }
            int digito2 = 11 - (soma % 11);
            digito2 = (digito2 >= 10) ? 0 : digito2;

            return (digito1 == (cpf.charAt(9) - '0')) && (digito2 == (cpf.charAt(10) - '0'));
        } catch (Exception e) {
            return false;
        }
    }
}
