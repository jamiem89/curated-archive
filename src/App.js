import './App.css'
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';

function App() {

    const data = [
        {
            title: `Expenses tracker`,
            desc: `Built whilst working through a Udemy course: 'React: The Complete Guide'`,
            link: `https://learning-react-theta-peach.vercel.app/`
        }
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
