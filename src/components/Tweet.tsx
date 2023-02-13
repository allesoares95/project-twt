interface TweetProps {
  user: string
  children: string
  like?: number
}

export function Tweet(props: TweetProps) {

  return (
    <div className="tweet" style={{ borderRadius: 8 }} >
      <strong>{props.user}</strong>
      <p>{props.children}</p>
      <button>Like {props.like ?? 0 }</button>
    </div>
  )
}