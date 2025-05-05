import client from "@/contentful";

export const fetchHistoryAndExcellenceData = async () => {
  const entries = await client.getEntries({
    content_type: "historyAndExcellence",
  });
  return entries.items;
};
