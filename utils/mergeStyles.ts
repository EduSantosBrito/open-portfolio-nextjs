type Style = {
  readonly [key: string]: string;
};

export const mergeStyles = (firstStyle: Style, secondStyle: Style): Style => {
  const secondStyleEntries = Object.entries(secondStyle);
  return Object.fromEntries(
    Object.entries(firstStyle).reduce<Array<[string, string]>>(
      (accumulator, [key, value]) => {
        const secondStyleConflicted = secondStyleEntries.find(
          ([entryKey]) => entryKey === key,
        );
        if (secondStyleConflicted) {
          const [, valueConflicted] = secondStyleConflicted;
          return [
            ...accumulator.filter(([accKey]) => accKey !== key),
            [key, `${value} ${valueConflicted}`],
          ];
        }
        return [...accumulator, [key, value]];
      },
      secondStyleEntries,
    ),
  );
};
