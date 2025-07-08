import React from 'react';
import Header from './Header';

function App() {
  const products = [
    {
      name: "Brownies",
      price: "$3.50 each",
      image: "/images/brownies-resize-7-1200-1097x1536.jpg",
      description: "Thick, chewy, chocolatey squares topped with gooey chips.",
    },
    {
      name: "Mini Quiche",
      price: "$2.00 each",
      image: "/images/mini-quiche.jpg",
      description: "Buttery crusts filled with savory eggs, veggies, and cheese.",
    },
    {
      name: "Snickerdoodle (Soft)",
      price: "$1.50 each",
      image: "/images/Perfectly-Soft-and-Chewy-Snickerdoodle-Cookies-17.jpg",
      description: "Cinnamon sugar coated, soft and chewy with a slight crackle.",
    },
    {
      name: "Snickerdoodle (Crisp)",
      price: "$1.50 each",
      image: "/images/The-Best-Snickerdoodle-Cookie-Recipe-9jpg-1200x975.jpg",
      description: "A crisp golden edge with a soft spiced center. Classic!",
    },
    {
      name: "Corn Dogs",
      price: "$3.75 each",
      image: "/images/Corn-Dogs-11.jpg",
      description: "Hand-dipped in golden batter and deep fried to perfection.",
    },
    {
      name: "Cinnamon Rolls",
      price: "$4.00 each",
      image: "/images/Soft+and+Gooey+Cinnamon+Rolls_+The+Best+Cinnamon+Rolls+Recipe.jpeg",
      description: "Warm, swirly, iced cinnamon rolls — soft and rustic.",
    },
    {
      name: "Bacon Broccoli Quiche",
      price: "$7.00 per slice",
      image: "/images/Bacon-Broccoli-Quiche-22.jpg",
      description: "Creamy, cheesy quiche filled with broccoli and crispy bacon.",
    },
  ];

  return (
    <div style={{
      fontFamily: 'Georgia, serif',
      backgroundColor: '#fef8f2',
      padding: '2rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    }}>
      {products.map((product, index) => (
        <div
          key={index}
          style={{
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#fff8ee',
            border: '1px solid #d6c1a5',
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <div style={{ padding: '1rem', textAlign: 'center' }}>
            <button style={{
              backgroundColor: '#6b4b3e',
              color: '#fff5e1',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              fontSize: '1rem',
              marginBottom: '0.5rem',
              cursor: 'pointer'
            }}>
              {product.name} - {product.price}
            </button>
            <p style={{
              fontFamily: 'Cursive, Georgia',
              fontSize: '0.9rem',
              color: '#5a4633'
            }}>
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
