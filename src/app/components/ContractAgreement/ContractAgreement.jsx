// pages/contract.js
import { useState, useRef } from "react";
import SignatureCanvas from 'react-signature-canvas';
import { supabase } from "@/lib/supabaseClient";
import { jsPDF } from 'jspdf';

const ContractAgreement = ({ userId }) => {
  const [signatureDataUrl, setSignatureDataUrl] = useState(null);
  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const signatureCanvas = useRef(null);

  const handleSaveSignature = () => {
    if (!signatureCanvas.current) return;
    const dataURL = signatureCanvas.current.toDataURL();
    setSignatureDataUrl(dataURL);
  };

  const handleClearSignature = () => {
    if (signatureCanvas.current) {
      signatureCanvas.current.clear();
      setSignatureDataUrl(null);
    }
  };

  const handleAccept = async () => {
    if (!signatureDataUrl) {
      alert("Please sign the contract first.");
      return;
    }

    setLoading(true);

    try {
      // 1. Create PDF
      const pdf = new jsPDF();
      pdf.setFontSize(12);
      pdf.text("Site Magnet Website Design Agreement", 10, 10);

      // Add mock agreement content
      pdf.text("This Website Design Agreement (\"Agreement\") is made between Site Magnet (\"Designer\") and the Client.", 10, 20);
      pdf.text("1. Services Provided\n2. Timeline\n3. Payment Terms\n4. Ownership\n5. Liability\n6. Termination\n7. Revisions\n8. Confidentiality\n9. Dispute Resolution", 10, 30);
      pdf.text("Signed below by the Client:", 10, 120);
      pdf.addImage(signatureDataUrl, 'PNG', 10, 130, 100, 50);

      const pdfBytes = pdf.output('arraybuffer');
      const pdfBlob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      // 2. Upload to Supabase Storage
      const fileName = `${Date.now()}_signed_contract.pdf`;
      const { data: storageData, error: storageError } = await supabase.storage
        .from('contracts')
        .upload(fileName, pdfBlob, {
          contentType: 'application/pdf',
        });

      if (storageError) {
        console.error("Error uploading PDF:", storageError);
        alert("Failed to upload contract.");
        setLoading(false);
        return;
      }

      // 3. Get Public URL
      const { data: { publicUrl } } = supabase
        .storage
        .from('contracts')
        .getPublicUrl(storageData.path);

      // 4. Save to DB
      const { error: dbError } = await supabase
        .from('contract_signatures')
        .insert([
          {
            user_id: userId,
            contract_url: publicUrl,
            signed_at: new Date().toISOString(),
          },
        ]);

      if (dbError) {
        console.error("Error saving to DB:", dbError);
        alert("Failed to save contract record.");
        setLoading(false);
        return;
      }

      // 5. Update user brand_stage
      const { error: updateError } = await supabase
        .from('users')
        .update({ brand_stage: 5 })
        .eq('id', userId);

      if (updateError) {
        console.error("Error updating user stage:", updateError);
        alert("Contract saved, but failed to update user stage.");
      }

      setAgreementAccepted(true);
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Site Magnet Website Design Agreement</h2>

      <div className="h-96 overflow-y-scroll border p-4 rounded bg-gray-50 text-sm space-y-4">
        <p>This Website Design Agreement ("Agreement") is made between Site Magnet ("Designer") and the Client identified below.</p>
        <p>1. Services Provided</p>
        <p>2. Timeline</p>
        <p>3. Payment Terms</p>
        <p>4. Ownership</p>
        <p>5. Liability</p>
        <p>6. Termination</p>
        <p>7. Revisions</p>
        <p>8. Confidentiality</p>
        <p>9. Dispute Resolution</p>
        <p><strong>10. Signature</strong><br />Please sign below and click “I Agree.”</p>
      </div>

      <div className="mt-6 border rounded">
        <SignatureCanvas
          ref={signatureCanvas}
          penColor="black"
          canvasProps={{
            width: 500,
            height: 200,
            className: 'border-dashed border-gray-400 rounded w-full'
          }}
        />
        <div className="flex justify-end p-2 space-x-2">
          <button
            type="button"
            className="btn btn-sm bg-gray-300 hover:bg-gray-400"
            onClick={handleClearSignature}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleSaveSignature}
          >
            Save Signature
          </button>
        </div>
      </div>

      <button
        onClick={handleAccept}
        disabled={!signatureDataUrl || loading}
        className={`btn w-full mt-4 ${signatureDataUrl ? "bg-green-600 hover:bg-green-700 text-white" : "bg-gray-300 cursor-not-allowed"}`}
      >
        {loading ? "Saving..." : signatureDataUrl ? "I Agree & Continue" : "Sign the Contract to Continue"}
      </button>

      {agreementAccepted && (
        <div className="mt-4 text-green-600 font-semibold text-center">
          ✅ Agreement accepted! Your signed contract has been saved.
        </div>
      )}
    </div>
  );
};

export default ContractAgreement;
