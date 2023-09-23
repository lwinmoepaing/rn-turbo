export const withAccessToken = (accessToken: string) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${accessToken}`);
  return headers;
};
