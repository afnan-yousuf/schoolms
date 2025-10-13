import Card from "./components/Card";
import PrimaryHeading from "./components/PrimaryHeading";

export default function Home() {
  let data = [
    {
      h: "Product 1",
      p: "This is product 1 from our website",
      lnk: "https://logicracks.com",
    },
    {
      h: "Product 2",
      p: "This is product 2 from our website",
      lnk: "https://google.com",
    },
    {
      h: "Product 3",
      p: "This is product 1 from our website",
      lnk: "https://logicracks.com",
    },
    {
      h: "Product 4",
      p: "This is product 2 from our website",
      lnk: "https://google.com",
    },
    {
      h: "Product 5",
      p: "This is product 1 from our website",
      lnk: "https://logicracks.com",
    },
    {
      h: "Product 6",
      p: "This is product 2 from our website",
      lnk: "https://google.com",
    },
    {
      h: "Product 7",
      p: "This is product 1 from our website",
      lnk: "https://logicracks.com",
    },
    {
      h: "Product 8",
      p: "This is product 2 from our website",
      lnk: "https://google.com",
    },
  ];

  return (
    <>
      <PrimaryHeading a="Home Page" />
      <p>This is school website</p>

      <div className="flex flex-row gap-6">
        {data.map((p,i) => {
          return (
            <Card
              key={i}
              h={p.h}
              p={p.p}
              lnk={p.lnk}
            />
          );
        })}
      </div>
    </>
  );
}
