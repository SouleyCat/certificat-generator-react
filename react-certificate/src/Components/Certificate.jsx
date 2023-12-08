import PIED from '../assets/PIED DE PAGE.png';
const Certificate = ({ data }) => {
  const {
    civility,
    prenom,
    nom,
    dateNaissance,
    lieuNaissance,
    classe,
    filiere,
    matricule,
  } = data;

  const formatDate = (inputDate) => {
    // Créez un objet Date à partir de la chaîne de date d'entrée
    const date = new Date(inputDate);

    // Tableaux pour les noms des mois et des jours de la semaine
    const months = [
      'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
      'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];

    // Obtenez le jour, le mois et l'année de la date
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Formattez la date au format "jour mois année"
    return `${day} ${month} ${year}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
<div className="py-5 w-100" style={{ position: 'relative', backgroundColor: '#284081' }}>
</div>

  <div className="py-5" style={{ position: 'absolute', width: '45px', right: 20, left: 'auto',paddingRight: '20px', backgroundColor: '#7D5D27' }}>
    {/* Contenu de l'en-tête */}
  </div>

      <style>
        {`
          @media print {
            /* Styles d'impression */
            .bg-primary {
              background-color: #007BFF; /* Couleur de fond pour l'impression */
              height: 1px; /* Hauteur de la bande de couleur dans l'aperçu d'impression */
            }
            .btn-print {
              display: none; /* Masquer le bouton d'impression lors de l'impression */
            }
            .hidden-print {
              display: block !important;
            }
          }
        `}
      </style>

      <header className="d-flex justify-content-between align-items-center py-3">
        <div className="logo">
          <img
            src="https://cat.sn/storage/0XFJUqtbNQwEZwYXiSSMt6KJLWRTPUHMqA81frjc.png"
            alt="Your Logo"
            style={{ maxWidth: '150px', marginRight: '25px' }}
          />
        </div>
      </header>
      <div className="content" style={{ margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <h1 className="text-center"style={{ textDecoration: 'underline' }}><strong>CERTIFICAT D'INSCRIPTION</strong></h1>
        <h4 className="text-center" style={{ fontStyle: 'italic' }}>
            Session Académique 2023-2024
        </h4>
        <br />
        La présente atteste que <strong>{civility === 'Monsieur' ? 'Monsieur' : 'Madame'}  {prenom} {nom}</strong>,né(e) le <strong> {formatDate(dateNaissance)} </strong> à  <strong> {lieuNaissance} </strong>, s'est régulièrement inscrit(e) et suit les cours au sein de notre Académie en <strong> {classe} </strong>
        <strong> {filiere} </strong> pour une formation initiale sous le matricule:<strong> {matricule} </strong>.
        <p style={{ fontStyle: 'italic' }}>
            En foi de quoi cette présente attestation est signée pour faire valoir ce que de droit.
        </p>
        </div>

        <button onClick={handlePrint} className="btn btn-primary btn-print">IMPRESSION</button>



      <br/>

      <br/>
      <br/>
      <br/>
      <footer className="text-center py-3">
        <div>
            <h4 className="text-center" style={{ textDecoration: 'underline' }}>COLOMBE ACADEMY OF TECHNOLOGY</h4>
            <h5 className="text-center">Service Scolarité</h5>
        </div>
        </footer>
        <div className="hidden-print" style={{ display: 'none', position: 'absolute', bottom: '0', left: '0', right: '0', marginTop: '20px', textAlign: 'center',}}>
        <img
          src={PIED}
          alt="PIED DE PAGE"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      </>
  );
};

export default Certificate;
