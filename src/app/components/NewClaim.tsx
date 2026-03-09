import { useState } from 'react';
import {
  Upload,
  User,
  FileText,
  AlertCircle,
  CheckCircle,
  XCircle,
  ChevronRight,
  ChevronLeft,
  Send,
  Shield,
} from 'lucide-react';

export function NewClaim() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [uploadedNote, setUploadedNote] = useState(false);
  const [extractedData, setExtractedData] = useState<any>(null);

  const steps = [
    { id: 0, name: 'Claim Input', icon: User },
    { id: 1, name: 'Evidence Review', icon: Shield },
    { id: 2, name: 'Submission Dashboard', icon: Send },
  ];

  const mockPatients = [
    { id: 'P001', name: 'Sarah Johnson', dob: '1985-03-15', insurer: 'Blue Cross' },
    { id: 'P002', name: 'Michael Chen', dob: '1972-08-22', insurer: 'Aetna' },
    { id: 'P003', name: 'Emma Davis', dob: '1990-11-30', insurer: 'UnitedHealth' },
  ];

  const handleFileUpload = () => {
    setUploadedNote(true);
    // Simulate extraction
    setTimeout(() => {
      setExtractedData({
        procedure: 'Total Knee Arthroplasty',
        icd10: 'M17.11',
        cpt: '27447',
        diagnosis: 'Unilateral primary osteoarthritis, right knee',
      });
    }, 1500);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <Step1Input 
          patients={mockPatients}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
          uploadedNote={uploadedNote}
          handleFileUpload={handleFileUpload}
        />;
      case 1:
        return <Step2Evidence extractedData={extractedData} />;
      case 2:
        return <Step3Dashboard />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">New Pre-Authorization</h1>
        <p className="text-slate-600">AI-powered claim assembly in under 10 minutes</p>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = currentStep === idx;
            const isCompleted = currentStep > idx;
            return (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                      isCompleted
                        ? 'bg-green-500 border-green-500'
                        : isActive
                        ? 'bg-blue-600 border-blue-600'
                        : 'bg-white border-slate-300'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <Icon
                        className={`w-6 h-6 ${
                          isActive ? 'text-white' : 'text-slate-400'
                        }`}
                      />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium ${
                      isActive || isCompleted ? 'text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 ${
                      isCompleted ? 'bg-green-500' : 'bg-slate-200'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-slate-50 p-8">
        <div className="max-w-5xl mx-auto">{renderStepContent()}</div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-white border-t border-slate-200 px-8 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-6 py-2 text-slate-600 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1 || (currentStep === 0 && !selectedPatient && !uploadedNote)}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
          >
            {currentStep === 0 ? 'Analyze Claim' : currentStep === steps.length - 1 ? 'Submit Claim' : 'Next'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Step1Input({ 
  patients, 
  selectedPatient, 
  setSelectedPatient, 
  uploadedNote, 
  handleFileUpload 
}: any) {
  return (
    <div className="space-y-6">
      {/* Patient Selection */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">1. Select Patient</h2>
        <div className="grid grid-cols-1 gap-3">
          {patients.map((patient: any) => (
            <button
              key={patient.id}
              onClick={() => setSelectedPatient(patient.id)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                selectedPatient === patient.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{patient.name}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-slate-600">
                    <span>ID: {patient.id}</span>
                    <span>•</span>
                    <span>DOB: {patient.dob}</span>
                    <span>•</span>
                    <span>{patient.insurer}</span>
                  </div>
                </div>
                {selectedPatient === patient.id && (
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Document Upload / Paste */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          2. Provide Surgeon's Recommendation Note
        </h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">Paste Note</label>
          <textarea 
            rows={5} 
            className="w-full p-4 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-slate-900" 
            placeholder="Paste the surgeon's clinical note here..."
            onChange={(e) => {
              if (e.target.value.length > 10) handleFileUpload();
            }}
          ></textarea>
        </div>

        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-slate-500">OR</span>
          </div>
        </div>

        {!uploadedNote ? (
          <div
            onClick={handleFileUpload}
            className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
          >
            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-600 mb-1 font-medium">Click to upload document</p>
            <p className="text-sm text-slate-500">PDF, DOC, or TXT (max 10MB)</p>
          </div>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <div className="flex-1">
              <p className="font-medium text-green-900">Note provided successfully</p>
              <p className="text-sm text-green-700">Ready for AI analysis</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Step2Evidence({ extractedData }: any) {
  const ehrData = {
    diagnosisHistory: [
      { date: '2022-05-10', diagnosis: 'Knee pain, right', icd10: 'M25.561' },
      { date: '2023-03-22', diagnosis: 'Osteoarthritis, right knee', icd10: 'M17.11' },
    ],
    labs: [
      { date: '2024-02-20', test: 'Complete Blood Count', result: 'Normal', relevant: true },
      { date: '2024-02-20', test: 'ESR', result: '18 mm/hr', relevant: true },
      { date: '2024-01-10', test: 'Lipid Panel', result: 'Normal', relevant: false },
    ],
    treatments: [
      { date: '2023-04-01', treatment: 'Physical Therapy', duration: '6 months', outcome: 'Minimal improvement' },
      { date: '2023-10-15', treatment: 'Cortisone Injection', duration: '1 session', outcome: 'Temporary relief' },
      { date: '2024-01-05', treatment: 'NSAIDs', duration: 'Ongoing', outcome: 'Partial relief' },
    ]
  };

  return (
    <div className="space-y-6">
      {/* Extracted Information */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Extracted Claim Details</h2>
        {extractedData ? (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">Procedure</p>
                <p className="font-semibold text-slate-900">{extractedData.procedure}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">CPT Code</p>
                <p className="font-mono font-semibold text-slate-900">{extractedData.cpt}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">ICD-10 Code</p>
                <p className="font-mono font-semibold text-slate-900">{extractedData.icd10}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 mb-1">Matched Diagnosis</p>
                <p className="font-semibold text-slate-900">{extractedData.diagnosis}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
            <div className="animate-spin w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full" />
            <span className="text-blue-900">Extracting information from document...</span>
          </div>
        )}
      </div>

      {/* Matched Evidence */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-slate-50">
          <h2 className="text-lg font-semibold text-slate-900">EHR Evidence Matched</h2>
          <p className="text-sm text-slate-600 mt-1">Automatically collected supporting documentation</p>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Diagnosis History */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Diagnosis History
            </h3>
            <div className="space-y-2">
              {ehrData.diagnosisHistory.map((record, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-medium text-slate-900">{record.diagnosis}</p>
                    <p className="text-sm text-slate-600">ICD-10: {record.icd10}</p>
                  </div>
                  <span className="text-sm text-slate-500">{record.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conservative Treatments */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Prior Treatments (Medical Necessity)
            </h3>
            <div className="space-y-2">
              {ehrData.treatments.map((treatment, idx) => (
                <div key={idx} className="p-3 border border-slate-200 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-medium text-slate-900">{treatment.treatment}</p>
                    <p className="text-sm text-slate-600">Outcome: {treatment.outcome}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-slate-700 block">{treatment.duration}</span>
                    <span className="text-xs text-slate-500">{treatment.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lab Results */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Relevant Lab Reports
            </h3>
            <div className="space-y-2">
              {ehrData.labs.filter(l => l.relevant).map((lab, idx) => (
                <div key={idx} className="p-3 bg-green-50 border border-green-200 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-medium text-slate-900">{lab.test}</p>
                    <p className="text-sm text-slate-600">Result: {lab.result}</p>
                  </div>
                  <span className="text-sm text-slate-500">{lab.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step3Dashboard() {
  const riskScore = {
    level: 'low',
    score: 85,
    factors: [
      { item: 'All required documents present', impact: '+25', positive: false },
      { item: 'Conservative treatment documented', impact: '+30', positive: true },
      { item: 'ICD-10 code matches policy criteria', impact: '+20', positive: true },
      { item: 'Missing ultrasound report', impact: '-15', positive: false },
      { item: 'Diagnosis history >12 months', impact: '+25', positive: true },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Risk Score */}
      <div className="bg-white rounded-xl p-6 border-2 border-green-500">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Rejection Risk Assessment</h2>
            <p className="text-slate-600 mt-1">AI-powered analysis based on historical patterns</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <span className="text-3xl font-bold text-green-700">{riskScore.score}</span>
            </div>
            <span className="inline-block px-4 py-1 bg-green-100 text-green-800 rounded-full font-semibold text-sm">
              LOW RISK
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-slate-900 mb-3">Risk Factors</h3>
          {riskScore.factors.map((factor, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg flex items-center justify-between ${
                factor.item.includes('Missing')
                  ? 'bg-amber-50 border border-amber-200'
                  : 'bg-green-50 border border-green-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {factor.item.includes('Missing') ? (
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                <span className={`font-medium ${
                  factor.item.includes('Missing') ? 'text-amber-900' : 'text-green-900'
                }`}>
                  {factor.item}
                </span>
              </div>
              <span className={`font-semibold ${
                factor.impact.startsWith('+') ? 'text-green-700' : 'text-red-700'
              }`}>
                {factor.impact}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Submission Package Preview */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Pre-Authorization Package</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">Patient</p>
              <p className="font-semibold text-slate-900">Sarah Johnson</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">Procedure</p>
              <p className="font-semibold text-slate-900">Total Knee Arthroplasty</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">CPT Code</p>
              <p className="font-mono font-semibold text-slate-900">27447</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">Insurer</p>
              <p className="font-semibold text-slate-900">Blue Cross</p>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-4">
            <h3 className="font-semibold text-slate-900 mb-3">Included Documents (8)</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Surgeon Recommendation Note',
                'Diagnosis History (2 years)',
                'X-ray Report (2024-01-15)',
                'Physical Therapy Records',
                'Conservative Treatment Log',
                'Blood Work Panel',
                'Current Medications List',
                'Medical Necessity Letter',
              ].map((doc, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-green-50 rounded">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-900">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-amber-900 mb-1">Action Required</p>
                <p className="text-sm text-amber-800">
                  Ultrasound report is missing but can be submitted as an addendum. Claim can proceed with current documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
        <Send className="w-5 h-5" />
        Submit Pre-Authorization to Billing Team
      </button>
    </div>
  );
}
