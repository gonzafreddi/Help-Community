import { getAllBuys } from "../../redux/actions/action"
import React, { useState, useEffect } from 'react';

export default function StatusBuyFilter({ buys, onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    // Cuando cambian las compras (buys), reiniciar el filtro
    setSelectedFilter('');
  }, [buys]);

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
    onFilterChange(selectedValue);
  };
console.log(selectedFilter)
  const status = buys.map((e) => e.products.status);
  const statusFilter = Array.from(new Set(status));

  return (
    <div>
      <select name="" id="" value={selectedFilter} onChange={handleFilterChange}>
        <option value="">Todos</option>
        {statusFilter.map((e) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}
