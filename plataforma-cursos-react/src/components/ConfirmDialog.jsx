// src/components/ConfirmDialog.jsx
import React from "react";
import "../styles/ConfirmDialog.css";

export default function ConfirmDialog({ isOpen, onConfirm, onCancel, message }) {
  if (!isOpen) return null;

  return (
    <div className="confirm-overlay">
      <div className="confirm-box">
        <p>{message}</p>
        <div className="confirm-actions">
          <button className="confirm-btn" onClick={onConfirm}>Sim</button>
          <button className="cancel-btn" onClick={onCancel}>Não</button>
        </div>
      </div>
    </div>
  );
}
