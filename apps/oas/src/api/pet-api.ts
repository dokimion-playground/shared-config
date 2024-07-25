// import { axiosInstance, PromiseAxiosResponse } from '@/worker/commands/config/apiInstance';
// import {
//   ApiResponse,
//   Pet,
// } from '../model';

const addPetAxios = ({ pet }: { pet: Pet }) => {
  const localVarPath = `/pet`;
  return axiosInstance.post(localVarPath, {
    params: {
      pet,
    },
  });
};

// const deletePetAxios = ({
//   petId,
//   apiKey,
// }: {
//   petId: number;
//   apiKey?: string;
// }): PromiseAxiosResponse<void> => {
//   const localVarPath = `/pet/{petId}`
//     .replace(`{${"petId"}}`, encodeURIComponent(String(petId)));
//   return axiosInstance._delete(
//   localVarPath,
//   {
//     params: {
//       petId,
//       apiKey,
//     }
//   })
// };

// const findPetsByStatusAxios = ({
//   status,
// }: {
//   status?: 'available' | 'pending' | 'sold';
// }): PromiseAxiosResponse<Array<Pet>> => {
//   const localVarPath = `/pet/findByStatus`;
//   return axiosInstance.get(
//   localVarPath,
//   {
//     params: {
//       status,
//     }
//   })
// };

// const findPetsByTagsAxios = ({
//   tags,
// }: {
//   tags?: Array<string>;
// }): PromiseAxiosResponse<Array<Pet>> => {
//   const localVarPath = `/pet/findByTags`;
//   return axiosInstance.get(
//   localVarPath,
//   {
//     params: {
//       tags,
//     }
//   })
// };

// const getPetByIdAxios = ({
//   petId,
// }: {
//   petId: number;
// }): PromiseAxiosResponse<Pet> => {
//   const localVarPath = `/pet/{petId}`
//     .replace(`{${"petId"}}`, encodeURIComponent(String(petId)));
//   return axiosInstance.get(
//   localVarPath,
//   {
//     params: {
//       petId,
//     }
//   })
// };

// const updatePetAxios = ({
//   pet,
// }: {
//   pet: Pet;
// }): PromiseAxiosResponse<Pet> => {
//   const localVarPath = `/pet`;
//   return axiosInstance.put(
//   localVarPath,
//   {
//     params: {
//       pet,
//     }
//   })
// };

// const updatePetWithFormAxios = ({
//   petId,
//   name,
//   status,
// }: {
//   petId: number;
//   name?: string;
//   status?: string;
// }): PromiseAxiosResponse<void> => {
//   const localVarPath = `/pet/{petId}`
//     .replace(`{${"petId"}}`, encodeURIComponent(String(petId)));
//   return axiosInstance.post(
//   localVarPath,
//   {
//     params: {
//       petId,
//       name,
//       status,
//     }
//   })
// };

// const uploadFileAxios = ({
//   petId,
//   additionalMetadata,
//   body,
// }: {
//   petId: number;
//   additionalMetadata?: string;
//   body?: File;
// }): PromiseAxiosResponse<ApiResponse> => {
//   const localVarPath = `/pet/{petId}/uploadImage`
//     .replace(`{${"petId"}}`, encodeURIComponent(String(petId)));
//   return axiosInstance.post(
//   localVarPath,
//   {
//     params: {
//       petId,
//       additionalMetadata,
//       body,
//     }
//   })
// };

export {
  addPetAxios,
  //   deletePetAxios,
  //   findPetsByStatusAxios,
  //   findPetsByTagsAxios,
  //   getPetByIdAxios,
  //   updatePetAxios,
  //   updatePetWithFormAxios,
  //   uploadFileAxios,
};
