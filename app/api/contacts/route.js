export async function GET(request) {
  const contactMediums = [
      {
        medium: "github",
        username: "kirousek",
        link: "https://github.com/kirousek",
      },
      {
        medium: "email",
        username: "polynek@kirousek.eu",
        link: "mailto:polynek@kirousek.eu",
      },
    ];

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
