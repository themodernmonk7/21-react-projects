import { Credit, Form, Title } from "./components"

function App() {
  return (
    <section className="container mx-auto mt-16 flex flex-col justify-center items-center space-y-4">
      {/* Title */}
      <Title />
      {/* form */}
      <Form />
      <Credit />
    </section>
  )
}

export default App
