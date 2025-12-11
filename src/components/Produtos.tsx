import AccordionHorizontal from "./AccordionHorizontal";

function Produtos() {
  const items = [
    {
      id: 1,
      title: "Fashion",
      image: "./slide5.jpg",
      content: "Confira nossas ultimas coleções!."
    },
    {
      id: 2,
      title: "Viagens",
      image: "./slide2.jpg",
      content: "Perfeito para viagens"
    },
    {
      id: 3,
      title: "Casual",
      image: "./slide3.jpg",
      content: "Você sempre linda"
    },
    {
      id: 4,
      title: "Formal",
      image: "./slide4.jpg",
      content: "Mostre seu profissionalismo"
    },
  ];

  return (
    <div id="Produtos" className="p-10">
      <AccordionHorizontal items={items} height="500px" />
    </div>
  );
}

export default Produtos;
