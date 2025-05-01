package univesp.ferias_hub.dto.feria;

public record FeriasStatusDTO(
    String status,        // "ok", "atencao", "urgente", "verificar"
    String mensagem,
    String ciclo,         // "em progresso", "andamento", "vencido", "completo", "desconhecido"
    Integer diasRestantes,
    String cor            // "blue", "orange", "red", "green", "gray"
) {}

