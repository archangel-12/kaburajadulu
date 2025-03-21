export default function HomePageJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "#KaburAjaDulu",
          "url": "https://www.kaburajadulu.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.kaburajadulu.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "description": "Temukan peluang untuk bekerja, belajar, atau menjelajahi dunia dengan sumber daya komprehensif, daftar pekerjaan, beasiswa, kelas bahasa, dan banyak lagi.",
          "inLanguage": "id-ID"
        })
      }}
    />
  );
}

export function CommunityJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "KaburAjaDulu",
          "description": "Komunitas untuk yang ingin belajar dan bekerja di luar negeri",
          "@id": "https://www.kaburajadulu.com/#community",
          "url": "https://www.kaburajadulu.com",
          "logo": "https://www.kaburajadulu.com/favicon.ico",
          "sameAs": [
            "https://discord.gg/yxyjeTkapG",
            "https://github.com/0xrsydn/kaburajadulu"
          ]
        })
      }}
    />
  );
}