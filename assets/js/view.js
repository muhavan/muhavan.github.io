// File: viewCertificate.js

(function() {
    "use strict";
  
    /**
     * Function to view certificate based on certificate ID
     * @param {string} certId - ID of the certificate
     */
    function viewCertificate(certId) {
      const urls = {
        mtcna         : 'https://mikrotik.com/training/certificates/c283552c346308462ad1',
        bnsp          : 'https://drive.google.com/file/d/12pkNCYx-EOaIxRB1K2sgHK9skHHClOpU/view?usp=sharing',
        devops        : 'https://skillacademy.com/sertifikat/XS17WZI23OZPW4',
        pcap          : 'https://drive.google.com/file/d/1lCJfyeUhQD8QDKVZtF_l8ya585XITA-A/view?usp=sharing',
        office2016    : 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=250&cvid=4uic0pDpCwufi+c014eLLA=='
        // Tambahkan URL sertifikat yang sesuai di sini
      };
  
      if (urls.hasOwnProperty(certId)) {
        window.open(urls[certId], '_blank');
      } else {
        console.error('Certificate ID not found:', certId);
        alert('Certificate not found. Please contact support for assistance.');
      }
    }
  
    // Memastikan fungsi viewCertificate tersedia di global scope
    window.viewCertificate = viewCertificate;
  
  })();
  