const API_KEY = "sk-iFFkYiwz65BTdN9saIjmgR55RGR6jdGlNb24RRecbG63e0SG";

const BASE_URL = "https://api.agentrouter.to/api/agentic-api";

async function testAgentRouter() {
  console.log("🔄 Testing AgentRouter API key...\n");

  const url = `${BASE_URL}/wallet`;

  console.log("URL:", url);
  console.log("Key:", `${API_KEY.slice(0, 8)}...`);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json",
      },
    });

    const text = await response.text();

    let data;

    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    console.log("\nHTTP Status:", response.status);

    console.log("Response:");
    console.log(JSON.stringify(data, null, 2));

    if (response.ok) {
      console.log("\n✅ AgentRouter API key is VALID");
      console.log("✅ Authentication successful");
    } else {
      console.log("\n❌ AgentRouter API key TEST FAILED");

      if (response.status === 401) {
        console.log("\n⚠️ 401 Unauthorized");
        console.log("Check that the key:");
        console.log("1. Starts with aak_");
        console.log("2. Does NOT contain 'Bearer'");
        console.log("3. Has no extra spaces");
        console.log("4. Is an AgentRouter Agentic API key");
      }
    }
  } catch (error) {
    console.error("\n❌ Request error:");
    console.error(error.message);
  }
}

testAgentRouter();