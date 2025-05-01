package univesp.ferias_hub.dto.usuario;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import univesp.ferias_hub.model.usuario.ECargo;
import univesp.ferias_hub.validations.usuario.cpf.CPFValido;
import univesp.ferias_hub.validations.usuario.senha.SenhaForte;

import java.time.LocalDate;

public record UsuarioUpdateDTO (

       @Size(min = 2, max = 50, message = "Nome pode ter entre 2 e 50 caracteres.")
       String nome,


       @Email(message = "Email inválido")
       String email,


       @SenhaForte(message = "Senha não é forte o suficiente")
       String senha,


       @CPFValido(message = "CPF inválido")
       String cpf,


       ECargo cargo
       ){

}
