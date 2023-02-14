import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Status.css" ;

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


  return (
    <main className="status">
      <Header title="Tweet" />


      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis a aperiam, perspiciatis doloremque aspernatur ea dolor maxime eligendi tempora veniam ipsam ratione, architecto, maiores consectetur nulla itaque autem necessitatibus?
" />

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
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>

        <button type="submit">Answer</button>

      </form>
      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}