export async function fetchCategories() {
    const baseURL = 'https://stagi.starclinch.com';
    const response = await fetch(`${baseURL}/categories`);
    const data = await response.json();
    return data.categories;
  }