import axios from "axios";

const client_id = "7d48f953aa1a164f1ba0";
const client_secret = "a8703a4cbcfa0a10bda52125b4388dc02124c531";
export const fetchGravatar = (email: string) => {
  return `https://api.github.com/search/users?q=${email}?client_id=${client_id}&client_secret=${client_secret}`;
};

export const fetchGitHub = async (email: string) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users`, {
      params: { q: email },
    });
    return response.data.items[0] || null;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null;
  }
};
