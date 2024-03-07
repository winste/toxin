interface IItem {
  name: string;
  value: number;
}

export const useGuestsStore = defineStore('dropdown', {
  state: () => ({
    list: [] as Array<IItem>,
  }),
  actions: {
    setGuests(list) {
      this.list = list;
    },

    resetValues() {
      this.list.forEach((item) => {
        item.value = 0;
      });
    },

    increaseValue(fieldName: string) {
      this.list.forEach((item) => {
        if (item.name === fieldName) item.value += 1;
      });
    },

    decreaseValue(fieldName: string) {
      this.list.forEach((item) => {
        if (item.name === fieldName && item.value > 0) item.value -= 1;
      });
    },
  },
});
