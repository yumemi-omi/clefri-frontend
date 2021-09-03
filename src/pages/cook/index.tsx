import {
  withPageAuthRequired,
  WithPageAuthRequiredProps,
} from '@auth0/nextjs-auth0';
import { Form } from 'react-final-form';
import FileField from '@/components/common/FileField';
import { useFileUploader, FieldNameType } from '@/hooks/useFileUploader';

interface CookProps extends WithPageAuthRequiredProps {
  fieldName: FieldNameType;
}

const Cook = withPageAuthRequired<CookProps>(
  () => {
    const { onSubmit } = useFileUploader('foodstuff');
    return (
      <div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form
              encType="application/x-www-form-urlencoded"
              onSubmit={handleSubmit}
            >
              <FileField name="foodstuff" />
              <button type="submit">Submit</button>
            </form>
          )}
        />
      </div>
    );
  },
  {
    onError: function error(error) {
      return <div>{error.message}</div>;
    },
    onRedirecting: function onRedirecting() {
      return <div>Redirecting you to the login...</div>;
    },
    returnTo: '/cook',
  }
);

export default Cook;
