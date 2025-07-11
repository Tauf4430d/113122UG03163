import { authorize } from "./authorize.js"

export const  Log = async (stack, level, pkg, message) => {
  try {
    const call = await authorize("Taufiq Ameen", "taufiqameens.cse22@veltechmultitech.org", "113122UG03163", "CWbqgK", "5ce2c952-db7e-43fc-9104-fe01fa9a388b", "MxvNHqzREEeKSngh");
    const token = call.access_token;
    console.log(token);
    const logDetails = await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        stack,
        level,
        "package":pkg,
        message
      })
    });
    const response = await logDetails.json();
    console.log('Log response:', response);
  } catch (error) {
    console.error('Logging failed:', error);
  }
};

