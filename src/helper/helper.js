const shortText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category === category);
  return filteredProducts;
};

const createQuery = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const initalQuery = (searchParams) => {
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const query = {};
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumQuantity = (products) => {
  return products.reduce((acc, cur) => acc + cur.quantity, 0);
};

const sumPrice = (products) => {
  return products
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
};

const productQuantity = (state, id) => {
  const index = state.itemSelected.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.itemSelected[index].quantity;
  }
};

export {
  shortText,
  searchProducts,
  filterProducts,
  createQuery,
  initalQuery,
  sumPrice,
  sumQuantity,
  productQuantity,
};
