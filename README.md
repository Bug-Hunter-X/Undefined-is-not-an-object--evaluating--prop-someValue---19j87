# React Native: Undefined is not an object (evaluating 'prop.someValue')

This repository demonstrates a common React Native error: "Undefined is not an object (evaluating 'prop.someValue')". This error arises when a component attempts to access a prop or state value before it's been properly initialized.

## Problem
The `bug.js` file showcases the problematic code.  It tries to access `myProp.someValue` without checking if `myProp` is defined or if `myProp.someValue` exists. This leads to the error when the component initially renders.

## Solution
The `bugSolution.js` file provides a corrected implementation. It uses optional chaining (`?.`) and nullish coalescing (`??`) to safely access the nested property.  This ensures that the code gracefully handles cases where `myProp` or `myProp.someValue` is undefined.

The solution also includes a `useEffect` hook to log the prop value after the component has mounted and ensures the prop exists before accessing it.