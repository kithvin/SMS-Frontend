import React from 'react';

export default function Footer() {
  return (
        
      <section>
        <footer className="footer text-center text-white" style={{ backgroundColor: '#0a4275' }}>
          <div className="container p-4 pb-0">
            <section>
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Transform student management with a streamlined insight-driven system.</span>
              </p>
            </section>
          </div>

          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2024 :
            <a className="text-white" href="https://mdbootstrap.com/"> Studnet Management System</a>
          </div>
        </footer>
      </section>
      
  );
}
