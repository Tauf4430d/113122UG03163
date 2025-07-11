export const authorize = async (name, email, rollNo, accessCode, clientID, clientSecret) => {
  const details = await fetch("http://20.244.56.144/evaluation-service/auth", {
    method: "POST",
    body: JSON.stringify({
      email,
      name,
      rollNo,
      accessCode,
      clientID,
      clientSecret
    })
  })
  
  if(details.ok) {
    return await details.json();
  } else {
    console.log("ERror on getting token");
  }
}

