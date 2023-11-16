import React, { useState } from "react";
import BackButton from "../BackButton";

export default function NewBot() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Once event is triggered, set to loading
    setError(null); // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget);
      const postData = {};
      for (const pair of formData.entries()) {
        // iterate through the Form Data entries to create object
        postData[pair[0]] = pair[1];
      }

      const response = await fetch("/api/new_bot", {
        method: "POST",
        body: JSON.stringify(postData), // Need to stringify here for the backend to parse
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      if (response.ok) {
        setIsSubmitted(true); // If submit succeeds, set to done
      }
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <BackButton href="/" />
      <h2 className="my-2">Add a bot to a call</h2>
      {error && <div className="text-red-600">{error}</div>}
      {!isSubmitted ? (
        <form className="flex flex-row gap-2 text-gray-700" onSubmit={onSubmit}>
          <input
            className="rounded p-2"
            type="text"
            name="meeting_url"
            placeholder="Meeting URL..."
          />
          <input
            className="rounded p-2"
            type="text"
            name="bot"
            placeholder="Bot Name..."
          />
          <button
            className="rounded p-2 text-white bg-gray-700 hover:bg-gray-400"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      ) : (
        <h1>Done!</h1>
      )}
    </div>
  );
}
