import { useState } from "react";
import "./pending.css";

const Pending = () => {
  const initialClients = [
    {
      id: "13343",
      fullname: "Clement Skhumbuzo",
      email: "clementsk@gmail.com",
      address: "113 Parkwood Estate, Johannesburg, Gauteng",
      number: "073 244 5667",
      selected: false,
    },
    {
      id: "13344",
      fullname: "Jeff Sithole",
      email: "sithole@gmail.com",
      address: "120 Parkwood Estate, Johannesburg, Gauteng",
      number: "082 334 2233",
      selected: false,
    },
  ];

  const [clientInfo, setClientInfo] = useState(initialClients);

  function handleToggle(id) {
    setClientInfo((prevClientInfo) =>
      prevClientInfo.map((client) =>
        client.id === id ? { ...client, selected: !client.selected } : client
      )
    );
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pending Clients </h1>
      <div className="client-info">
        {clientInfo.map((client) => (
          <div
            key={client.id}
            className={
              client.selected ? "client-details selected" : "client-details"
            }
          >
            <input
              type="checkbox"
              onChange={() => handleToggle(client.id)}
              checked={client.selected}
            />
            <p>{client.fullname}</p>
            <p>{client.email}</p>
            <p>{client.address}</p>
            <p>{client.number}</p>
          </div>
        ))}
        <button className="btn">Register Client</button>
      </div>
    </>
  );
};

export default Pending;
