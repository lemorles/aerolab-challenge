const URL = 'https://coding-challenge-api.aerolab.co/products';

const getProducts = async (req, res) => {
  try {
    const data = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
      },
    });
    const products = await data.json();

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default getProducts;
