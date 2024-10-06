'use client'
import { permanentRedirect, useParams } from "next/navigation";

export default async function AliasPage() {
  const params = useParams()
  let alias = params
  alias = alias.alias

  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}?filterByFormula=name = "${alias}"`;
  const res = await fetch(encodeURI(url), {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
    },
  });

  const data = await res.json();
  if (data.records == 0) {
    return permanentRedirect("https://kirousek.eu");
  } else {
    const records = data.records;
    const target = records[0].fields.url
    return permanentRedirect(target);
  }
}