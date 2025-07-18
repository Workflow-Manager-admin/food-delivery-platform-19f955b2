import React, { useState } from "react";
import { useParams } from "react-router-dom";

// PUBLIC_INTERFACE
function ReviewPage() {
  /**
   * Ratings and reviews page for a restaurant.
   * Lets users view previous reviews and submit a new rating/review.
   * NOTE: Stub/UX only – replace with real BE fetch/save as needed.
   */
  const { id } = useParams();
  // Prepopulated sample reviews for demo purposes.
  const [reviews, setReviews] = useState([
    { user: "Alice", comment: "Great food!", rating: 5 },
    { user: "Ben", comment: "Fast service.", rating: 4 }
  ]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);

  // PUBLIC_INTERFACE
  function handleSubmit(e) {
    /**
     * Handles the form submit for submitting a new review.
     * Adds the new review to the reviews list.
     */
    e.preventDefault();
    // Real implementation: send to API and refresh list
    setReviews(r => [...r, { user: "You", comment, rating }]);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    setComment('');
    setRating(5);
  }

  return (
    <div style={{ maxWidth: 440, margin: "0 auto" }}>
      <h2>Restaurant Reviews</h2>
      <ul className="review-list">
        {reviews.length === 0 && <li>No reviews yet. Be the first to review!</li>}
        {reviews.map((r, i) => (
          <li key={i} className="review-item">
            <b>{r.user}:</b>{" "}
            {Array.from({ length: r.rating }).map((_, j) =>
              <span key={j} style={{ color: "#FFC107" }}>★</span>
            )}
            <br />{r.comment}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="card" style={{ marginTop: 22 }}>
        <div>
          <label htmlFor="rating"><b>Rate</b></label>
          <select
            id="rating"
            value={rating}
            onChange={e => setRating(Number(e.target.value))}
          >
            {[5, 4, 3, 2, 1].map(val =>
              <option key={val} value={val}>{val} Stars</option>
            )}
          </select>
        </div>
        <textarea
          rows={3}
          placeholder="Write a review..."
          value={comment}
          onChange={e => setComment(e.target.value)}
          required
        />
        <button className="btn" type="submit">Submit Review</button>
        {success &&
          <div style={{ color: "var(--color-accent)", marginTop: 8 }}>
            Thank you for your review!
          </div>
        }
      </form>
    </div>
  );
}

export default ReviewPage;
