package com.br.univesp.feriashub.exception;

public class OperadorNaoEncontradoException extends RuntimeException {
    public OperadorNaoEncontradoException(Long operadorId) {
        super("Operador com ID " + operadorId + " não encontrado.");
    }
}