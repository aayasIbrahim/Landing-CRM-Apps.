"use client";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

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

  const downloadExcel = () => {
    // যদি clients অ্যারে খালি হয়, ফাংশন থামাও
    if (clients.length === 0) return;

    // clients ডেটাকে Excel শিটে রূপান্তর করা
    const ws = XLSX.utils.json_to_sheet(
      clients.map((c) => ({
        Name: c.fullName,
        Email: c.email,
        Mobile: c.mobile,
        Country: c.country,
        "Created At": new Date(c.createdAt).toLocaleString(), // তৈরি হওয়ার তারিখ
      }))
    );

    // নতুন Excel workbook তৈরি করা
    const wb = XLSX.utils.book_new();

    // শিটকে ওয়ার্কবুকে যোগ করা
    XLSX.utils.book_append_sheet(wb, ws, "Clients");

    // ওয়ার্কবুককে বাইনারি ডেটায় রূপান্তর করা
    const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    // বাইনারি ডেটা থেকে Blob তৈরি করা
    const blob = new Blob([buf], { type: "application/octet-stream" });

    // ফাইল ডাউনলোড করা (file-saver লাইব্রেরি ব্যবহার করে)
    saveAs(blob, "clients.xlsx");
  };

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

  if (clients.length === 0)
    return (
      <p className="text-center text-gray-500 mt-10 text-lg">No leads found.</p>
    );

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Lead List</h1>

        <button
          onClick={downloadExcel}
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Download Excel
        </button>

        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow">
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
                <tr
                  key={lead._id}
                  className="hover:bg-gray-50 transition cursor-pointer"
                >
                  {/* Name */}
                  <td
                    onClick={() =>
                      handleCopy(lead.fullName, lead._id, "fullName")
                    }
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 relative"
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
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 relative"
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
                    onClick={() => handleCopy(lead.mobile, lead._id, "mobile")}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 relative"
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
                    onClick={() =>
                      handleCopy(lead.country, lead._id, "country")
                    }
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 relative"
                  >
                    {lead.country}
                    {copiedField?.id === lead._id &&
                      copiedField.field === "country" && (
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
      </div>
    </section>
  );
};

export default ClientList;
