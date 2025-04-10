package com.br.univesp.feriashub.exception;

public class FeriasNaoEncontradasException extends RuntimeException {
    public FeriasNaoEncontradasException(Long feriasId) {
        super("Férias com ID " + feriasId + " não encontradas.");
    }
}