import { useState } from "react";
 
export default function AddProductPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [page, setPage] = useState("");
 
  const handleSubmit = async () => {
    const product = { title, description, price, stock, page };
 
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
 
    const data = await res.json();
    alert(data.message);
  };
 
  return (
<div style={{ padding: "20px" }}>
<h1>Add Product</h1>
 
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /><br />
<textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} /><br />
<input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} /><br />
<input type="number" placeholder="Stock" value={stock} onChange={e => setStock(e.target.value)} /><br />
 
      <select value={page} onChange={e => setPage(e.target.value)}>
<option value="">Select Page</option>
<option value="architecture">Architecture</option>
<option value="office-chair">Office Chair</option>
<option value="dining-chair">Dining Chair</option>
<option value="sofa-set">Sofa Set</option>
<option value="shop">Shop</option>
</select><br /><br />
 
      <button onClick={handleSubmit}>Add Product</button>
</div>
  );
}