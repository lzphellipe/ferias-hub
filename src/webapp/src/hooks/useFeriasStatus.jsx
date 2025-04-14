import { useEffect, useState } from "react";

export default function useFeriasStatus(user) {
  const [statusFerias, setStatusFerias] = useState({
    status: "carregando",
    mensagem: "Carregando...",
    ciclo: "desconhecido",
    diasRestantes: null,
    cor: "gray",
  });

  useEffect(() => {
    if (!user?.dataAdmissao) return;

    const resultado = calcularStatusFerias(user);
    setStatusFerias(resultado);
  }, [user]);

  return statusFerias;
}

// Função utilitária para parse de data no formato "DD/MM/AAAA"
function formatDate(dateString) {
  if (!dateString) return null;
  const [dia, mes, ano] = dateString.split("/");
  return new Date(ano, mes - 1, dia);
}

// Função utilitária para calcular o status das férias
function calcularStatusFerias(user) {
  const UM_ANO_EM_DIAS = 365;
  const MS_POR_DIA = 1000 * 60 * 60 * 24;
  const DIAS_DE_FERIAS_POR_ANO = 30;
  const hoje = new Date();

  const admissao = formatDate(user.dataAdmissao);
  const ferias = user.ferias || [];

  if (!admissao || isNaN(admissao.getTime())) {
    return {
      status: "verificar",
      mensagem: "ℹ️ Data de admissão inválida.",
      ciclo: "desconhecido",
      diasRestantes: null,
      cor: "gray",
    };
  }

  // Cálculo dos dias tirados
  const diasTirados = ferias.reduce((acc, periodo) => {
    const inicio = formatDate(periodo.dataInicio);
    const fim = formatDate(periodo.dataFim);

    if (!inicio || !fim || isNaN(inicio) || isNaN(fim)) return acc;

    const dias = Math.round((fim.getTime() - inicio.getTime()) / MS_POR_DIA);
    return acc + dias;
  }, 0);

  const inicioCiclo = new Date(
    admissao.getTime() + UM_ANO_EM_DIAS * MS_POR_DIA
  );

  const totalDeDiasDesdeCiclo = Math.round((hoje - inicioCiclo) / MS_POR_DIA);
  const totalCiclos =
    totalDeDiasDesdeCiclo >= UM_ANO_EM_DIAS
      ? Math.ceil(totalDeDiasDesdeCiclo / UM_ANO_EM_DIAS)
      : 0;
  const diasProporcionais = Math.round(totalCiclos * DIAS_DE_FERIAS_POR_ANO);

  const diasRestantes = diasProporcionais - diasTirados;

  // 🧪 Verificação de status
  let status = "verificar";
  let mensagem = `ℹ️ Não foi possível calcular o status de férias.`;
  let ciclo = "desconhecido";
  let cor = "gray";

  if (diasRestantes > 30) {
    status = "urgente";
    mensagem = `🚨 ${user.name} está com férias vencidas há mais de 1 ano!`;
    ciclo = "vencido";
    cor = "red";
  } else if (diasRestantes > 0) {
    status = "atencao";
    mensagem = `⚠️ ${user.name} tem ${diasRestantes} dias de férias restantes!`;
    ciclo = "andamento";
    cor = "orange";
  } else if (ferias.length === 0 && totalDeDiasDesdeCiclo < 0) {
    status = "ok";
    mensagem = `ℹ️ ${user.name} ainda está no primeiro ano de trabalho. Ciclo de férias ainda não começou.`;
    ciclo = "em progresso";
    cor = "blue";
  } else if (diasRestantes === 0) {
    status = "ok";
    mensagem = `✅ ${user.name} não tem férias restantes.`;
    ciclo = "completo";
    cor = "green";
  }

  return {
    status,
    mensagem,
    ciclo,
    diasRestantes: diasRestantes >= 0 ? diasRestantes : 0,
    cor,
  };
}
