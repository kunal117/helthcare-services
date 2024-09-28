import { useState } from "react";

function AddServiceForm({ services, AddService }) {
  const [newService, setNewService] = useState({
    id: services.length + 1,
    name: "",
    description: "",
    price: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (newService.name && newService.description && newService.price) {
      AddService(newService);
      setNewService({ name: "", description: "", price: "" });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-md rounded-lg mb-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4 ml-80 uppercase">
        Add New Service
      </h2>

      <div>
        <h2 className="mb-2 uppercase tracking-wide">Service Name</h2>
        <input
          type="text"
          value={newService.name}
          onChange={(e) =>
            setNewService({ ...newService, name: e.target.value })
          }
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <h2 className="mb-2 uppercase tracking-wide">Description</h2>
        <input
          type="text"
          value={newService.description}
          onChange={(e) =>
            setNewService({ ...newService, description: e.target.value })
          }
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <h2 className="mb-2 uppercase tracking-wide">Price</h2>
        <input
          type="number"
          value={newService.price}
          onChange={(e) =>
            setNewService({ ...newService, price: e.target.value })
          }
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
      >
        Add Service
      </button>
    </form>
  );
}
export default AddServiceForm;
