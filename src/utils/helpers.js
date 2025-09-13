export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US');
};

export const calculateTotalItems = (items) => {
    return items.length;
};

export const findItemById = (items, id) => {
    return items.find(item => item.id === id);
};