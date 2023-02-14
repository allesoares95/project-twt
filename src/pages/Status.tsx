import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css";

export function Status() {
  const [NewAnswer, setNewAnswer] = useState('')

  const [answers, setAnswer] = useState([
    'Concordo....',
    'Olha, faz sentido!',
    'Parabens pelo progresso.'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswer([NewAnswer, ...answers]);
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswer([NewAnswer, ...answers]);
      setNewAnswer('')
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />


      <Tweet content="Se você quer se destacar no universo da programação web, é importante manter-se atualizado com as últimas tendências e tecnologias." />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/allesoares95.png"
            alt="Alexandre Soares"
          />

          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={NewAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>

      </form>
      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}