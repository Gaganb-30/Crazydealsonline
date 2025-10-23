import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-6">
            <AppRouter />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
