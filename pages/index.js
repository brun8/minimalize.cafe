import Image from "next/image"


export default function Home() {
  return (
    <div
      className='
        min-h-screen
        flex flex-col justify-center items-center gap-4
        md:p-14 p-10
        bg-zinc-200
      '
      >
      <h1
        className="
          text-3xl font-bold
        "
      >
        Minimalize café
      </h1>
      <Image
        src="/daniel.jpg"
        width={350}
        height={467}
      />
      <p>
        Asa Sul CLS 405 Bloco A LOJA 22
      </p>
    </div>
  )
}
