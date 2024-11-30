import { memo } from "react";

const Introduce = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="bg-cover bg-center text-white h-96 flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?pizza')",
          }}
        >
          <div className="bg-black bg-opacity-50 p-8 rounded">
            <h2 className="text-4xl font-bold">Welcome to Pizza Delight!</h2>
            <p className="mt-4 text-lg">
              Taste the best pizzas in town, made with fresh ingredients and
              love.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4 text-gray-600">
              At Pizza Delight, we bring you authentic Italian flavors right to
              your plate. Our passion for pizza drives us to use the best
              ingredients to create the perfect slice.
            </p>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  title: "Margherita",
                  description:
                    "Classic pizza with fresh basil, mozzarella, and tomato sauce.",
                  price: "$10",
                  img: "https://source.unsplash.com/400x300/?pizza-margherita",
                },
                {
                  title: "Pepperoni",
                  description:
                    "Loaded with spicy pepperoni and mozzarella cheese.",
                  price: "$12",
                  img: "https://source.unsplash.com/400x300/?pizza-pepperoni",
                },
                {
                  title: "Vegetarian",
                  description:
                    "Topped with a mix of fresh veggies for a healthy treat.",
                  price: "$11",
                  img: "https://source.unsplash.com/400x300/?vegetarian-pizza",
                },
              ].map((pizza, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={pizza.img}
                    alt={pizza.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{pizza.title}</h3>
                    <p className="text-gray-600 mt-2">{pizza.description}</p>
                    <p className="text-yellow-500 font-bold mt-4">
                      {pizza.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-gray-600">
              Contact us for reservations or inquiries. We're here to serve you!
            </p>
            <form className="mt-8 max-w-lg mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded p-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Pizza Delight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default memo(Introduce);
