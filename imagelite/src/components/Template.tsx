import { ToastContainer } from 'react-toastify'

interface TemplateProps {
  children: React.ReactNode;
  loading?: boolean;
}


export const Template: React.FC<TemplateProps> = ({ children, loading = false }: TemplateProps) => {
  return (
    <>
      <Header />
      <div className={`${loading ? 'animate-pulse' : ''} container mx-auto mt-8 px-4`}>
        <RenderIf condition={loading}>
          <div className="text-center">
            <Loading />
          </div>
        </RenderIf>
        {children}
      </div>

      <Footer />
      <ToastContainer position='top-right'
        autoClose={8000}
        hideProgressBar={true}
        draggable={false}
        closeOnClick={true}
        pauseOnHover={true}
      />
    </>
  )
}

const Loading: React.FC = () => {
  return (
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"
    />)
}

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-950 text-white py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">Image Lite</h1>
      </div>

    </header>
  )
}

interface RenderIfProps {
  condition?: boolean;
  children: React.ReactNode;
}

export const RenderIf: React.FC<RenderIfProps> = ({ condition = true, children }) => {
  if (condition) {
    return children
  }
  return false;
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-950 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <a
          href="https://github.com/andersonalan/imagelite"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Desenvolvido por Anderson Farias
        </a>
      </div>
    </footer>
  )
}