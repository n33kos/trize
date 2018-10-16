export default (A, B, C) => Math.acos(
  (Math.pow(A, 2) - (Math.pow(B, 2) + Math.pow(C, 2))) / (-2*B*C)
);
