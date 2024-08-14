import HeroesAddForm from "./components/HeroesAddForm"
import HeroesFilters from "./components/HeroesFilters"
import HeroesList from "./components/HeroesList"

const App = () => {
  return (
    <main className="app">
      <div className="content">
        <HeroesList />
        <div className="content__interactive">
          <HeroesAddForm />
          <HeroesFilters />
        </div>
      </div>
    </main>
  )
}

export default App
