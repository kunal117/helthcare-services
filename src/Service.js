import { useState } from "react";

function Service({ service, updateService }) {
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
        <div>
          <h1>{service.name}</h1>
          <p>{service.description}</p>
          <p>{service.prices}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </li>
  );
}
export default Service;
