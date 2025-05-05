import client from "@/contentful";

export const fetchWhyChooseUsData = async () => {
  const entries = await client.getEntries({ content_type: "whyChooseUs" });
  return entries.items;
};
