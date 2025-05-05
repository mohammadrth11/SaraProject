import client from "@/contentful";

export const fetchInfoSections = async () => {
  const entries = await client.getEntries({ content_type: "infoSection" });
  return entries.items;
};
