// export default function Introduction() {
//   return <div className="h-lvh w-full bg-transparent"></div>;
// }

import { useEffect, useRef } from "react";

export default function Introduction() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Встановлюємо розмір canvas під вікно
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let matrix =
      "QWERTYUIOPASDFGHJKLZXCVBNM<!@#$%^&*()_+qwertyuiopasdfghjklzxcvbnm1234567890";
    matrix = matrix.split("");
    const font_size = 20;
    const columns = canvas.width / font_size;
    const drops = Array.from({ length: columns }).fill(50);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0f0";
      ctx.font = `${font_size}px arial`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full">
      <canvas
        ref={canvasRef}
        className="invisible h-full w-full dark:visible"
      />
      <div className="pointer-events-none absolute inset-0 bg-transparent dark:bg-[#031723] dark:opacity-80" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-amber-300">Yaroslav Bozhak</h1>
        <p className="text-center text-3xl font-bold text-amber-300">
          Ruby/Ruby on Rails developer
        </p>
      </div>
    </div>
  );
}
