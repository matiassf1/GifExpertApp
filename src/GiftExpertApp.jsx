import { useState } from 'react';
import {AddCategory, GifGrid} from './components';

const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (!categories.includes(newCategory)) {
      return setCategories([newCategory, ...categories]);
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category) => {
        return <GifGrid key={category + ' category'} categoryName={category} />;
      })}
    </>
  );
};

export default GiftExpertApp;
