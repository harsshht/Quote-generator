import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchTags } from "../actions/quoteActions";

function QuoteGenerator({ tags, fetchTags }) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  const fetchNewQuote = (tag) => {
    const url = tag
      ? `https://api.quotable.io/random?tags=${tag}`
      : "https://api.quotable.io/random";

    fetch(url)
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  };

  const handleTagChange = (event) => {
    const selectedTag = event.target.value;
    setSelectedTag(selectedTag);
    fetchNewQuote(selectedTag);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <div className="quote w-full md:w-96 h-auto rounded-lg flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-900 p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mb-8">
        <h2 className={`font-lobster text-xl md:text-2xl lg:text-3xl text-center text-white ${quote.length > 100 ? 'whitespace-normal' : 'whitespace-pre-line'}`}>
          {quote}
        </h2>
        <small className="font-dancing-script text-lg text-white mt-2 opacity-80">
          -{author}-
        </small>
      </div>

      <div className="mb-4 w-full md:w-96">
        <label className="text-gray-300 block mb-1">Select Tag:</label>
        <div className="relative border-b border-gray-600 overflow-hidden rounded-md">
          <select
            value={selectedTag}
            onChange={handleTagChange}
            className="block w-full px-4 py-2 bg-gray-900 text-white appearance-none focus:outline-none focus:border-blue-500 rounded-md"
          >
            <option value="">All</option>
            {tags.map((tag) => (
              <option key={tag._id} value={tag.slug}>
                {tag.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="fill-current h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-8-8 1.5-1.5L10 9l6.5-6.5L18 4z" />
            </svg>
          </div>
        </div>
      </div>

      <button
        className="bg-blue-500 text-white font-bold rounded-full py-2 px-4 transition-transform duration-300 hover:bg-blue-600 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-600 shadow-md"
        onClick={() => fetchNewQuote(selectedTag)}
      >
        Generate New Quote
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tags: state.tags,
});

export default connect(mapStateToProps, { fetchTags })(QuoteGenerator);
