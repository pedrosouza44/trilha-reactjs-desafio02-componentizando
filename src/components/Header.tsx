interface PropsHeader {
  selectedGenre: {
    title: string,
  }
}

export function Header({ selectedGenre }: PropsHeader) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}