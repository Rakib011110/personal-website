// NewsletterSubscription.js
import React from "react";

const NewsletterSubscription = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-10 text-center">
      <h2 className="text-2xl font-bold text-white">
        Subscribe to our Newsletter
      </h2>
      <p className="text-gray-400 mt-2">
        Get the latest updates and articles delivered to your inbox.
      </p>
      <div className="mt-4 flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="py-2 px-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <button className="ml-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
