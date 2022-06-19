import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim().length >= 3) {
      onAddCategory(searchTerm.trim());
      return setSearchTerm('');
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    setSearchTerm(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Agrega una categoria'
        className='mb-5'
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};
