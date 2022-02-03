import { Button } from "../components/Button";
import { toggleTheme } from "../theme";

const TailwindcssPage = () => {
  return (
    <div className="container mx-auto px-8">
      <h1 className="text-3xl font-bold text-yellow-500 dark:text-white">
        Meu Tailwind Forms
      </h1>
      <Button>Enviar</Button>
      <Button variant="primary">Enviar</Button>
      <Button variant="secondary">Enviar</Button>

      <div className="flex">
        <Button variant="primary" onClick={() => toggleTheme()}>
          Light
        </Button>
        <Button variant="secondary" onClick={() => toggleTheme()}>
          Dark
        </Button>
      </div>
    </div>
  );
};
//margin x

export default TailwindcssPage;
