import Navbar from './Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
type ThemeProps = {
  setAlert: (alert: { type: string; msg: string }) => void;
};
function Themes({setAlert}: ThemeProps) {
    const handleThemeChange = (theme: string) => {
        switch (theme) {
        case 'Light':
            document.body.style.backgroundColor = 'white';
            document.body.style.color = '#3618bbff';
            
            setAlert({ type: 'success', msg: 'Light theme applied!' });
            break;
        case 'Dark':
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            setAlert({ type: 'success', msg: 'Dark theme applied!' });
            break;
        case 'Redish':
            document.body.style.backgroundColor = '#b35353ff';
            document.body.style.color = '#470303ff';
            setAlert({ type: 'success', msg: 'Redish theme applied!' });
            break;
        case 'Bluish':
            document.body.style.backgroundColor = '#cceeff';
            document.body.style.color = '#003366';
            setAlert({ type: 'success', msg: 'Bluish theme applied!' });
            break;
        case 'Greenish':
            document.body.style.backgroundColor = '#77a677ff';
            document.body.style.color = '#004d00';
            setAlert({ type: 'success', msg: 'Greenish theme applied!' });
            break;
        default:
            break;
        }
    };
  return (
    <DropdownButton id="dropdown-item-button" title="Themes" variant='dark' className="mx-2">
      <Dropdown.ItemText>Choose a theme:</Dropdown.ItemText>
      <Dropdown.Item as="button" onClick={() => handleThemeChange('Light')}>Light</Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleThemeChange('Dark')}>Dark</Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleThemeChange('Redish')}>Redish</Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleThemeChange('Bluish')}>Bluish</Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleThemeChange('Greenish')}>Greenish</Dropdown.Item>
    </DropdownButton>
  );
}

export default Themes;