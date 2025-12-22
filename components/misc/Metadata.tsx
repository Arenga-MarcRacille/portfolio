// Source - https://stackoverflow.com/a
// Posted by Starfs, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-22, License - CC BY-SA 4.0

interface Props {
  seoTitle: string;
  seoDescription: string;
}

export default function Metadata({ seoTitle, seoDescription }: Props) {
  return (
    <>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
    </>
  );
}
