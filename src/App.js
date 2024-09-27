import { useState } from "react";
import ServiceList from "./ServiceList";

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

  return (
    <div>
      <h1>Helthcare Services</h1>
      <ServiceList services={services} updateService={updateService} />
    </div>
  );
}

export default App;
