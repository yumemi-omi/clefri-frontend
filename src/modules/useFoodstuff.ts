import { useQuery, useMutation, gql } from 'urql';

import {
  AddFoodstuff,
  UpdateFoodstuff,
  UpdateFoodstuffQuantity,
} from '@/modules/schema';

import { useAddFoodstuffMutation } from '@/generated/graphql';

type VariablesType = {
  foodstuff_id: string;
  box_id?: string;
  foodstuff_name?: string;
  quantity?: string;
};

const useFoodstuff = (variables: VariablesType) => {
  // const [addFoodstuffResult, addFoodstuff] = useMutation(AddFoodstuff);
  const [updateFoodstuffResult, updateUpdateFoodstuff] =
    useMutation(UpdateFoodstuff);
  const [updateFoodstuffQuantityResult, updateUpdateFoodstuffQuantity] =
    useMutation(UpdateFoodstuffQuantity);
  const [addFoodstuffResult, addFoodstuff] = useAddFoodstuffMutation();

  const onAddFoodstuff = async () => {
    const variables = {
      foodstuff_name: 'テスト食材',
      quantity: 2,
      box_id: '6e7fb97e-9732-43b9-bee6-dda4def17e21',
    };
    await addFoodstuff(variables);
  };

  return {
    onAddFoodstuff,
  };
};

export default useFoodstuff;
