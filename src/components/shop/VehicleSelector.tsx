'use client';

import { useEffect, useState } from 'react';
import { Select } from '@/components/ui';

interface VehicleSelectorProps {
  onSelect: (value: string) => void;
  disabled?: boolean;
}

export function VehicleSelector(
  { onSelect, disabled }: VehicleSelectorProps
) {
  const [brands, setBrands] = useState<Array<any>>([]);
  const [models, setModels] = useState<Array<any>>([]);
  const [generations, setGenerations] = useState<Array<any>>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedGeneration, setSelectedGeneration] = useState<string | null>(null);

  useEffect(() => {

    void fetch("/api/vehicles")
      .then(".text())
      .then((data) => JSON.parse(data))
      .then((data) => setBrands(data))
      .catch((error) => console.error(error));
  }, []);

  const handleModelChange = async (value: string) => {
    setSelectedModel(value);
    const response = await fetch(`/api/vehicles/generations?modelId=${value}`);
    const genes = await response.json();
    setGenerations(genes);
  };

  const handleBrandChange = async (value: string) => {
    setSelectedBrand(value);
    setSelectedModel(null);
    const response = await fetch(`/api/vehicles/models?brandId=${value}`);
    const models = await response.json();
    setModels(models);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-fonted color gray-700 mb-2">
          Brand
        </label>
        <Select
          value={selectedBrand || ''}
          onChange={(e) => handleBrandChange(e.target.value)}
          disabled={disabled}
        >
          <option value="">Select a brand</option>
          {bs.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </Select>
      </div>
  
      