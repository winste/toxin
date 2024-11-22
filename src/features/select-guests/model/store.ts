import { guestsList, type IGuests } from '~/entities/guest';

export const useGuestsStore = defineStore('guests-store', () => {
  // state
  const list = ref<IGuests[]>(guestsList);
  const totalCount = ref<number>(0);
  const lowerLimit: number = 0;
  const upperLimit: number = 5;

  const currentField = (key: string): IGuests => list.value.find(item => item.key === key)!;
  const isLowerLimit = (key: string): boolean => currentField(key).count === lowerLimit;
  const isUpperLimit = (key: string): boolean => currentField(key).count === upperLimit;

  // actions
  const increaseGuests = (key: string): void => {
    const field = currentField(key) as IGuests;
    if (field.count < upperLimit) {
      field.count += 1;
      if (key === 'babies') totalCount.value += 1;
    }
  };

  const decreaseGuests = (key: string): void => {
    const field = currentField(key) as IGuests;
    if (field.count > lowerLimit) {
      field.count -= 1;
      if (key === 'babies') totalCount.value -= 1;
    }
  };

  const resetGuests = (): void => {
    list.value = list.value.map(guest => ({
      ...guest,
      count: 0,
    }));

    totalCount.value = 0;
  };

  // getters
  const guests = computed(() => list.value);
  const guestsCount = computed(() => list.value
    .filter(item => item.key !== 'babies')
    .reduce((initialCount, currentGuests) => initialCount + currentGuests.count, totalCount.value));
  const isNotEmpty = computed(() => guestsCount.value > 0);
  const babiesCount = computed(() => list.value.find(item => item.key === 'babies')?.count);

  return {
    guests,
    guestsCount,
    isNotEmpty,
    babiesCount,
    isLowerLimit,
    isUpperLimit,
    increaseGuests,
    decreaseGuests,
    resetGuests,
  };
});
