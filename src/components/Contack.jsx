import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { IoCloudUploadOutline } from 'react-icons/io5';

export default function Contact() {
  const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState("No file chosen");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file.name);

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

  return (
    <div className="m-4">
      <form className='m-3'>
        <div className="flex flex-row items-center">
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
      </form>
    
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.keys(row).map((key) => (
                  <td key={key}>
                    {key === 'hotel_image' ? (
                      <img src={row[key]} alt='Excel Image' style={{ maxWidth: '100px', maxHeight: '100px' }} />
                    ) : (
                      row[key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
