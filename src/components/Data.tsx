export const Data = () => {
  const date = new Date();
  const today = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const monthNames: string[] | number = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return (
    <p className="text-txt-menu-color font-light text-sm m-5">
      {today} - {monthNames[currentMonth]}, {currentYear}
    </p>
  );
};
