import React, { useState } from 'react'
import axios from 'axios';
import { URL_API } from '../globalapi.js';


export default function UrlShort() {
    const [longUrl, setLongUrl] = useState({ longUrl : ""});
    const [shortUrl, setShortUrl] = useState("");

const handleSubmit = async (event) => {
  event.preventDefault();
  const response = await axios.post(`${URL_API}/longurl`, longUrl, {
    withCredentials: true,
  });
  setShortUrl(response.data.data.shortUrl)
};

  return (
    <div className="url-container">
      <h3 className="main-heading">URL Shortener App</h3>
      <div className="mb-3">
        <label htmlFor="input" className="label form-label">
          Enter long URL
        </label>
        <input
          type="text"
          className="label form-control"
          id="input"
          placeholder="Enter your long URL"
          onChange={(e) => setLongUrl({ longUrl: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="output" className="label form-label">
          Short URL
        </label>
        <input
          type="text"
          className="label form-control"
          id="output"
          placeholder="Get your short URL"
          defaultValue={shortUrl}
        />
      </div>
      <button
        type="submit"
        className="label btn btn-primary"
        onClick={handleSubmit}
      >
        Short URL
      </button>
    </div>
  );
}
