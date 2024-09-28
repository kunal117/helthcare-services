import { useState } from "react";
import ServiceList from "./ServiceList";
import AddServiceForm from "./AddServiceForm";

function App() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "General Checkup",
      description: "A comprehensive medical checkup...",
      price: 500,
    },
    {
      id: 2,
      name: "Dental Cleaning",
      description: "A professional dental cleaning...",
      price: 800,
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
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-4">
      <h1 className="text-3xl text-blue-600 uppercase font-bold mb-6 tracking-wide">
        Helthcare Services
      </h1>

      <div className="w-full max-w-4xl">
        <AddServiceForm services={services} AddService={AddService} />

        <ServiceList
          services={services}
          updateService={updateService}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
