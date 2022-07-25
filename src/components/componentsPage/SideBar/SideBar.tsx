import React from 'react'
import './SideBar.scss'
import AnalyticsLogo from '../../../assets/icons/analytics.png'
import PerfomanceLogo from '../../../assets/icons/Performance.png'
import SchoolsLogo from '../../../assets/icons/Schools.png'
import TeachersLogo from '../../../assets/icons/Teachers.png'
import StudentsLogo from '../../../assets/icons/Students.png'
import ExamsLogo from '../../../assets/icons/Exams.png'
import ArchiveLogo from '../../../assets/icons/Archive.png'
import NotificationLogo from '../../../assets/icons/notification.png'
import SettingsLogo from '../../../assets/icons/settings.png'
import UserAvatar from '../../../assets/userAvatar/userAvatar.png'










export const SideBar:React.FC = () => {
	return (
		<div className='sideBar'>
			<nav className='sideBar__navigation'>
				<ul>
					<li className='sideBar__navigation-item'>
						<img src={AnalyticsLogo} alt='analytics' />
					</li>
					<li className='sideBar__navigation-item'>
						<img src={PerfomanceLogo} alt='performance' />
					</li>
					<li className='sideBar__navigation-item'>
						<img src={SchoolsLogo} alt='Schools' />
					</li>
					<li className='sideBar__navigation-item'>
						<img src={TeachersLogo} alt='Teachers' />
					</li>
					<li className='sideBar__navigation-item'>
						<img src={StudentsLogo} alt='Students' />
					</li>
					<li className='sideBar__navigation-item active'>
						<img src={ExamsLogo} alt='Exam' />
					</li>
					<li className='sideBar__navigation-item'>
						<img src={ArchiveLogo} alt='Archive' />
					</li>
				</ul>
			</nav>
			<div className='sideBar__menu'>
				<ul>
					<li className='sideBar__menu-item'>
						<img src={NotificationLogo} alt='notification' />
					</li>
					<li className='sideBar__menu-item'>
						<img src={SettingsLogo} alt='settings' />
					</li>
					<li className='sideBar__menu-item'>
						<img src={UserAvatar} alt='User Avatar' />
					</li>
				</ul>
			</div>
		</div>
	)
}
