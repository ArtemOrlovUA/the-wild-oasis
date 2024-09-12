import supabase from './supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error.message);
    throw new Error('An error occurred while fetching cabins');
  }

  return data;
}

export async function createCabin(cabin) {
  const { data, error } = await supabase.from('cabins').insert([cabin]);

  if (error) {
    console.error(error.message);
    throw new Error('An error occurred while creating the cabin');
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error.message);
    throw new Error('An error occurred while deleting the cabin');
  }

  return data;
}
