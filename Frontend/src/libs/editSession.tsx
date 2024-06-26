export default async function editSession({
  id,
  company,
  date,
  token,
}: {
  id: string;
  company?: string;
  date?: string;
  token: string;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/sessions/${id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        company: company,
        date: date,
      }),
    }
  );
  if (!response.ok) {
    throw new Error('Edit session failed');
  }
  return response.json();
}
