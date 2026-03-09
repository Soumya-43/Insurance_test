import { useState } from 'react';
import { Save, AlertCircle } from 'lucide-react';

export function ManualEntryForm() {
  const [activeTab, setActiveTab] = useState('patient');

  const tabs = [
    { id: 'patient', label: '1️⃣ Patient Details' },
    { id: 'diagnosis', label: '2️⃣ Diagnosis Info' },
    { id: 'procedure', label: '3️⃣ Procedure Details' },
    { id: 'documents', label: '4️⃣ Supporting Docs' },
    { id: 'history', label: '5️⃣ Treatment History' },
    { id: 'labs', label: '6️⃣ Lab Reports' },
    { id: 'doctor', label: '7️⃣ Doctor Cert.' },
    { id: 'claim', label: '8️⃣ Claim Info' },
    { id: 'risk', label: '9️⃣ Risk Factors' },
  ];

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Manual Entry Form</h1>
          <p className="text-slate-600">Enter complete pre-authorization details manually.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">
          <Save className="w-5 h-5" />
          Save Application
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden bg-white rounded-xl border border-slate-200">
        {/* Sidebar Tabs */}
        <div className="w-64 border-r border-slate-200 bg-slate-50 overflow-y-auto">
          <nav className="p-4 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-3xl">
            {activeTab === 'patient' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Patient Details</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Patient ID</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. PAT_001" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Patient Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Rajesh Kumar" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
                    <input type="date" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                      <option>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Insurance Provider</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. INS_A" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Policy Number</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. POL-2024-88321" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'diagnosis' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Diagnosis Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Diagnosis Description</label>
                    <textarea rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Lumbar Disc Herniation"></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">ICD-10 Code</label>
                      <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. M51.1" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Diagnosis Date</label>
                      <input type="date" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'procedure' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Procedure Details</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Procedure Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Lumbar Discectomy" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">CPT Code</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. CPT_63030" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Planned Surgery Date</label>
                    <input type="date" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Surgeon Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Dr. Sharma" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Hospital Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Apollo Hospital" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Supporting Documents</h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-6 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">Please upload required documents depending on the procedure (e.g., MRI for Lumbar Discectomy, X-Ray for Knee Replacement).</p>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {['MRI / X-Ray / Ultrasound', 'Doctor Recommendation', 'Lab Reports', 'Treatment History', 'Medical Certificates'].map((docType) => (
                    <div key={docType} className="border border-slate-200 rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-slate-900">{docType}</h4>
                        <p className="text-sm text-slate-500">Not uploaded</p>
                      </div>
                      <button className="px-4 py-2 bg-slate-100 font-medium text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                        Upload
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Treatment History</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Previous Treatments</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Physiotherapy" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Treatment Duration</label>
                      <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. 6 weeks" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Outcome</label>
                      <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                        <option>Select Outcome</option>
                        <option>Full relief</option>
                        <option>Partial relief</option>
                        <option>No relief</option>
                        <option>Condition worsened</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'labs' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Lab Reports</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Report Type</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                      <option>MRI</option>
                      <option>X-Ray</option>
                      <option>CBC</option>
                      <option>LFT</option>
                      <option>Pain scale reports</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                    <input type="date" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Finding/Result</label>
                    <textarea rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Disc herniation"></textarea>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'doctor' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Doctor Certification</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Surgeon Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Dr. Sharma" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Medical License ID</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. MED_99382" />
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="signedRec" className="w-5 h-5 text-blue-600 rounded border-slate-300" />
                    <label htmlFor="signedRec" className="text-sm font-medium text-slate-900">Signed Recommendation Letter Uploaded</label>
                  </div>

                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="medNec" className="w-5 h-5 text-blue-600 rounded border-slate-300" />
                    <label htmlFor="medNec" className="text-sm font-medium text-slate-900">Medical Necessity Certificate Uploaded</label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'claim' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Claim Details</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Claim ID</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. CLM_011" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Submission Date</label>
                    <input type="date" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Requested Amount (₹)</label>
                    <input type="number" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. 175000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Procedure Cost Estimate</label>
                    <input type="number" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. 175000" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'risk' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Optional Risk Factors (AI Scoring)</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">BMI</label>
                    <input type="number" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. 32" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Age</label>
                    <input type="number" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. 45" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Conservative Treatment Duration</label>
                    <input type="text" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. 6 weeks" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Primary Document Date</label>
                    <input type="date" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
