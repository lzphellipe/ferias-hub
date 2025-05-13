const formatarData = (data) => {
  const dataObj = new Date(data);
  const dia = dataObj.getDate();
  const mes = dataObj.getMonth() + 1;
  const ano = dataObj.getFullYear();
  return `${dia}/${mes}/${ano}`;
};
export { formatarData };
