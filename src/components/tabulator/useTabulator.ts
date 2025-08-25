import { useState } from "react";
import type { TabulatorProps } from "./tabulator";
import type { HammockCategory } from "../../common/model";

function useTabulator(props: TabulatorProps) {
  const { dataset } = props;
  const BLOCK = "tabulator";
  const [selectedCategory, setSelectedCategory] = useState<HammockCategory>(
    dataset[0]
  );

  const handleTabClick = (newCategory: HammockCategory) => {
    if (selectedCategory.category !== newCategory.category) {
      setSelectedCategory(newCategory);
    }
  };

  return {
    BLOCK,
    selectedCategory,
    handleTabClick,
  };
}

export default useTabulator;
