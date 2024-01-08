const categoryColorMap = new Map();

categoryColorMap.set('Personal Projects', 'blue');
categoryColorMap.set('Clients', 'green');
categoryColorMap.set('Competitions', 'lime');

const getCategoryColor = (category) => {
    return categoryColorMap.get(category)
};

export default getCategoryColor;