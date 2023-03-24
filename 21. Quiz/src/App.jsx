import Modal from "./components/Modal"
import QuestionsCard from "./components/QuestionsCard"
import SetupForm from "./components/SetupForm"

function App() {
  return (
    <>
      <main className="h-screen  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center ">
        <SetupForm />
        {/* <QuestionsCard /> */}
        {/* <Modal /> */}
      </main>
    </>
  )
}

export default App
