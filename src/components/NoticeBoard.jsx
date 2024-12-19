import React, { useState } from 'react';
import { FileText, Download, X } from 'lucide-react';

// Notice data structure
const initialNotices = [
  {
    id: 1, 
    title: "Student Application Form", 
    date: "December 07, 2024",
    description: "Student Application form",
    pdfUrl: "documents/Admission-Form.pdf"
  },
  {
    id: 2, 
    title: "DOC Permission and Approval", 
    date: "December 06, 2024",
    description: "Approval of opening of BNIT Public School for 2024-25",
    pdfUrl: "documents/DEO-Approval.pdf"
  },
  {
    id: 3,
    title: "Prospectus",
    date: "December 19, 2024",
    description: "School's Prospectus for 2024-25",
    pdfUrl: "/documents/Prospectus.pdf"
//   },
//   {
//     id: 4,
//     title: "Yearbook Pre-Order",
//     date: "May 1, 2024",
//     description: "Order your copy of the 2023-2024 yearbook",
//     pdfUrl: "/path/to/yearbook-order-form.pdf"
  }
];

function NoticeBoard() {
    // Sort notices by date in descending order (most recent first)
    const sortedNotices = [...initialNotices].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA; // Sort in descending order
    });
  
    const [notices] = useState(sortedNotices);
    const [selectedNotice, setSelectedNotice] = useState(null);
    const [showAllNotices, setShowAllNotices] = useState(false);
  
    const handleNoticeClick = (notice) => {
      setSelectedNotice(notice);
    };
  
    const handleDownloadPDF = (pdfUrl) => {
      // Construct the full URL to the PDF file
      const pdfPath = `${process.env.PUBLIC_URL}/${pdfUrl}`;
      console.log('Full PDF Path:', pdfPath); 
    
      // Open the PDF in a new tab
      window.open(pdfPath, '_blank');
    };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <FileText className="mr-2 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-800">Notice Board</h2>
      </div>

      {/* Notices List */}
      <div className="space-y-4 max-h-[500px] overflow-y-auto">
        {(showAllNotices ? notices : notices.slice(0, 3)).map((notice) => (
          <div 
            key={notice.id} 
            className="border-b pb-4 cursor-pointer hover:bg-gray-50 p-3 rounded"
            onClick={() => handleNoticeClick(notice)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-800">{notice.title}</h3>
                <p className="text-sm text-gray-500">{notice.date}</p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownloadPDF(notice.pdfUrl);
                }}
                className="text-blue-600 hover:text-blue-800"
              >
                <Download />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-4 text-center">
        {!showAllNotices && (
          <button
            onClick={() => setShowAllNotices(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View All
          </button>
        )}
      </div>

      {/* Selected Notice Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{selectedNotice.title}</h2>
              <button 
                onClick={() => setSelectedNotice(null)}
                className="text-gray-600 hover:text-gray-800"
              >
                <X />
              </button>
            </div>
            <p className="text-gray-700 mb-4">{selectedNotice.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{selectedNotice.date}</span>
              <button 
                onClick={() => handleDownloadPDF(selectedNotice.pdfUrl)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
              >
                <Download className="mr-2" /> Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoticeBoard;
