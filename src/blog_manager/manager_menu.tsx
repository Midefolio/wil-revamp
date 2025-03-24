import { useNavigate } from 'react-router-dom';
import willLogo from '../../public/images/willlogo.png';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const ManagerMenu = ({ active }: any) => {
  const Navigate = useNavigate();

  const logout = () => {
    const confrm = window.confirm('Are you sure you want to logout?');
    if (!confrm) return;
    localStorage.removeItem('willmaestroit_blog_manager_token');
    window.location.reload();
  }

  return (<>
    <div className="manaher-side-bar unset-align center-content bg-white hidden-xs">
      <div className="down-1 v-gap-20 xs-gap-elements">
        <div><div className="down-5 menu"><img src={willLogo} alt="manager-logo" /></div>
          <div className='px8 centered ubuntuBold'>Blogs</div>
        </div>
        <div onClick={() => { Navigate('/blog_manager/home') }} className={`menu down-15 faded-sol  ${active == 'home' && 'active-menu'}  `} title='home' > <i><DashboardCustomizeOutlinedIcon /></i> </div>
        <div onClick={() => { Navigate('/blog_manager/new-post') }} className={`menu down-5 faded-sol ${active == 'write' && 'active-menu'}  `} title='write blog'><i><DriveFileRenameOutlineOutlinedIcon /></i></div>
        <div onClick={() => { logout() }} className={`down-5 menu faded-sol ${active == 'logout' && 'active-menu'}  `} title='logout'><i><ExitToAppOutlinedIcon /></i></div>
        <div onClick={() => { Navigate('/blog_manager/home') }} className={`down-40 menu ${active == 'settings' && 'active-menu'}  `} title='settings'><i><SettingsOutlinedIcon /></i></div>
      </div>
    </div>

    <div className='manaher-side-bar hidden-ls'>
      <div className='manager-container'>
        <div onClick={() => { Navigate('/blog_manager/home') }} className={`menu-btns down-15 faded-sol  ${active == 'home' && 'active-menu'}  `} title='home' > <i><DashboardCustomizeOutlinedIcon /></i>
        </div>
        <div onClick={() => { Navigate('/blog_manager/new-post') }} className={`menu-btns down-5 faded-sol ${active == 'write' && 'active-menu'}  `} title='write blog'><i><DriveFileRenameOutlineOutlinedIcon /></i></div>
        <div onClick={() => { Navigate('/blog_manager/home') }} className={`down-40 menu-btns faded-sol ${active == 'settings' && 'active-menu'}  `} title='settings'><i><SettingsOutlinedIcon /></i></div>
        <div onClick={() => { logout() }} className={`down-5 menu-btns faded-sol ${active == 'logout' && 'active-menu'}  `} title='logout'><i><ExitToAppOutlinedIcon /></i></div>
      </div>
    </div>

  </>);
}

export default ManagerMenu;