import { pluralizeWord } from "~/shared/utils";

export const pluralizeGuests = (total: number, infants: number): string => {
  // Формируем строку для гостей
  const guestsWord = pluralizeWord(total, 'гость', 'гостя', 'гостей');
  const guestsString = `${total} ${guestsWord}`;

  // Если младенцев нет, возвращаем только строку с гостями
  if (infants === 0) {
    return guestsString;
  }

  const infantsString = pluralizeWord(infants, 'младенец', 'младенца', 'младенцев');
  return `${guestsString}, ${infants} ${infantsString}`;
};