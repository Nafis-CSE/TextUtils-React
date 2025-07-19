import Form from 'react-bootstrap/Form';
import renderAlert from './Alert';

type ToggleSwitchProps = {
  isChecked: boolean;
  handleToggle: () => void;
};

function ToggleSwitch({ isChecked, handleToggle}: ToggleSwitchProps) {
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label={isChecked ? 'Enable Light Mode' : 'Enable Dark Mode'}
        checked={isChecked}
        onChange={() => {
          handleToggle();
          // renderAlert(isChecked ? 'success' : 'dark', isChecked ? 'Light Mode Enabled!' : 'Dark Mode Enabled!');
        }}
      />
    </Form>
  );
}

export default ToggleSwitch;
