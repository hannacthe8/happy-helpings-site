function App() {
  return (
    <div className="min-h-screen bg-amber-100 font-sans text-brown-900">
      {/* Header */}
      <header className="text-center py-10 bg-amber-200 shadow-md">
        <h1 className="text-4xl font-bold">Happy Helpings Bakery</h1>
        <p className="mt-2 italic text-lg">Homemade quiche, brownies, cinnamon rolls & more</p>
      </header>

      {/* Featured Items */}
      <section className="p-8">
        <h2 className="text-3xl text-center mb-8 font-semibold">Featured Bakes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Cinnamon Rolls", price: "$4", desc: "Soft, gooey and full of cinnamon." },
            { name: "8\" Quiche", price: "$12", desc: "Savory quiche with flaky crust." },
            { name: "Brownies", price: "$3", desc: "Rich, fudgy chocolate brownies." }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
              <div className="w-full h-40 bg-gray-200 mb-4 rounded-xl flex items-center justify-center text-gray-500">
                {/* Replace this div with <img src="..." /> when you have photos */}
                Image
              </div>
              <button className="bg-amber-700 text-white px-4 py-2 rounded-full text-lg">
                {item.name} – {item.price}
              </button>
              <p className="mt-2 italic text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Me */}
      <section className="bg-amber-50 p-8 mt-12 rounded-t-3xl">
        <h2 className="text-2xl font-semibold text-center mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto text-center italic text-brown-800">
          I’m Hana, the baker behind Happy Helpings! Everything I sell is made fresh with love from my own kitchen. Whether it's a warm quiche or a sweet cinnamon roll, I’m here to bring comfort to your table. 🧡
        </p>
      </section>

      {/* Specials */}
      <section className="p-8 mt-6">
        <h2 className="text-2xl font-semibold text-center mb-4">This Week's Specials</h2>
        <p className="text-center italic text-brown-700">
          Check back soon! I’ll post my weekly specials right here.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-amber-200 text-center p-4 text-sm text-brown-700">
        &copy; {new Date().getFullYear()} Happy Helpings Bakery – Made with ♥ in Canada
      </footer>
    </div>
  );
}

export default App;
