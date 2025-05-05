import client from "@/contentful";

export const fetchEmphasisBoxData = async () => {
  const entries = await client.getEntries({ content_type: "emphasisBox" });
  return entries.items;
};
