export type SearchParams = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export type PageParams = {
  params: { [key: string]: string };
};

export type MetadataProps = SearchParams & PageParams;
