import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NormalLayout({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between max-w-7xl mx-auto">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
