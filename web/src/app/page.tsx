export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div></div>
      {/* Right */}
      <div className="flex flex-col p-16">
        <p>
          Você ainda não registrou nenhuma lembrança, comece a{' '}
          <a href=""> criar agora!</a>
        </p>
      </div>
    </div>
  )
}
