import PrintFooter from './components/PrintFooter';
import './i18n';
import BoardRender from './components/utils/BoardRender';
import { BoardProvider } from './contexts/BoardProvider';

function App() {

	return (
		<>
			<BoardProvider>
				<BoardRender/>
			</BoardProvider>
			<PrintFooter/>
		</>
	);
}

export default App;

