import { useQuery } from '@tanstack/react-query';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';
import Spinner from '../../ui/Spinner';
import { useUpdateSettings } from './useUpdateSetting';
import toast from 'react-hot-toast';
function UpdateSettingsForm() {
  const {
    settings: { minBookinglength, maxBookinglength, maxGuestsPerBooking, breakfastPrice } = {},
    isLoading,
  } = useSettings();

  const { updateSettings, isUpdatingSettings } = useUpdateSettings();

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value || value < 1) {
      toast.error('Value must be greater than 0');
      return;
    }
    updateSettings({ [field]: value });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookinglength}
          onBlur={(e) => handleUpdate(e, 'minBookinglength')}
          disabled={isUpdatingSettings}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookinglength}
          onBlur={(e) => handleUpdate(e, 'maxBookinglength')}
          disabled={isUpdatingSettings}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdate(e, 'maxGuestsPerBooking')}
          disabled={isUpdatingSettings}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, 'breakfastPrice')}
          disabled={isUpdatingSettings}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
