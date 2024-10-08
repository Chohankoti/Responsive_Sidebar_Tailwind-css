import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { FaCopy } from "react-icons/fa";

export default function Contact() {
  const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState("No file chosen");
  const [filters, setFilters] = useState({});

  const handleFileUpload = async (e) => { // Declaring the function as async
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file.name);

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }

      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = (e) => {
        const arrayBuffer = e.target.result;
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);
        setData(parsedData);
      };
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const filteredData = data.filter((row) =>
    Object.entries(filters).every(([key, value]) => row[key].toString().toLowerCase().includes(value.toLowerCase()))
  );

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("http://localhost:5000/data");
    setData([]);
    setSelectedFile("No file chosen");
  };

  return (
    <div className="m-4 overflow-x-auto overflow-y-auto max-h-[90vh]">
      <form className="m-3">
        <div className="flex flex-row items-center justify-start space-x-9">
          <div>
            <input
              type="file"
              id="custom-input"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
              hidden
            />
            <label
              htmlFor="custom-input"
              className="block text-sm text-slate-500 mr-4 py-2 px-4
              rounded-md border-0 text-sm font-semibold bg-pink-50
              text-pink-700 hover:bg-pink-100 cursor-pointer"
            >
              <IoCloudUploadOutline className="w-6 h-6" />
            </label>
            <label className="text-sm text-slate-500">{selectedFile}</label>
          </div>
          <div>
            {data.length > 0 && (
              <>
                <div onClick={handleCopyToClipboard} className="text-center my-5">
                  <button type="button" className="text-sm border w-25 border-gray-500 rounded p-2 transition">
                   <div className="flex flex-row items-center space-x-4">
                   <div>
                    Copy API
                    </div>
                    <div>
                    <FaCopy/>
                    </div>   
                   </div>
                                    
                  </button>
                </div>
              </>
            )}
          </div>

        </div>
      </form>
      <>
        {selectedFile !== "No file chosen" ? (
          <div className="flex flex-col">
            <div className="-my-2 sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  {data.length > 0 && (
                    <>
                      <div className="flex mb-4">
                        {Object.keys(data[0]).map((key) => (
                          <div key={key} className="mr-4">
                            <label className="block text-sm font-medium text-gray-700">{key}</label>
                            <input
                              type="text"
                              className="mt-1 p-1 border border-gray-300 rounded-md"
                              onChange={(e) => handleFilterChange(key, e.target.value)}
                            />
                          </div>
                        ))}
                      </div>
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            {Object.keys(data[0]).map((key) => (
                              <th
                                key={key}
                                scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                {key}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredData.map((row, index) => (
                            <tr key={index}>
                              {Object.keys(row).map((key) => (
                                <td key={key} className="px-6 py-4 whitespace-nowrap">
                                  {key === 'hotel_image' ? (
                                    <div className="flex-shrink-0 h-10 w-10">
                                      <img className="h-10 w-10 rounded-full" src={row[key]} alt="" />
                                    </div>
                                  ) : (
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">{row[key]}</div>
                                    </div>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (null)}
      </>
    </div>
  );
}
