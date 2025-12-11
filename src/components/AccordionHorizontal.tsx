import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Item {
  id: number;
  title: string;
  image: string;
  content: string;
}

interface Props {
  items: Item[];
  height?: string;
}

export default function AccordionHorizontal({ items, height = "420px" }: Props) {
  const [active, setActive] = useState(items[0].id);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Função que avança automaticamente
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActive((current) => {
        const index = items.findIndex((i) => i.id === current);
        const next = items[(index + 1) % items.length];
        return next.id;
      });
    }, 3000);
  };

  // Inicia autoplay
  useEffect(() => {
    if (autoPlayEnabled) startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlayEnabled]);

  // Quando o usuário clicar, pausa autoplay por 5s
  const handleUserClick = (id: number) => {
    setActive(id);
    setAutoPlayEnabled(false);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setAutoPlayEnabled(true);
    }, 5000);
  };

  return (
    <div
      className="w-full flex overflow-hidden rounded-xl border border-white/40"
      style={{ height }}
    >
      {items.map((item) => {
        const isActive = item.id === active;

        return (
          <motion.div
            key={item.id}
            onClick={() => handleUserClick(item.id)}
            className="relative cursor-pointer flex-shrink-0 overflow-hidden border border-white/10" 
            animate={{ flex: isActive ? 4 : 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* IMAGEM */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* GRADIENTE NO BOTTOM */}
            <motion.div
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "40%", // ajuste como quiser
                background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* TÍTULO (sempre visível, vertical → horizontal quando ativo) */}
            <motion.div
              className="absolute top-4 left-4 origin-left font-bold text-white drop-shadow-lg"
              style={{
                textShadow: "0 3px 8px rgba(0, 0, 0, 0.29)",
              }}
              animate={{
                rotate: isActive ? 0 : -90,
                x: isActive ? 0 : 10,
                y: isActive ? 400 : 400,
                fontSize: isActive ? "1.3rem" : "2rem",
                opacity: 1,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {item.title}
            </motion.div>

            {/* CONTEÚDO — aparece somente quando ativo */}
            {isActive && (
              <motion.div
                className="absolute bottom-4 left-4 right-4 text-white text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {item.content}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

