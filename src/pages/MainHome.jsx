import { About, Games, FilterSection  } from '../sections';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/reducers/videoGame';
import { getGames } from '../redux/actions/videoGame';
import Sidebar from '../components/Sidebar/Sidebar';
import { Social } from '../components';


const MainHome = ({setMode, mode}) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setLoading())
		dispatch(getGames());
	}, [dispatch]);

	return (
		<>
			<div>
				<div>
				</div>
				<Social />
				
				<FilterSection/>
				<Games />
				<About />
				
			</div>
		</>
	);
};

export default MainHome;
