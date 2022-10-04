// Lấy dữ liệu
export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Lưu dữ liệu
export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Xóa dữ liệu
export const deleteFromStorage = (key) => {
  localStorage.removeItem(key);
};
