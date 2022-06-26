import PreviousSearches from '../components/PreviousSearches';
import RecipeCard from '../components/RecipeCard';

export default function Recipes() {
  const recipes = [
    {
      title: 'Suya meat',
      image: '/img/gallery/img_1.jpg',
      authorImg: '/img/top-chiefs/img_1.jpg',
    },
    {
      title: 'Jollof rice',
      image: '/img/gallery/img_2.jpg',
      authorImg: '/img/top-chiefs/img_2.jpg',
    },
    {
      title: 'Jollof rice and plaintain',
      image: '/img/gallery/img_3.jpg',
      authorImg: '/img/top-chiefs/img_3.jpg',
    },
    {
      title: 'ogbono',
      image: '/img/gallery/img_4.jpg',
      authorImg: '/img/top-chiefs/img_5.jpg',
    },
    {
      title: 'Japanese Sushi',
      image: '/img/gallery/img_5.jpg',
      authorImg: '/img/top-chiefs/img_6.jpg',
    },
    {
      title: 'Chicken Pan Pizza',
      image: '/img/gallery/img_6.jpg',
      authorImg: '/img/top-chiefs/img_1.jpg',
    },
    {
      title: 'Spaghetti and Meatballs',
      image: '/img/gallery/img_7.jpg',
      authorImg: '/img/top-chiefs/img_2.jpg',
    },
    {
      title: 'American Cheese Burger',
      image: '/img/gallery/img_8.jpg',
      authorImg: '/img/top-chiefs/img_3.jpg',
    },
    {
      title: 'Mutton Biriyani',
      image: '/img/gallery/img_9.jpg',
      authorImg: '/img/top-chiefs/img_5.jpg',
    },
    {
      title: 'Japanese Sushi',
      image: '/img/gallery/img_10.jpg',
      authorImg: '/img/top-chiefs/img_6.jpg',
    },
    {
      title: 'American Cheese Burger',
      image: '/img/gallery/img_11.jpg',
      authorImg: '/img/top-chiefs/img_3.jpg',
    },
    {
      title: 'Mutton Biriyani',
      image: '/img/gallery/img_12.jpg',
      authorImg: '/img/top-chiefs/img_5.jpg',
    },
    {
      title: 'Mutton Biriyani',
      image: '/img/gallery/img_13.jpg',
      authorImg: '/img/top-chiefs/img_5.jpg',
    },
    {
      title: 'Mutton Biriyani',
      image: '/img/gallery/img_14.jpg',
      authorImg: '/img/top-chiefs/img_5.jpg',
    },
    {
      title: 'Mutton Biriyani',
      image: '/img/gallery/img_15.jpg',
      authorImg: '/img/top-chiefs/img_5.jpg',
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className='recipes-container'>
        {/* <RecipeCard /> */}
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
