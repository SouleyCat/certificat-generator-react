import  { useState } from 'react';
import Certificate from './Components/Certificate';
import FormComponent from './Components/FormComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState(null);

  const handleSave = (data) => {
    // Stockez les données dans l'état de l'application
    setFormData(data);
  };

  return (
    <BrowserRouter>
    <div className="App">
      {formData ? (
        <Certificate data={formData} />
      ) : (
        <FormComponent onSave={handleSave} />
      )}
    </div>
    </BrowserRouter>
  );
}

export default App;
