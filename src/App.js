import './App.css'
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';

function App() {

    const data = [
        {
            title: `Expenses tracker`,
            desc: `Built whilst working through a Udemy course: 'React: The Complete Guide'`,
            link: `https://learning-react-theta-peach.vercel.app/`
        },
        {
            title: `List generator`,
            desc: `Super simple list generator to practice two-way binding, props and state. This project has absolutely no styling.`,
            link: `react-to-do-drab.vercel.app/`
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
