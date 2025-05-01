package univesp.ferias_hub.utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.NoArgsConstructor;
import univesp.ferias_hub.dto.feria.FeriaResponseDTO;
import univesp.ferias_hub.domain.usuario.Usuario;
import univesp.ferias_hub.dto.feria.FeriasStatusDTO;

import java.time.LocalDate;
import java.util.List;

import static java.time.temporal.ChronoUnit.DAYS;
@NoArgsConstructor
public final class FeriasCalculator {

    private static final int UM_ANO_EM_DIAS = 365;
    private static final int DIAS_FERIAS_POR_ANO = 30;

    private static final ObjectMapper mapper = new ObjectMapper();

    public static int calcular (Usuario usuario, List<FeriaResponseDTO> ferias){

        LocalDate admissao = usuario.getDataAdmissao();
        LocalDate hoje = LocalDate.now();

        int diasTirados = ferias.stream()
                .filter(f -> f.dataInicio() != null && f.dataFim() != null)
                .mapToInt(f -> (int) DAYS.between(f.dataInicio(), f.dataFim()))
                .sum();

        LocalDate inicioCiclo = admissao.plusDays(UM_ANO_EM_DIAS);
        long diasDesdeCiclo = DAYS.between(inicioCiclo, hoje);
        long ciclos = diasDesdeCiclo >= UM_ANO_EM_DIAS
                ? (long) Math.ceil((double) diasDesdeCiclo / UM_ANO_EM_DIAS)
                : 0;

        int diasProporcionais = (int) (ciclos * DIAS_FERIAS_POR_ANO);
        int diasRestantes = diasProporcionais - diasTirados;

        return diasRestantes;
    }

    public static ObjectNode feriasStatusJson(int diasRestantes, String nome) {
        ObjectNode json = mapper.createObjectNode();

        if (diasRestantes > 30) {
            json.put("status", "urgente");
            json.put("mensagem", "🚨 %s está com férias vencidas há mais de 1 ano!".formatted(nome));
            json.put("progresso", "vencido");
            json.put("diasRestantes", diasRestantes);
            json.put("cor", "red");
            return json;
        }

        if (diasRestantes > 0) {
            json.put("status", "atencao");
            json.put("mensagem", "⚠️ %s tem %d dias de férias restantes!".formatted(nome, diasRestantes));
            json.put("progresso", "andamento");
            json.put("diasRestantes", diasRestantes);
            json.put("cor", "orange");
            return json;
        }

        if (diasRestantes == 0) {
            json.put("status", "ok");
            json.put("mensagem", "ℹ️ %s ainda está no primeiro ano de trabalho.".formatted(nome));
            json.put("progresso", "em progresso");
            json.put("diasRestantes", 0);
            json.put("cor", "blue");
            return json;
        }

        json.put("status", "ok");
        json.put("mensagem", "✅ %s não tem férias restantes.".formatted(nome));
        json.put("progresso", "completo");
        json.put("diasRestantes", 0);
        json.put("cor", "green");
        return json;
    }
}

/*
public final class FeriasCalculator {

    private static final int UM_ANO_EM_DIAS = 365;
    private static final int DIAS_FERIAS_POR_ANO = 30;

    private FeriasCalculator() {}   // previne instância

    public static FeriasStatusDTO calcular(Usuario usuario, List<FeriaResponseDTO> ferias) {

        LocalDate admissao = usuario.getDataAdmissao();
        if (admissao == null) {
            return dto("verificar", "ℹ️ Data de admissão inválida.",
                    "desconhecido", null, "gray");
        }

        LocalDate hoje = LocalDate.now();

        int diasTirados = ferias.stream()
                .filter(f -> f.dataInicio() != null && f.dataFim() != null)
                .mapToInt(f -> (int) DAYS.between(f.dataInicio(), f.dataFim()))
                .sum();

        LocalDate inicioCiclo = admissao.plusDays(UM_ANO_EM_DIAS);
        long diasDesdeCiclo = DAYS.between(inicioCiclo, hoje);
        long ciclos = diasDesdeCiclo >= UM_ANO_EM_DIAS
                ? (long) Math.ceil((double) diasDesdeCiclo / UM_ANO_EM_DIAS)
                : 0;

        int diasProporcionais = (int) (ciclos * DIAS_FERIAS_POR_ANO);
        int diasRestantes = diasProporcionais - diasTirados;

        // regras…
        if (diasRestantes > 30) {
            return dto("urgente",
                    "🚨 %s está com férias vencidas há mais de 1 ano!".formatted(usuario.getNome()),
                    "vencido", diasRestantes, "red");
        }
        if (diasRestantes > 0) {
            return dto("atencao",
                    "⚠️ %s tem %d dias de férias restantes!".formatted(usuario.getNome(), diasRestantes),
                    "andamento", diasRestantes, "orange");
        }
        if (ferias.isEmpty() && diasDesdeCiclo < 0) {
            return dto("ok",
                    "ℹ️ %s ainda está no primeiro ano de trabalho.".formatted(usuario.getNome()),
                    "em progresso", 0, "blue");
        }
        return dto("ok",
                "✅ %s não tem férias restantes.".formatted(usuario.getNome()),
                "completo", 0, "green");
    }

    private static FeriasStatusDTO dto(String status, String msg,
                                       String ciclo, Integer dias, String cor) {
        return new FeriasStatusDTO(status, msg, ciclo, dias != null ? Math.max(dias,0) : null, cor);
    }
}
*/