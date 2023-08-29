
const handleCategory = async () => {
    const respose = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await respose.json();
    console.log(data);
}
handleCategory();