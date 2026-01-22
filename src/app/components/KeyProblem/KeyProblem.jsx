'use client';
import React from 'react';
import './KeyProblem.css'; // adjust path if you're using global styles or CSS Modules
import content from '../../../../content.json'; // adjust path based on file structure

export default function KeyProblem() {
  const keyProblem = content.key_problem;
  return (
    <section className="problem-section">
      <div className="content">
        <p className="main-heading">{keyProblem[0]}</p>
        <span className="main-heading">{keyProblem[1]}</span>
        <p className="sub-heading">
        {keyProblem[2]}
        </p>
      </div>
    </section>
  );
}
