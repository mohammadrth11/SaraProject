import client from "@/contentful";

export const fetchWhyChooseUsBoxData = async () => {
  const entries = await client.getEntries({ content_type: "whyChooseUsBox" });
  return entries.items;
};
