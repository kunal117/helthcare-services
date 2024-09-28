import { useState } from "react";

function Service({ service, updateService, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedService, setEditedService] = useState({ ...service });

  const handleUpdate = function () {
    updateService(editedService);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedService.name}
            onChange={(e) =>
              setEditedService({ ...editedService, name: e.target.value })
            }
          />

          <input
            type="text"
            value={editedService.description}
            onChange={(e) =>
              setEditedService({
                ...editedService,
                description: e.target.value,
              })
            }
          />

          <input
            type="number"
            value={editedService.price}
            onChange={(e) =>
              setEditedService({
                ...editedService,
                price: e.target.value,
              })
            }
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold text-gray-800  tracking-wide">
            {service.name}
          </h3>
          <p className="text-gray-600">{service.description}</p>
          <p className="font-bold text-gray-800 tracking-wide">{`Price: ${service.price}`}</p>

          <div className="mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => handleDelete(service.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
export default Service;
