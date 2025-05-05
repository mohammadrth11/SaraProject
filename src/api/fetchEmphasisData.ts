import client from "@/contentful";

export const fetchEmphasisData = async () => {
  const entries = await client.getEntries({ content_type: "ourEmphasis" });
  return entries.items;
};
