const products = [
  {
    productName: "Samsung S24 Ultramen",
    description: "Smartphone flagship dengan kamera berkualitas tinggi",
    price: 18000000,
    category: "Elektronik",
    rating: 4.8,
    productType: [
      { color: "black", type: "12/256GB" },
      { color: "white", type: "12/512GB" },
    ],
  },
  {
    productName: "Laptop Gemink",
    description: "Laptop ringan dan performa tinggi untuk bekerja dan bermain",
    price: 12000000,
    category: "Elektronik",
    rating: 4.8,
    productType: [
      { color: "black mamba", type: "8/512GB" },
      { color: "silver human", type: "16/1TB" },
    ],
  },
  {
    productName: "In Ear Monitor 64 Audio U4S",
    description:
      "In Ear Monitor berspesifikasi tinggi dengan tonalitas yang mantap",
    price: 15000000,
    category: "Elektronik",
    rating: 5.0,
    productType: [{ color: "Dark Blue", type: "Non Mic" }],
  },
  {
    productName: "Hoodie Sharks Yellow",
    description: "Hoodie bahan premium, tersedia berbagai ukuran",
    price: 259000,
    category: "Pakaian",
    rating: 5.0,
    productType: [
      { color: "Yellow", type: "M" },
      { color: "Yellow", type: "L" },
      { color: "Yellow", type: "XL" },
    ],
  },
  {
    productName: "Jacket Jeans Levis Washed Blue",
    description: "Jacket bahan premium, tersedia berbagai ukuran",
    price: 600000,
    category: "Pakaian",
    rating: 4.5,
    productType: [
      { color: "Washed Blue", type: "M" },
      { color: "Washed Blue", type: "L" },
      { color: "Washed Blue", type: "XL" },
    ],
  },
];

const Categoryproduct = products.map((item) => {
  const elec = item.category.length(item.category === "elektronik");
  console.log(elec);
});
