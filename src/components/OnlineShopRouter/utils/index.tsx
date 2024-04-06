export const convertOptionSelect = (data: any) => {
  if (!data || data.length === 0) return [];

  return data.map((item: any) => {
    return {
      value: item.id || item._id,
      label: item.name,
    };
  });
};
