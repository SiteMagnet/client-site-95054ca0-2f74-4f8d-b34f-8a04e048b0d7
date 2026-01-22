import React from "react";
import "./BillingTab.css";

const BillingTab = () => {
  return (
    <div className="billing-tab">
      <h2>Billing & Invoices</h2>
      <p className="subtext">Manage your payments, subscriptions, and invoices.</p>

      <div className="billing-section">
        <h3>Payment Method</h3>
        <div className="payment-card">
          <p>Visa ending in **** 4242</p>
          <button className="btn">Update</button>
        </div>
      </div>

      <div className="billing-section">
        <h3>Invoices</h3>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Invoice</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apr 10, 2025</td>
              <td>#INV-1023</td>
              <td>$150.00</td>
              <td className="status paid">Paid</td>
            </tr>
            <tr>
              <td>Mar 10, 2025</td>
              <td>#INV-1017</td>
              <td>$150.00</td>
              <td className="status paid">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingTab;
