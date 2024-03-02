import Cookie from "js-cookie";

const SERVER_IP = "http://3.145.133.50";
const SERVER_PORT = "5000";
const API_URL = `${SERVER_IP}:${SERVER_PORT}`;
const FRONTEND_URL = "https://spin-app-ivanwind7s-projects.vercel.app/";

export async function redirectToGithubOauth() {
    try {
        const response = await fetch(`${API_URL}/auth/github/authorize?scopes=repo&scopes=user`, {
            method: "GET",
            headers: {
                "accept": "application/json",
                'Origin': FRONTEND_URL,
            },
        });
        const data = await response.json();
        window.location.href = data.authorization_url;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getOauthJwtToken() {
    const currentUrl = window.location.href;
    const queryString = currentUrl.split('?')[1];
    const queryParams = new URLSearchParams(queryString);
    const codeValue = queryParams.get('code');
    const stateValue = queryParams.get('state');

    console.log("Code:", codeValue);
    try {
        const response = await fetch(`${API_URL}/auth/github/callback?code=${codeValue}&state=${stateValue}`, {
            method: "GET",
            headers: {
                "accept": "application/json",
                'Origin': FRONTEND_URL,
            },
        });
        const data = await response.json();
        Cookie.set("jwt", data.access_token);
        window.location.href = FRONTEND_URL;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function deployRollUpConfiguration(rollUpConfiguration: any) {
    const jwtToken = Cookie.get("jwt");
    if (jwtToken === undefined) {
        console.error("No JWT token found");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/rollup/deploy`, {
            method: "PUT",
            headers: {
                "accept": "application/json",
                "Authorization": "Bearer " + jwtToken,
                "Content-Type": "application/json",
                'Origin': FRONTEND_URL,
            },
            body: JSON.stringify(rollUpConfiguration),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}
