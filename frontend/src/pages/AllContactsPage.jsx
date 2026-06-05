import { useEffect, useState } from "react";
import { delContact, getContact } from "../api/contact";
import { useNavigate } from "react-router-dom";

const AllContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    if (user?.role !== "admin") {
      navigate("/");
      return;
    }

    fetchContacts();
  }, [navigate]);

  const fetchContacts = async () => {
    try {
      const data = await getContact();

      setContacts(data.contacts);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const deleteContact = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      await delContact(id);

      setContacts((prev) =>
        prev.filter(
          (contact) => contact._id !== id
        )
      );

    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-gray-500">
            Welcome {user?.name}
          </p>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <h2 className="text-lg text-gray-500">
          Total Messages
        </h2>

        <p className="text-3xl font-bold">
          {contacts.length}
        </p>
      </div>

      <div className="grid gap-4">

        {contacts.length === 0 ? (
          <div className="bg-white p-5 rounded-xl shadow">
            No Messages Found
          </div>
        ) : (
          contacts.map((contact) => (
            <div
              key={contact._id}
              className="bg-white p-5 rounded-xl shadow"
            >
              <h2 className="text-xl font-semibold">
                {contact.name}
              </h2>

              <p className="text-blue-600">
                {contact.email}
              </p>

              <p className="mt-3 text-gray-700">
                {contact.message}
              </p>

              <p className="mt-2 text-sm text-gray-400">
                {new Date(
                  contact.createdAt
                ).toLocaleString()}
              </p>

              <button
                onClick={() =>
                  deleteContact(contact._id)
                }
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default AllContactsPage;