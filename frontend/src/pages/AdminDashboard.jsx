import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { delContact, getContact } from "../api/contact";

const AdminDashboard = () => {
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

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <h1 className="text-2xl font-semibold">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Welcome {user?.name}
          </h1>

          <p className="text-gray-500">
            Admin Dashboard
          </p>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>

      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">
            Total Messages
          </h3>

          <p className="text-3xl font-bold">
            {contacts.length}
          </p>
        </div>

      </div>

      {/* Messages Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Message
              </th>

              <th className="p-4 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>

            {contacts.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-6"
                >
                  No Messages Found
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr
                  key={contact._id}
                  className="border-t"
                >
                  <td className="p-4">
                    {contact.name}
                  </td>

                  <td className="p-4">
                    {contact.email}
                  </td>

                  <td className="p-4">
                    {contact.message}
                  </td>

                  <td className="p-4">

                    <button
                      onClick={() =>
                        deleteContact(contact._id)
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AdminDashboard;