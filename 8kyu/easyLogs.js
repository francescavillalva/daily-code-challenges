/*
8kyu easy logs
15 may 2022

Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.
*/

function logs(x , a, b){
  return (Math.log(a) + Math.log(b)) / Math.log(x)
}