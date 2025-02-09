import { React, useState } from "react";
import ApplyForm from "./applyForm";

export default function Apply() {
  const applicationClosed = false;
  return (
    <div className="Apply">
      <section className="Apply-section">
        <div className="Apply-content">
          {applicationClosed ? (
            <div className="Apply-closed">
              <p className="Apply-closed-icon">:(</p>
              <p className="Apply-closed-text">
                Application for this year has been closed
              </p>
            </div>
          ) : (
            <div className="Apply-form p-2 flex flex-col">
              <ApplyForm apiKey={process.env.REACT_APP_SPREADSHEET_API_KEY} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
