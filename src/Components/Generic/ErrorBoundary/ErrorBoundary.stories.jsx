import React from "react";
import ErrorBoundery from "./ErrorBoundery";

export default {
  title: "ErrorBoundery",
  Comment: ErrorBoundery,
};

const CommentWithoutError = () =>( <h1> sin error</h1>);

const prop = undefined;
const CommentWithError = () =>( <h1>{ prop.hola }</h1>)

export const ErrorBounderyWithError = () => (
  <ErrorBoundery>
    <CommentWithError />
  </ErrorBoundery>
)

export const ErrorBounderyWithoutError = () => (
  <ErrorBoundery>
    <CommentWithoutError />
  </ErrorBoundery>
)
