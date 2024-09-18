import { getJwtToken } from "./jwt_token";
import { saveXmlToDb } from "./sql_queries";
import "dotenv/config";

const ROUTE_URL = "https://dataexportimport.cdk.com/pip-extract/";

// Function to construct the API URL from given parameters
function constructAPIURL(
  dealerId: string,
  urlName: string,
  additionalParams: { [key: string]: any },
): string {
  let queryParams = new URLSearchParams({
    dealerId,
    ...additionalParams,
  }).toString();
  return `${ROUTE_URL}${urlName}/extract?${queryParams}`;
}

// Fetch data from the API and save the XML data to the database
export async function fetchData(
  dealerId: string,
  urlName: string,
  queryId: string,
  additionalParams: { [key: string]: any },
) {
  additionalParams.queryId = queryId;
  const apiURL = constructAPIURL(dealerId, urlName, additionalParams);
  console.log(apiURL);
  const token = await getJwtToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  };

  console.log("headers:\n", headers);

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: headers,
    });
    if (response.ok) {
      let xmlData = await response.text();
      await saveXmlToDb(xmlData, queryId);
      console.log("XML data saved successfully.");
    } else {
      console.error("Failed to fetch data:", response.status);
      console.error("Failed to fetch data:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
