import { useUser } from '@auth0/nextjs-auth0';
import { useCallback } from 'react';
import file from '@/utils/file';

export type FieldNameType = 'foodstuff' | 'file';

type FileUploaderValueType = {
  [k in FieldNameType]: FileList;
};

export const useFileUploader = (fieldName: FieldNameType = 'file') => {
  const { user } = useUser();
  const userId = user?.sub;

  const onSubmit = useCallback(
    async (values: FileUploaderValueType) => {
      file.compressImage(values[fieldName], {
        quality: 0.6,
        convertSize: 3000000,
        async success(result: File) {
          const payload = new FormData();
          if (userId) payload.append('userId', userId);
          payload.append(fieldName, result, result.name);

          const response = await fetch(
            'https://dhase0awdk.execute-api.ap-northeast-1.amazonaws.com/dev/foodstuff/image',
            {
              method: 'POST',
              body: payload,
            }
          );
          const data = await response.json();
          console.log('Success!', data);
        },
      });
    },
    [userId, fieldName]
  );

  return {
    onSubmit,
  };
};
