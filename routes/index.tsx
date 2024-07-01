export default function Home() {
  return (
    <div class='flex flex-col justify-center items-center px-4 py-8 mx-auto'>
      <h1 class='text-4xl font-bold'>Plan Maker</h1>
      <h2 class='text-xl font-bold mb-8'>Let AI make your weekly plan</h2>
      <a
        href='/categories'
        class='bg-gradient-to-br from-teal-400 to-blue-300 p-2 rounded-md border text-white text-lg font-bold'
      >
        Make a Plan
      </a>
    </div>
  );
}
