import Counter from '@/components/Counter'
import { CounterContext } from '@/context/counter.provider'
import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import Burger from '@/components/Burger'

const App = () => {
	const { number } = useContext(CounterContext)

	return (
		<>
			<h1>{number}</h1>
			
			<Counter />
            <Burger/>
			<ToastContainer />
		</>
	)
}

export default App
