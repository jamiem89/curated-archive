import './App.css'
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';

function App() {

    const data = [
        {
            title: `Bobs Burgers character search`,
            desc: `A quick test to fetch data from an external API, then filter that data based on user input`,
            link: `https://bobs-burgers-stickerbook.vercel.app/`
        },
        {
            title: `Expenses tracker`,
            desc: `Built whilst working through a Udemy course: 'React: The Complete Guide'`,
            link: `https://learning-react-theta-peach.vercel.app/`
        },
    ];

  return (
    <div className="App">
      <Hero />
      <main className="main">
        <ProjectList data={data} />
      </main>

    </div>
  );
}

export default App;
