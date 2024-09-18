import "dotenv/config";

export async function getJwtToken() {
  console.log(process.env.JWT_TOKEN_URL_PROD);
  const url = process.env.JWT_TOKEN_URL_PROD!;
  const credentials = `${process.env.CLIENT_ID_PROD!}:${process.env.CLIENT_SECRET_PROD!}`;
  const encodedCredentials = Buffer.from(credentials).toString("base64");
  const headers = {
    Authorization: `Basic ${encodedCredentials}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    scope: "default",
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });
    if (response.ok) {
      const tokenInfo = await response.json();
      return tokenInfo["access_token"];
    } else {
      console.error("Failed to get token:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error retrieving JWT token:", error);
    return null;
  }
}
