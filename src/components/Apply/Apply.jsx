import React from "react";
import ApplyForm from "./ApplyForm";
import axios from "axios";

export default function Apply() {
  const applicationClosed = true; // Set this to false to test the form.

  return (
    <div className="Apply">
      <section className="Apply-section">
        <div className="Apply-content">
          {applicationClosed ? (
            <div className="Apply-closed flex flex-col items-center justify-center text-center">
              <p className="Apply-closed-icon text-6xl mb-4">:(</p>
              <p className="Apply-closed-text text-lg font-semibold">
                Application for this year has been closed.
              </p>
            </div>
          ) : (
            <div className="Apply-form p-4 flex flex-col items-center">
              <ApplyForm apiKey={process.env.REACT_APP_SPREADSHEET_API_KEY} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
