/*
8kyu ensure question
11 may 2022

Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)
"Yes" --> "Yes?" 
"No?" --> "No?"
*/

function ensureQuestion(s) {
  return s.endsWith('?') ? s : s + '?'
}