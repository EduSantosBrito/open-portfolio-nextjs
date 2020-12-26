import { createContext, FC, useContext, useMemo, useState } from 'react';

export enum Categories {
  WEB = 'WEB',
  UI = 'UI',
}

type CategoryState = {
  category: Categories;
  setCategory: (category: Categories) => void;
};

const CategoryContext = createContext<CategoryState>({
  category: Categories.WEB,
  setCategory: () => console.warn('no category provider'),
});

export const useCategory = (): CategoryState => useContext(CategoryContext);

export const CategoryProvider: FC = ({ children }): JSX.Element => {
  const [category, setCategory] = useState<Categories>(Categories.WEB);

  const value: CategoryState = useMemo(() => ({ category, setCategory }), [
    category,
  ]);

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
