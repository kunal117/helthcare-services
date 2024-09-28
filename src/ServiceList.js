import Service from "./Service";

function ServiceList({ services, updateService, handleDelete }) {
  return (
    <div>
      <h2 className="text-2xl mb-4 uppercase font-bold tracking-wide ml-80">
        Available Services
      </h2>
      <ul>
        {services.map((service) => (
          <Service
            key={service.id}
            service={service}
            updateService={updateService}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
export default ServiceList;
