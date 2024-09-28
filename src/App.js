import { useState } from "react";
import ServiceList from "./ServiceList";
import AddServiceForm from "./AddServiceForm";

function App() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "General Checkup",
      description: "A comprehensive medical checkup...",
      price: 50,
    },
    {
      id: 2,
      name: "Dental Cleaning",
      description: "A professional dental cleaning...",
      price: 80,
    },
  ]);

  function updateService(updatedService) {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
  }

  function handleDelete(id) {
    setServices(services.filter((service) => service.id !== id));
  }

  function AddService(newService) {
    setServices([...services, { ...newService }]);
  }

  return (
    <div>
      <h1>Helthcare Services</h1>
      <AddServiceForm services={services} AddService={AddService} />
      <ServiceList
        services={services}
        updateService={updateService}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
