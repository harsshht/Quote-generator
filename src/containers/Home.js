import React from "react";
import { connect } from "react-redux";
import QuoteGenerator from "../components/QuoteGenerator";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold my-6">Random Quote Generator</h1>
        <QuoteGenerator />
      </div>
    </div>
  );
}

export default connect(null)(Home);
