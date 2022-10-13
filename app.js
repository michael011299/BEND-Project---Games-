const express = require("express");
const { getCategories } = require("./Controllers/getCategories.controller");
const { getReviewById } = require("./Controllers/getReviewById.controller");
const { getReviews } = require("./Controllers/getReviews.controller");
const { getUsers } = require("./Controllers/getUsers.controllers");
const { patchReviews } = require("./Controllers/patchReview.controller");
const { postComments } = require("./Controllers/postComments.controller");
const {
  handleCustomErrors,
  handlePsqlErrors,
  handleServerErrors,
} = require("./error-handling/errors");
const app = express();
app.use(express.json());

app.get("/api/categories", getCategories);
app.get("/api/reviews/:review_id", getReviewById);
app.get("/api/users", getUsers);
app.patch("/api/reviews/:review_id", patchReviews);
app.get("/api/reviews", getReviews);
app.post("/api/reviews/3/comments", postComments);

app.use(handleCustomErrors);
app.use(handlePsqlErrors);
app.use(handleServerErrors);

module.exports = app;
