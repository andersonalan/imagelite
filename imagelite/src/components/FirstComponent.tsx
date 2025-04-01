'use client'

interface PrimeiroComponentProps {
  mensagem: string;
  mensagemDoBotao: string;

}

export const PrimeiroComponent: React.FC<PrimeiroComponentProps> = (props: PrimeiroComponentProps) => {

  function handleClick() {
    console.log(props.mensagemDoBotao)
    
  }
  return(
    <div>
      { props.mensagem }
  
      <button onClick={handleClick}>Click aqui</button>
      
    </div>
  )
}

export const ArrowFunction = () => {
  return (
    <h2>Arrow Function</h2>
  )

}