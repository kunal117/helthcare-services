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
    <form onSubmit={handleSubmit}>
      <h2>Name</h2>
      <input
        type="text"
        value={newService.name}
        onChange={(e) => setNewService({ ...newService, name: e.target.value })}
      />

      <h2>Description</h2>
      <input
        type="text"
        value={newService.description}
        onChange={(e) =>
          setNewService({ ...newService, description: e.target.value })
        }
      />

      <h2>Price</h2>
      <input
        type="number"
        value={newService.price}
        onChange={(e) =>
          setNewService({ ...newService, price: e.target.value })
        }
      />
      <button type="submit">Add Service</button>
    </form>
  );
}
export default AddServiceForm;
