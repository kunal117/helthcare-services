import Service from "./Service";

function ServiceList({ services, updateService }) {
  return (
    <div>
      <h2>Available Services</h2>
      <ul>
        {services.map((service) => (
          <Service
            key={service.id}
            service={service}
            updateService={updateService}
          />
        ))}
      </ul>
    </div>
  );
}
export default ServiceList;
