
import { ChevronRight } from "lucide-react"

const documentsLinks = [
  { name: "Documents Required for LLP Registration", count: 8 },
  { name: "Documents Required for Proprietorship Registration", count: 7 },
  { name: "Documents Required for Company Registration", count: 7 },
  { name: "Documents Required for Trademark Registration", count: 2 },
  { name: "Documents Required for GST Registration", count: 10 },
  { name: "Documents Required for Partnership Registration", count: 5 },
]

const DocumentsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Documents Required For OPC Registration</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center justify-center p-3 border rounded-lg">
            <span className="text-sm font-medium text-gray-700">PAN Card</span>
          </div>
          <div className="flex items-center justify-center p-3 border rounded-lg">
            <span className="text-sm font-medium text-gray-700">Passport</span>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <span className="text-sm font-medium text-gray-700">Voters Identity Card</span>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline ml-2">Load More</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documentsLinks.map((doc) => (
            <a key={doc.name} href="#" className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <span className="text-sm font-medium text-gray-700">{doc.name}</span>
              <div className="flex items-center">
                <span className="text-xs font-bold text-white bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center mr-2">{doc.count}</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DocumentsSection
