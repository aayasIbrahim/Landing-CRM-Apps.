"use client";
import React, { useEffect, useState } from "react";

interface Client {
  _id: string;
  fullName: string;
  email: string;
  mobile: string;
  country: string;
  createdAt: string;
}

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedField, setCopiedField] = useState<{
    id: string;
    field: string;
  } | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("/api/form");
        const data = await res.json();

        if (data.success) {
          setClients(data.clients);
        } else {
          console.error("Failed to fetch:", data.error);
        }
      } catch (error) {
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const handleCopy = async (text: string, id: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField({ id, field });
      setTimeout(() => setCopiedField(null), 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading clients...</p>;

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Lead List</h1>

        {clients.length === 0 ? (
          <p className="text-gray-500 text-lg">No leads found.</p>
        ) : (
          <div className="overflow-x-auto shadow border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  {["Name", "Email", "Mobile", "Country", "Created At"].map(
                    (heading) => (
                      <th
                        key={heading}
                        className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase"
                      >
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {clients.map((lead) => (
                  <tr key={lead._id} className="hover:bg-gray-50 transition">
                    {/* Name */}
                    <td
                      onClick={() =>
                        handleCopy(lead.fullName, lead._id, "fullName")
                      }
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 cursor-pointer relative"
                    >
                      {lead.fullName}
                      {copiedField?.id === lead._id &&
                        copiedField.field === "fullName" && (
                          <span className="absolute right-2 text-green-600 text-xs">
                            Copied!
                          </span>
                        )}
                    </td>

                    {/* Email */}
                    <td
                      onClick={() => handleCopy(lead.email, lead._id, "email")}
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 cursor-pointer relative"
                    >
                      {lead.email}
                      {copiedField?.id === lead._id &&
                        copiedField.field === "email" && (
                          <span className="absolute right-2 text-green-600 text-xs">
                            Copied!
                          </span>
                        )}
                    </td>

                    {/* Mobile */}
                    <td
                      onClick={() =>
                        handleCopy(lead.mobile, lead._id, "mobile")
                      }
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 cursor-pointer relative"
                    >
                      {lead.mobile}
                      {copiedField?.id === lead._id &&
                        copiedField.field === "mobile" && (
                          <span className="absolute right-2 text-green-600 text-xs">
                            Copied!
                          </span>
                        )}
                    </td>

                    {/* Country */}
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-600"
                      onClick={() =>
                        handleCopy(lead.country, lead._id, "country")
                      }
                    >
                      {lead.country}
                      {copiedField?.id === lead._id &&
                        copiedField.field === "mobile" && (
                          <span className="absolute right-2 text-green-600 text-xs">
                            Copied!
                          </span>
                        )}
                    </td>

                    {/* Created At */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(lead.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientList;
